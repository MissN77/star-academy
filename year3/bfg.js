// ── THE BFG BOOK CLUB ────────────────────────────────────────────────────────
// A companion to the real book, NOT a copy of it.
//
// Roald Dahl's text is in copyright, so not one line of it is reproduced here.
// Instead this works the way a teacher runs guided reading: Ava reads the real
// book, with the real book in her hands, and then answers questions about the
// part she has just read. The book is the text. This is the comprehension.
//
// Stages are by STORY EVENT, not chapter number, so it works with any edition
// and she can jump in wherever she has got to.
//
// The only words of Dahl's used anywhere are his invented ones (snozzcumber,
// frobscottle, whizzpopper and so on). They are treated as vocabulary, named as
// his, the way you would teach any author's coinages.
(function (root) {
  'use strict';

  const STAGES = [
    {
      id: 'snatch', title: '1. The Witching Hour',
      readFirst: 'Read up to the point where the giant carries Sophie away from the orphanage.',
      qs: [
        { q: 'Where is Sophie living at the start of the story?', opts: ['An orphanage', 'With her grandmother', 'In a palace', 'In a village school'], ans: 0, why: 'Sophie is an orphan. That is why nobody comes looking for her.' },
        { q: 'What does Dahl call the dead of night, when everyone is asleep?', opts: ['The witching hour', 'The dark hour', 'The silent hour', 'The sleeping hour'], ans: 0, why: 'He gives it a name so it feels like a real, dangerous time.' },
        { q: 'Why does Sophie get out of bed in the first place?', opts: ['She cannot sleep and goes to the window', 'She hears her name called', 'She is hungry', 'Matron sends her'], ans: 0, why: 'Everything that happens follows from one small ordinary choice.' },
        { q: 'What is the giant doing in the street when Sophie sees him?', opts: ['Blowing something through a trumpet into a bedroom window', 'Eating', 'Searching the bins', 'Sleeping'], ans: 0, why: 'She has no idea yet what he is doing. Neither has the reader.' },
        { q: 'Why does the giant take Sophie away?', opts: ['She has seen him, and nobody must know giants exist', 'He is hungry', 'She asks to go', 'He mistakes her for someone else'], ans: 0, why: 'He explains it himself later. Being seen is the one thing he cannot allow.' },
        { q: 'What does Sophie think is going to happen to her?', opts: ['She is going to be eaten', 'She is going on holiday', 'She is being rescued', 'She is dreaming'], ans: 0, why: 'Her fear is what makes the early chapters tense.' },
        { q: 'Why does Dahl start the story in an ordinary bedroom?', opts: ['So the giant appearing feels shocking', 'To describe the furniture', 'Because it is a true story', 'To make the reader sleepy'], ans: 0, why: 'The more ordinary the beginning, the bigger the shock when it breaks.' },
        { q: 'What does it mean that Sophie was "whisked" away?', opts: ['Taken very quickly', 'Taken gently', 'Mixed up', 'Left behind'], ans: 0, why: 'Whisked means done fast, before you can react.' }
      ]
    },
    {
      id: 'cave', title: '2. Giant Country',
      readFirst: 'Read on until Sophie is inside the cave and has worked out who the giant is.',
      qs: [
        { q: 'How does the BFG compare to the other giants?', opts: ['He is the smallest of them', 'He is the biggest', 'He is the oldest', 'He is exactly the same'], ans: 0, why: 'Being the runt is why the others bully him, and why he is different.' },
        { q: 'What do the other giants eat?', opts: ['Human beings', 'Snozzcumbers', 'Sheep', 'Nothing at all'], ans: 0, why: 'The BFG is the only one who refuses to.' },
        { q: 'What does the BFG call people?', opts: ['Human beans', 'Human beings', 'Littles', 'Groundlings'], ans: 0, why: 'He muddles the word, and Dahl never corrects him.' },
        { q: 'Why is Sophie safe with the BFG?', opts: ['He does not eat people', 'He is too small to catch her', 'She hides from him', 'The other giants protect her'], ans: 0, why: 'He is the one giant who has never eaten a person.' },
        { q: 'What does the BFG keep on the shelves in his cave?', opts: ['Jars with dreams in them', 'Books', 'Jars of jam', 'Bones'], ans: 0, why: 'Sophie sees them before she understands what they are.' },
        { q: 'Why does the BFG have to hide Sophie?', opts: ['The other giants would eat her', 'She would run away', 'She might break the jars', 'She talks too much'], ans: 0, why: 'Her safety depends on staying hidden, which builds the danger.' },
        { q: 'What does Dahl show by making the kind giant the small one?', opts: ['Being different from the crowd can be a good thing', 'Small people are weak', 'Giants are all the same', 'Size does not exist'], ans: 0, why: 'The BFG is an outsider, and that is exactly why he is decent.' },
        { q: 'What does "enormous" mean?', opts: ['Extremely large', 'Extremely loud', 'Extremely frightening', 'Extremely fast'], ans: 0, why: 'It is about size, not noise or fear.' }
      ]
    },
    {
      id: 'gobblefunk', title: '3. The Way He Talks',
      readFirst: 'You can answer these once the BFG has started talking properly.',
      qs: [
        { q: 'Why does the BFG get words wrong?', opts: ['He taught himself and nobody corrected him', 'He is not clever', 'He is joking', 'He speaks another language'], ans: 0, why: 'He explains that he never went to school. His mistakes are not stupidity.' },
        { q: 'A SNOZZCUMBER is ___.', opts: ['a disgusting vegetable he has to eat', 'a kind of dream', 'a drink', 'a giant'], ans: 0, why: 'You can hear "cucumber" inside it, and "snozz" makes it sound revolting.' },
        { q: 'FROBSCOTTLE is ___.', opts: ['a fizzy drink whose bubbles go downwards', 'a nightmare', 'a vegetable', 'a kind of net'], ans: 0, why: 'Downward bubbles are the whole joke, and the reason for whizzpoppers.' },
        { q: 'What does a WHIZZPOPPER turn out to be?', opts: ['A loud bottom burp', 'A firework', 'A sneeze', 'A shout'], ans: 0, why: 'Dahl invents a polite-sounding word for a very rude thing. That is why it is funny.' },
        { q: 'A TROGGLEHUMPER is ___.', opts: ['a horrible nightmare', 'a lovely dream', 'a giant', 'a vegetable'], ans: 0, why: 'The sound of the word does the work. Nothing called a trogglehumper is going to be nice.' },
        { q: 'A PHIZZWIZARD is ___.', opts: ['a wonderful dream', 'a nightmare', 'a firework', 'a bad smell'], ans: 0, why: 'Phizz and wizard both sound bright and exciting.' },
        { q: 'Why does Dahl invent words instead of using real ones?', opts: ['So the BFG sounds like nobody else in any book', 'Because he could not spell', 'To make the book longer', 'To confuse the reader'], ans: 0, why: 'The invented words ARE the character. Take them away and he is just a tall man.' },
        { q: 'When you meet an invented word, what is the best thing to do?', opts: ['Look for real words hiding inside it', 'Skip the sentence', 'Look it up in a dictionary', 'Ask someone to change it'], ans: 0, why: 'Snozzcumber, whizzpopper and trogglehumper all give themselves away if you listen.' }
      ]
    },
    {
      id: 'giants', title: '4. The Nasty Giants',
      readFirst: 'Read the parts where the Bloodbottler and the Fleshlumpeater appear.',
      qs: [
        { q: 'How many other giants are there besides the BFG?', opts: ['Nine', 'Five', 'Twelve', 'Twenty'], ans: 0, why: 'Count them when Dahl lists their names.' },
        { q: 'Which giant is the leader?', opts: ['The Fleshlumpeater', 'The Bloodbottler', 'The Bonecruncher', 'The Gizzardgulper'], ans: 0, why: 'He is the biggest and the others follow him.' },
        { q: 'What do the giants\' names tell you before they even appear?', opts: ['Exactly how horrible they are', 'Where they come from', 'How old they are', 'What they look like'], ans: 0, why: 'Every name is built out of a body part and something awful happening to it.' },
        { q: 'What happens when the Bloodbottler comes into the cave?', opts: ['Sophie has to hide and nearly gets eaten', 'He becomes friendly', 'He takes the jars', 'He falls asleep'], ans: 0, why: 'It is the most frightening moment in the middle of the book.' },
        { q: 'Why do the other giants bully the BFG?', opts: ['He is smaller and will not eat people', 'He is cleverer than them', 'He stole from them', 'He is older'], ans: 0, why: 'He refuses to be like them, so they punish him for it.' },
        { q: 'How does the BFG save Sophie from the Bloodbottler?', opts: ['He offers him a snozzcumber instead', 'He fights him', 'He shouts for help', 'He runs away with her'], ans: 0, why: 'He uses the one thing he has, and it works because snozzcumbers are so disgusting.' },
        { q: 'Why does Dahl make the nasty giants funny as well as frightening?', opts: ['So the book is scary without becoming unbearable', 'Because he ran out of ideas', 'To make them likeable', 'To slow the story down'], ans: 0, why: 'A giant who eats people and also whines about vegetables is frightening you can survive.' },
        { q: 'What does REVOLTING mean?', opts: ['Absolutely disgusting', 'Very large', 'Very fast', 'Rather sad'], ans: 0, why: 'Something revolting turns your stomach.' }
      ]
    },
    {
      id: 'dreams', title: '5. Dream Country',
      readFirst: 'Read the journey to Dream Country and the dream catching.',
      qs: [
        { q: 'What does the BFG do with the dreams he catches?', opts: ['Keeps them in jars and blows good ones to children', 'Sells them', 'Eats them', 'Lets them go'], ans: 0, why: 'That is what Sophie saw him doing in the very first chapter.' },
        { q: 'What does he use to catch them?', opts: ['A net', 'A jar on a string', 'His hands', 'A trumpet'], ans: 0, why: 'He catches them like butterflies.' },
        { q: 'How does he know what is inside each jar?', opts: ['He can hear dreams', 'He looks at them', 'He labels them at random', 'He tastes them'], ans: 0, why: 'His enormous ears are the reason he can do a job no other giant could do.' },
        { q: 'What does he do with a bad dream he catches by mistake?', opts: ['Keeps it separately rather than giving it to a child', 'Blows it at the nearest window', 'Throws it away at once', 'Drinks it'], ans: 0, why: 'He is careful. Later, that stored nightmare becomes useful.' },
        { q: 'Why does Dahl give the BFG enormous ears?', opts: ['So he can hear things nobody else can, including dreams', 'To make him look funny', 'So he can fly', 'To keep him warm'], ans: 0, why: 'Every odd thing about him turns out to have a purpose.' },
        { q: 'What is the first thing Sophie notices about Dream Country?', opts: ['It is silent and empty', 'It is crowded', 'It is underwater', 'It is on fire'], ans: 0, why: 'The stillness is what makes it strange.' },
        { q: 'Why is dream catching a good job for the BFG in particular?', opts: ['It is a kind job, and he is the only kind giant', 'It is easy', 'It pays well', 'The other giants asked him to'], ans: 0, why: 'He spends his nights giving children good dreams while the others eat children. Dahl puts the two side by side on purpose.' },
        { q: 'What does DELICATE mean when it describes the dreams?', opts: ['Easily broken or damaged', 'Very tasty', 'Very large', 'Very old'], ans: 0, why: 'They have to be handled with great care.' }
      ]
    },
    {
      id: 'plan', title: '6. The Plan',
      readFirst: 'Read from where Sophie thinks of the plan up to the royal breakfast.',
      qs: [
        { q: 'Whose help does Sophie decide they need?', opts: ['The Queen of England', 'The police', 'The army on its own', 'Her headteacher'], ans: 0, why: 'Only someone with real power can order the giants stopped.' },
        { q: 'How do they tell the Queen what is happening?', opts: ['The BFG mixes a dream and blows it into her bedroom', 'They write her a letter', 'Sophie telephones', 'They knock on the palace door'], ans: 0, why: 'They use the one skill the BFG has, which is why the plan is so satisfying.' },
        { q: 'Why does Sophie want to be on the windowsill when the Queen wakes?', opts: ['So the Queen sees the dream was true', 'So she can escape', 'To see the palace', 'To wake her up'], ans: 0, why: 'The dream alone would not be believed. Sophie is the proof.' },
        { q: 'Who is Mary in the palace?', opts: ['The maid', 'The Queen\'s daughter', 'The cook', 'A giant'], ans: 0, why: 'She is the first person to see Sophie and reacts exactly as you would.' },
        { q: 'What problem does the palace have at breakfast?', opts: ['Nothing in it is anywhere near big enough for the BFG', 'There is no food', 'The BFG will not come in', 'Nobody speaks his language'], ans: 0, why: 'The comedy comes from a giant in a very polite building.' },
        { q: 'Why does Dahl make the Queen believe them so quickly?', opts: ['The dream and Sophie together are proof she cannot argue with', 'She is easily fooled', 'She already knew about giants', 'The BFG threatens her'], ans: 0, why: 'He gives her evidence, not just a story, so a sensible person can act on it.' },
        { q: 'What does it show about Sophie that the plan is hers?', opts: ['She is brave and quick thinking, not just a victim', 'She is bossy', 'She is frightened', 'She wants to meet the Queen'], ans: 0, why: 'She starts the book being carried off in a blanket and ends it directing an army.' },
        { q: 'What does PERSUADE mean?', opts: ['Talk someone into believing or doing something', 'Frighten someone', 'Ignore someone', 'Follow someone'], ans: 0, why: 'Sophie has to persuade a queen, which is the hardest persuading there is.' }
      ]
    },
    {
      id: 'capture', title: '7. The Capture',
      readFirst: 'Read the capture of the giants.',
      qs: [
        { q: 'How are the giants carried away?', opts: ['Hanging underneath helicopters', 'In lorries', 'On ships', 'They walk'], ans: 0, why: 'Nothing on the ground could possibly hold them.' },
        { q: 'When do the soldiers tie the giants up?', opts: ['While they are asleep', 'After a battle', 'While they are eating', 'At night in the dark'], ans: 0, why: 'Awake, they could not be caught at all. The BFG knows when they sleep.' },
        { q: 'Where are the giants put in the end?', opts: ['In a huge pit they cannot climb out of', 'In a prison', 'On an island', 'Back in Giant Country'], ans: 0, why: 'They are kept alive, but they can never reach anybody again.' },
        { q: 'What are the giants fed?', opts: ['Snozzcumbers', 'Nothing', 'Ordinary food', 'Frobscottle'], ans: 0, why: 'It is a neat punishment: the thing they always sneered at is now all they get.' },
        { q: 'Why does the BFG have to go with the helicopters?', opts: ['He is the only one who knows the way to Giant Country', 'He wants to fight', 'To carry the ropes', 'The Queen orders him to'], ans: 0, why: 'Nobody else has ever been there, so the whole plan depends on him.' },
        { q: 'Why does Dahl not have the giants killed?', opts: ['It keeps the story punishing without turning cruel', 'He forgot', 'The Queen would not allow it', 'They escape'], ans: 0, why: 'They end up trapped, hungry and humiliated, which in a Dahl book is worse.' },
        { q: 'What happens to Sophie and the BFG at the end?', opts: ['They are given homes of their own near the palace', 'They go back to the cave', 'They go back to the orphanage', 'They are separated'], ans: 0, why: 'Two characters who both started with nobody end up with each other.' },
        { q: 'The BFG learns to read and write, and then writes ___.', opts: ['this book', 'a letter to the giants', 'a dictionary', 'nothing'], ans: 0, why: 'The last chapter turns the whole story into something he wrote, which is Dahl\'s joke on himself.' }
      ]
    },
    {
      id: 'writer', title: '8. How Dahl Does It',
      readFirst: 'Answer these when you have finished the whole book.',
      qs: [
        { q: 'Dahl often puts something horrible next to something funny. Why?', opts: ['The funny bit makes the horrible bit bearable', 'He cannot decide', 'To make it longer', 'To confuse you'], ans: 0, why: 'Man-eating giants who whine about vegetables. Frightening, then silly, then frightening again.' },
        { q: 'Why does he give the BFG so many mistakes in his speech?', opts: ['It makes him sound gentle and unschooled, never stupid', 'To teach bad grammar', 'To annoy teachers', 'Because it is easier to write'], ans: 0, why: 'Dahl never lets anyone laugh at him for it. Sophie corrects him kindly, and he carries on regardless.' },
        { q: 'What is ALLITERATION, which Dahl uses constantly?', opts: ['Words near each other starting with the same sound', 'Words that copy a noise', 'Words that rhyme', 'Words with a prefix'], ans: 0, why: 'Bloodbottler, Bonecruncher, Fleshlumpeater. Once you hear it you cannot unhear it.' },
        { q: 'Which giant name is built from a body part plus something awful?', opts: ['Gizzardgulper', 'Sophie', 'Frobscottle', 'Snozzcumber'], ans: 0, why: 'Gizzard, which is part of an animal, plus gulping it down.' },
        { q: 'Why does the story need Sophie to be an orphan?', opts: ['Nobody misses her, so the adventure can happen', 'To make you feel sorry for her', 'So she is brave', 'So she can be small'], ans: 0, why: 'A child with parents would be missed by Tuesday and the book would end.' },
        { q: 'What does Dahl want you to feel about the BFG at the end?', opts: ['That being different was his best quality', 'That he should have been braver', 'That he was foolish', 'That he was frightening'], ans: 0, why: 'Everything the other giants mocked, his size, his diet, his ears, is exactly what saves everyone.' },
        { q: 'If you invented a giant, what would make the name work?', opts: ['Sounds that suggest what he does', 'A long name', 'A name that rhymes', 'A very ordinary name'], ans: 0, why: 'Say your name out loud. If it sounds like what he does, it is a good one.' },
        { q: 'What is the best way to enjoy the BFG\'s speech?', opts: ['Read it out loud', 'Read it silently and fast', 'Skip it', 'Correct it as you go'], ans: 0, why: 'It was written to be heard. Out loud, the mistakes turn into music.' }
      ]
    }
  ];

  function shuffle(a) {
    const c = [...a];
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
  }

  function questionsFor(id) {
    const s = STAGES.find((x) => x.id === id) || STAGES[0];
    return shuffle(s.qs).map((q) => {
      const correct = q.opts[q.ans];
      const opts = shuffle(q.opts);
      return { q: q.q, opts, ans: opts.indexOf(correct), why: q.why };
    });
  }

  root.Y3_BFG = { STAGES, questionsFor };
})(typeof window !== 'undefined' ? window : globalThis);
