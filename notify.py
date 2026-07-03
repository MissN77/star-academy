#!/usr/bin/env python3
"""
Activity notifier for Ava and Jacob.
Runs every 15 minutes via cron, but emails each child AT MOST ONCE PER DAY, on
their first activity of the day. This stops the every-15-minutes all-day drip
that was disturbing everyone. The full breakdown of what they did and got wrong
lives in the 7pm digest and the parent dashboard.
"""
import json, urllib.request, smtplib, ssl, os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timezone


def today_local():
    """Today's date (local time) as YYYY-MM-DD, for once-a-day gating."""
    return datetime.now().astimezone().date().isoformat()


def parse_ts(s):
    """Parse a Supabase ISO timestamp to an aware UTC datetime."""
    if not s:
        return None
    try:
        return datetime.fromisoformat(s.replace('Z', '+00:00')).astimezone(timezone.utc)
    except Exception:
        return None

SB_URL = 'https://pimhwskthibxkpfjlkfu.supabase.co'
SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbWh3c2t0aGlieGtwZmpsa2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NDEzNjksImV4cCI6MjA5NzIxNzM2OX0.urlGrk-K0o7H3Us3sOizvZ4-S8SAB2uULHAGGYro4RY'
JACOB_ID = 'ff567baf-d27e-43b7-94f2-90dbe19fd031'
GMAIL_USER = 'advisoryscience@gmail.com'
GMAIL_APP_PASSWORD = 'uzjn fvpz nutm tjhc'
SEND_TO = ['advisoryscience@gmail.com', 'pghayles@gmail.com']
STATE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'notify_state.json')

SUBJECT_LABELS = {
    'stories': 'Reading', 'maths': 'Maths', 'science': 'Science',
    'history': 'History', 'geography': 'Geography', 'grammar': 'Grammar',
    'spelling': 'Spelling', 'english': 'English', 'language': 'Languages',
    'world': 'World Knowledge', 'times': 'Times Tables', 'prep': '11+ Prep',
    're': 'RE', 'match': 'Matching', 'odd': 'Odd One Out',
    'short': 'Short Answer', 'speed': 'Speed Test', 'general': 'General',
}

def sb_get(table, params=''):
    url = f"{SB_URL}/rest/v1/{table}?{params}".replace('+', '%2B')
    req = urllib.request.Request(url, headers={
        'apikey': SB_KEY, 'Authorization': f'Bearer {SB_KEY}'
    })
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read())
    except Exception as e:
        print(f"  Error querying {table}: {e}")
        return []

def load_state():
    if os.path.exists(STATE_FILE):
        try:
            return json.load(open(STATE_FILE))
        except Exception:
            pass
    return {'ava_last': '2000-01-01T00:00:00Z', 'jacob_last': '2000-01-01T00:00:00Z',
            'ava_notified_date': None, 'jacob_notified_date': None}

def save_state(state):
    json.dump(state, open(STATE_FILE, 'w'), indent=2)

def send_email(subject, body):
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = GMAIL_USER
    msg['To'] = ', '.join(SEND_TO)
    msg.attach(MIMEText(body, 'plain'))
    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=ctx) as s:
        s.login(GMAIL_USER, GMAIL_APP_PASSWORD)
        s.sendmail(GMAIL_USER, SEND_TO, msg.as_string())

def grade(pct):
    if pct >= 90: return 'Pass'
    if pct >= 70: return 'Nearly'
    return 'Needs practice'

def run():
    state = load_state()
    today = today_local()
    alerts = []

    # Check Ava (star_activity). Only build an alert if she has not been
    # notified yet today; always advance the seen marker either way.
    ava_new = sb_get('star_activity',
        f'child_name=eq.Ava&completed_at=gt.{state["ava_last"]}&select=*&order=completed_at.asc')
    if ava_new:
        if state.get('ava_notified_date') != today:
            lines = ['Ava has started her learning today.', '', 'So far:']
            for a in ava_new:
                total = a.get('total', 0) or 0
                score = min(a.get('score', 0) or 0, total)
                pct = round(score / total * 100) if total > 0 else 0
                subject = SUBJECT_LABELS.get(a.get('activity_type', ''), a.get('activity_type', ''))
                lines.append(f"  {a['activity_name']} ({subject}): {score}/{total} ({pct}%) - {grade(pct)}")
            alerts.append(('Ava', '\n'.join(lines)))
            state['ava_notified_date'] = today
        state['ava_last'] = ava_new[-1]['completed_at']

    # Check Jacob (j11_quiz_results). Include what he got wrong so far today.
    jacob_new = sb_get('j11_quiz_results',
        f'player_id=eq.{JACOB_ID}&completed_at=gt.{state["jacob_last"]}&select=*&order=completed_at.asc')
    if jacob_new:
        if state.get('jacob_notified_date') != today:
            lines = ['Jacob has started his learning today.', '', 'So far:']
            for q in jacob_new:
                total = q.get('total', 0) or 0
                correct = min(q.get('correct', 0) or 0, total)  # clamp: never above the total
                pct = round(correct / total * 100) if total > 0 else 0
                section = q.get('sub_section') or q.get('section', 'Quiz')
                section = section.replace('-', ' ').title()
                lines.append(f"  {section}: {correct}/{total} ({pct}%) - {grade(pct)}")
                # What he could not do: name the questions he got wrong.
                details = q.get('details') or []
                for d in details:
                    ques = (d.get('q') or '').strip()
                    if len(ques) > 90:
                        ques = ques[:87] + '...'
                    lines.append(f"      x got wrong: {ques}  (he put '{d.get('given','')}', answer '{d.get('correct','')}')")
            alerts.append(('Jacob', '\n'.join(lines)))
            state['jacob_notified_date'] = today
        state['jacob_last'] = jacob_new[-1]['completed_at']

    if not alerts:
        print("No new activity, or already notified today.")
        save_state(state)
        return

    names = ' + '.join(a[0] for a in alerts)
    subject = f"{names} started 11+ practice today"
    body = '\n\n'.join(a[1] for a in alerts)
    body += f'\n\n{datetime.now().strftime("%H:%M, %A %d %B %Y")}'
    body += ('\n\nThis is a once-a-day heads-up. The full breakdown of everything '
             'they did and got wrong comes in the 7pm digest and here anytime: '
             'https://missn77.github.io/jacob-11plus-tutor/dashboard.html')
    try:
        send_email(subject, body)
        print(f"Alert sent for {names}")
    except Exception as e:
        print(f"Email failed: {e}")

    save_state(state)

if __name__ == '__main__':
    run()
