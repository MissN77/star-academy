// ── YEAR 3 READING ───────────────────────────────────────────────────────────
// Eight ORIGINAL passages written for this app, around 220 words each, at Year 3
// reading level. They share the flavour of the books Ava is reading this year,
// giants, dreams and night-time, but not one word is taken from any published
// book. Questions cover the four things Year 3 is assessed on: finding the
// answer in the text, working it out (inference), what a word means here, and
// why the writer chose to put it that way.
(function (root) {
  'use strict';

  const PASSAGES = [
    {
      id: 'lamplighter', title: 'The Last Lamplighter', icon: '\u{1F3EE}',
      text: `Every evening, just as the sky turned the colour of weak tea, Old Nol shouldered his ladder and walked the length of Cobb Street lighting the lamps.

He had done it for forty-one years. He knew which lamps flickered, which ones hissed, and which one outside the baker's had a crack that whistled when the wind came off the river.

The town had electric lights now. They came on by themselves at dusk, all at once, without anybody asking them to. Nol thought they were rude.

One Tuesday, a man from the council came to Cobb Street with a clipboard and a sorry sort of face. He explained that the old lamps were to be taken down on Friday.

Nol said nothing at all. He simply nodded, and went on lighting them, one by one, while the man stood on the pavement and watched his breath cloud in the cold.

On Friday morning, the workmen arrived to find every single lamp polished until it shone, and a small card tied to the last one with garden string.

The card said: LOOK AFTER THEM.

Nobody ever found out where Old Nol went. But for years afterwards, people swore that on the very coldest nights, the lamp outside the baker's still whistled, even when there was no wind at all.`,
      qs: [
        { q: 'How long had Nol been lighting the lamps?', opts: ['Forty-one years', 'Fourteen years', 'Four years', 'All his life'], ans: 0, why: 'The text says "He had done it for forty-one years."', kind: 'retrieval' },
        { q: 'What was different about the lamp outside the baker\'s?', opts: ['It had a crack that whistled', 'It was the brightest', 'It never worked', 'It was the newest'], ans: 0, why: 'It "had a crack that whistled when the wind came off the river".', kind: 'retrieval' },
        { q: 'Why does the writer say the electric lights were "rude"?', opts: ['They came on without being asked, like someone interrupting', 'They were too bright', 'They made a loud noise', 'They were badly made'], ans: 0, why: 'Nol thinks of the lamps as something you look after. Lights that switch themselves on ignore him completely.', kind: 'author' },
        { q: 'The man from the council had "a sorry sort of face". What does this suggest?', opts: ['He knew the news would upset Nol', 'He was unwell', 'He was angry', 'He was lost'], ans: 0, why: 'The writer shows how he felt through his face rather than telling us he felt guilty.', kind: 'inference' },
        { q: 'Why did Nol polish every lamp before Friday?', opts: ['He was proud of them and wanted them cared for', 'He wanted to sell them', 'He was told to', 'He wanted to slow the workmen down'], ans: 0, why: 'The polished lamps and the card asking people to look after them show what they meant to him.', kind: 'inference' },
        { q: 'What does "shouldered his ladder" mean?', opts: ['Carried it on his shoulder', 'Pushed it over', 'Leaned on it', 'Left it behind'], ans: 0, why: 'A noun used as a verb: he put it on his shoulder.', kind: 'vocab' },
        { q: 'Why does the writer end with the whistling lamp?', opts: ['To leave the reader wondering whether Nol is still there', 'To explain how lamps work', 'To show the wind was strong', 'To say the workmen did a bad job'], ans: 0, why: 'A whistle with no wind cannot be explained, and the writer wants you to notice that.', kind: 'author' },
        { q: '"The sky turned the colour of weak tea" tells you it was ___.', opts: ['a pale brownish evening', 'raining hard', 'the middle of the day', 'snowing'], ans: 0, why: 'Weak tea is a pale brown, so the writer is describing the colour of dusk.', kind: 'vocab' }
      ]
    },
    {
      id: 'sleepless', title: 'The Girl Who Could Not Sleep', icon: '\u{1F319}',
      text: `Marnie had not slept properly since the clocks went back.

It was not that she was frightened. It was that the night was so extraordinarily interesting, and everybody else insisted on missing it.

At half past eleven, the fridge downstairs began to hum a low note, always the same one. At ten to twelve, the pipes in the wall knocked twice, politely, like somebody who did not want to be a nuisance. At some point after that, the fox came.

Marnie knelt on the end of her bed with her chin on the windowsill and watched him trot along the top of the garden wall as though he owned it, which, at that hour, he did.

Her mother said she would ruin her health. Her teacher said she was away with the fairies. Her brother said she was weird, and then asked, in a small voice, whether the fox had come back.

So Marnie let him kneel at the window too.

They watched together, night after night, while the rest of the road slept through it: the fox on the wall, the moth batting softly at the glass, the fat moon sliding behind the chimney pots, and the whole street doing all its most remarkable things in the dark, with nobody watching but two children in their pyjamas.`,
      qs: [
        { q: 'Since when had Marnie not slept properly?', opts: ['Since the clocks went back', 'Since her birthday', 'Since she started school', 'Since the fox came'], ans: 0, why: 'The first line says "since the clocks went back".', kind: 'retrieval' },
        { q: 'What happened at ten to twelve?', opts: ['The pipes knocked twice', 'The fridge hummed', 'The fox came', 'The moon rose'], ans: 0, why: 'The text lists the times: the fridge at half past eleven, the pipes at ten to twelve.', kind: 'retrieval' },
        { q: 'Why does the writer say the pipes knocked "politely"?', opts: ['To make the house sound alive and friendly', 'Because the pipes were broken', 'To show the house was cold', 'Because somebody was at the door'], ans: 0, why: 'Giving the pipes manners makes the night sound like company rather than something frightening.', kind: 'author' },
        { q: 'Why did Marnie not mind being awake?', opts: ['She thought the night was interesting', 'She was scared of her dreams', 'She had homework', 'She was waiting for her mother'], ans: 0, why: '"It was that the night was so extraordinarily interesting."', kind: 'inference' },
        { q: 'Her brother called her weird, then asked about the fox in a small voice. What does that tell you?', opts: ['He secretly wanted to see it too', 'He was angry with her', 'He had seen the fox already', 'He was about to tell their mother'], ans: 0, why: 'The small voice gives him away. He is pretending not to care.', kind: 'inference' },
        { q: 'What does "as though he owned it" suggest about the fox?', opts: ['He walked confidently, with no fear', 'He had bought the wall', 'He was lost', 'He was hunting'], ans: 0, why: 'Owning something means you belong there, so he moved without hurrying or hiding.', kind: 'vocab' },
        { q: 'What does "away with the fairies" mean here?', opts: ['Not concentrating, daydreaming', 'Actually missing', 'Telling lies', 'Very tired'], ans: 0, why: 'It is a saying. The teacher means her mind is somewhere else.', kind: 'vocab' },
        { q: 'Why does the writer end with "two children in their pyjamas"?', opts: ['To show she is no longer the only one who notices', 'To show it was bedtime', 'To show they were cold', 'To show they were about to be caught'], ans: 0, why: 'At the start Marnie is alone. Two pairs of pyjamas at the end is the whole change in the story.', kind: 'author' }
      ]
    },
    {
      id: 'giantsboot', title: 'The Giant\'s Boot', icon: '\u{1F462}',
      text: `The boot appeared in Tunley Field overnight.

It was the size of a garden shed, made of cracked brown leather, with a sole worn thin in the middle and one lace trailing across the grass like a fallen rope.

By nine o'clock half the village was standing round it.

Mr Attwood from the garage said it was a joke, and somebody had winched it in with a lorry. He walked all the way round the field twice looking for tyre tracks and did not find any, so he went home for his lunch and did not come back.

Mrs Iyer, who taught Year 3, measured the sole with a tape measure and worked out that whoever wore it would have to be roughly nine metres tall. She said this in a completely steady voice, wrote it in her notebook, and then sat down quite suddenly on the grass.

The children were the only ones who thought to look UP.

High above the field, far higher than the church spire, three clouds in a row had been squashed flat, as though something enormous had leaned on them while it hopped about on one foot, trying to work out where it had put the other boot.`,
      qs: [
        { q: 'How big was the boot?', opts: ['The size of a garden shed', 'The size of a car', 'The size of a house', 'The size of a bus'], ans: 0, why: 'The text says "the size of a garden shed".', kind: 'retrieval' },
        { q: 'How tall did Mrs Iyer work out the owner would be?', opts: ['About nine metres', 'About three metres', 'About nineteen metres', 'She could not tell'], ans: 0, why: 'She measured the sole and calculated "roughly nine metres tall".', kind: 'retrieval' },
        { q: 'Why did Mr Attwood go home and not come back?', opts: ['He could not explain it and did not want to admit it', 'He was hungry', 'He had to fix a car', 'He was frightened of the children'], ans: 0, why: 'He looked for tyre tracks twice, found none, and quietly gave up on his own explanation.', kind: 'inference' },
        { q: 'Why does Mrs Iyer sit down "quite suddenly"?', opts: ['The answer she worked out shocked her', 'She was tired from measuring', 'The grass was comfortable', 'She had dropped her notebook'], ans: 0, why: 'She stays calm while doing the maths, and only reacts once she understands what the number means.', kind: 'inference' },
        { q: 'Why does the writer put "UP" in capital letters?', opts: ['To show that nobody else thought to look there', 'Because the children shouted', 'To show the boot was upside down', 'Because it is the title'], ans: 0, why: 'The capitals make you hear the emphasis, and point out that the grown-ups all looked down.', kind: 'author' },
        { q: 'What does "a sole worn thin in the middle" tell you about the boot?', opts: ['It had been walked in for a very long time', 'It was brand new', 'It was badly made', 'It was too small'], ans: 0, why: 'Soles wear down through use, so this is an old and much-used boot.', kind: 'inference' },
        { q: 'What does "winched" mean?', opts: ['Lifted with a machine and a cable', 'Thrown', 'Dragged by hand', 'Dropped from the air'], ans: 0, why: 'A winch is a machine that pulls a heavy load on a cable.', kind: 'vocab' },
        { q: 'Why does the writer describe the flattened clouds at the very end?', opts: ['So the reader works out what happened without being told', 'To describe the weather', 'To show a storm was coming', 'To explain where the boot came from'], ans: 0, why: 'The writer gives you the evidence and lets you picture the hopping giant yourself.', kind: 'author' }
      ]
    },
    {
      id: 'dreamjar', title: 'What Is In The Jars', icon: '\u{1FAD9}',
      text: `In the back room of the museum, on a shelf nobody dusts, there are forty-two glass jars with brass lids.

They are all labelled in the same small, careful handwriting. NIGHT BEFORE A BIRTHDAY. FALLING, BUT SLOWLY. THE ONE WHERE YOU CAN BREATHE UNDERWATER. THE TEST YOU DID NOT REVISE FOR.

The jars appear to be empty. Hold one up to the window, though, and the light coming through it bends the wrong way, so the room behind looks slightly further off than it really is.

The museum guide tells visitors that the jars were donated in 1908 by a collector whose name has been lost, and that they are believed to have held perfumes.

The guide does not mention that the lids are screwed on so tightly that nobody has opened one in a hundred and seventeen years. She does not mention that the label on jar thirty-one has been crossed out and rewritten four times. And she certainly does not mention what happened in the summer of 1994, when a cleaner knocked jar nineteen off the shelf and every single person in the building, all at once, in the middle of a Tuesday afternoon, sat down and yawned.`,
      qs: [
        { q: 'How many jars are there?', opts: ['Forty-two', 'Thirty-one', 'Nineteen', 'A hundred'], ans: 0, why: 'The text says "forty-two glass jars with brass lids".', kind: 'retrieval' },
        { q: 'What does the guide tell visitors the jars held?', opts: ['Perfumes', 'Dreams', 'Medicine', 'Nothing at all'], ans: 0, why: '"They are believed to have held perfumes."', kind: 'retrieval' },
        { q: 'What do the labels suggest is really inside the jars?', opts: ['Dreams', 'Smells', 'Insects', 'Old air'], ans: 0, why: 'Every label describes a dream everybody has had.', kind: 'inference' },
        { q: 'Why does the writer repeat "She does not mention"?', opts: ['To build up the things being kept secret', 'Because the guide forgot', 'To show the guide is new', 'To fill space'], ans: 0, why: 'Repeating the phrase stacks up the hidden facts and makes the last one land hardest.', kind: 'author' },
        { q: 'What happened in 1994?', opts: ['A jar fell and everybody yawned at once', 'A jar was opened', 'The museum closed', 'A label was rewritten'], ans: 0, why: 'A cleaner knocked jar nineteen off the shelf and everyone sat down and yawned.', kind: 'retrieval' },
        { q: 'What does the 1994 event suggest about the jars?', opts: ['Something real escapes when one breaks', 'They are harmless', 'They are full of dust', 'The story is untrue'], ans: 0, why: 'A whole building yawning at the same moment is too much to be a coincidence.', kind: 'inference' },
        { q: 'Why is it important that jar thirty-one has been relabelled four times?', opts: ['Whatever is inside it keeps changing', 'The writing was untidy', 'The label kept falling off', 'Nobody could spell it'], ans: 0, why: 'The writer gives a small odd detail and lets you draw the conclusion.', kind: 'author' },
        { q: 'What does "donated" mean?', opts: ['Given as a gift', 'Sold for a lot of money', 'Stolen', 'Found'], ans: 0, why: 'To donate is to give something away, often to a museum or charity.', kind: 'vocab' }
      ]
    },
    {
      id: 'whale', title: 'The Whale That Came Up The River', icon: '\u{1F40B}',
      text: `Nobody knows why she came.

She was eleven metres long, dark as wet slate, and on a grey Monday in January she swam nineteen miles up a river that was far too small for her, past the boatyard, past the retail park, past a queue of traffic on the ring road where every single driver got out of the car.

The river was only four metres deep in places. Each time she surfaced, she blew a column of mist that hung in the cold air for a moment before it drifted apart.

By Tuesday there were three hundred people on the bridge.

The rescue team worked for two days. They floated pontoons alongside her. They kept her skin wet. They spoke to each other in low voices, and when the tide finally turned late on Wednesday afternoon, they walked her back, mile by patient mile, towards the sea.

She reached deep water just after dark.

Somebody on the bridge started clapping, and then everybody was, three hundred people in the freezing cold applauding a stretch of black water where, by then, there was nothing at all to see.`,
      qs: [
        { q: 'How far up the river did the whale swim?', opts: ['Nineteen miles', 'Eleven miles', 'Nine miles', 'Four miles'], ans: 0, why: '"she swam nineteen miles up a river".', kind: 'retrieval' },
        { q: 'How long did the rescue team work?', opts: ['Two days', 'One day', 'A week', 'Three hours'], ans: 0, why: 'The text says "The rescue team worked for two days."', kind: 'retrieval' },
        { q: 'Why did every driver get out of the car?', opts: ['To see something they would never see again', 'Because the traffic had stopped', 'Because they were told to', 'To help the whale'], ans: 0, why: 'A whale in a city river is extraordinary, and nobody wanted to miss it.', kind: 'inference' },
        { q: 'Why does the writer mention the river was "only four metres deep in places"?', opts: ['To show how much danger she was in', 'To describe the weather', 'To explain the tide', 'To show the river was clean'], ans: 0, why: 'An eleven-metre animal in four metres of water is the whole problem in one sentence.', kind: 'author' },
        { q: 'Why did the team speak "in low voices"?', opts: ['They were careful not to frighten her', 'They were tired', 'They were arguing', 'They did not want the crowd to hear'], ans: 0, why: 'Everything they did was about keeping her calm.', kind: 'inference' },
        { q: '"Dark as wet slate" tells you the whale was ___.', opts: ['a deep grey, shining with water', 'rough and dry', 'covered in mud', 'black and white'], ans: 0, why: 'Slate is dark grey stone, and wet slate shines.', kind: 'vocab' },
        { q: 'Why does the writer say there was "nothing at all to see"?', opts: ['It shows the crowd was clapping for the rescue, not the view', 'It was too dark to see anything', 'The whale had died', 'The crowd had gone home'], ans: 0, why: 'They stayed and clapped an empty river, which says everything about why they came.', kind: 'author' },
        { q: 'What does "patient" mean in "mile by patient mile"?', opts: ['Slow and without rushing', 'Painful', 'Careless', 'Noisy'], ans: 0, why: 'Being patient means taking the time something needs.', kind: 'vocab' }
      ]
    },
    {
      id: 'inventor', title: 'Mrs Okonjo\'s Shed', icon: '\u{1F527}',
      text: `Mrs Okonjo's shed had a sign on the door that said PLEASE KNOCK, I MAY BE ON THE CEILING.

She was eighty-one. She had been an engineer for forty years, building bridges in three countries, and now she built other things, mostly out of what other people had thrown away.

Sam was allowed in on Saturdays, as long as he wore the goggles.

They built a machine that folded washing, badly. They built a bird feeder that weighed the bird and rang a small bell if it was a pigeon. They spent one entire February on a clock that ran backwards, which worked perfectly and was, Mrs Okonjo admitted, completely useless.

"Most of it will not work," she told him, the first time something he had spent a fortnight on fell apart in his hands. "That is not the bad news. That is the job."

She made him write down what went wrong in a red notebook before he was allowed to try again. By the end of the year the notebook was nearly full, and Sam could look back through it and see, quite clearly, that the mistakes he was making in December were far more interesting than the ones he had been making in March.`,
      qs: [
        { q: 'What did the sign on the shed door say?', opts: ['PLEASE KNOCK, I MAY BE ON THE CEILING', 'KEEP OUT', 'GOGGLES REQUIRED', 'OPEN SATURDAYS'], ans: 0, why: 'It is quoted in the first line.', kind: 'retrieval' },
        { q: 'What did the bird feeder do?', opts: ['Weighed the bird and rang a bell for a pigeon', 'Folded washing', 'Ran backwards', 'Counted the birds'], ans: 0, why: 'The text describes exactly that.', kind: 'retrieval' },
        { q: 'What does Mrs Okonjo mean by "That is the job"?', opts: ['Things failing is a normal part of inventing', 'He should find different work', 'She wants him to give up', 'The job is to build quickly'], ans: 0, why: 'She is telling him that failure is the work itself, not a sign he is bad at it.', kind: 'inference' },
        { q: 'Why did she make Sam write down what went wrong?', opts: ['So he would learn from each failure', 'So she could check his handwriting', 'So he would feel bad about it', 'So he could show his parents'], ans: 0, why: 'The notebook is how he can see his own progress at the end.', kind: 'inference' },
        { q: 'Why does the writer say the clock "worked perfectly and was completely useless"?', opts: ['It is funny, and it shows they built for the joy of it', 'The clock was broken', 'Mrs Okonjo was disappointed', 'They ran out of time'], ans: 0, why: 'The two halves of the sentence contradict each other on purpose.', kind: 'author' },
        { q: 'What does it mean that his December mistakes were "more interesting" than his March ones?', opts: ['He had got better, so he was failing at harder things', 'He was making more mistakes', 'He had stopped trying', 'March was an easier month'], ans: 0, why: 'Harder problems produce better mistakes. That is the measure of how far he has come.', kind: 'inference' },
        { q: 'What is an ENGINEER?', opts: ['Someone who designs and builds things', 'Someone who drives a train', 'Someone who repairs clocks', 'Someone who teaches'], ans: 0, why: 'Engineers design and build, and she built bridges.', kind: 'vocab' },
        { q: 'Why does the writer mention the goggles?', opts: ['It shows the shed was a real workshop, not a game', 'To show Sam had bad eyesight', 'To make Sam look silly', 'Because it was dusty'], ans: 0, why: 'One small detail tells you the work was genuine and sometimes risky.', kind: 'author' }
      ]
    },
    {
      id: 'library', title: 'The Book That Was Never Returned', icon: '\u{1F4DA}',
      text: `In the town library there is a card in a wooden drawer for a book that went out on loan on the fourteenth of March, 1954, and never came back.

The book is called A Short History of Tides. The borrower wrote her name in looping blue ink: E. Garraway.

Every librarian since has kept the card. There have been nine of them. Not one has thrown it away, though the book itself was written off as lost during the reign of the third.

In 1991 a woman in her sixties came in and asked, rather quietly, whether they still had a copy of A Short History of Tides. The librarian at the time, Mr Pell, said that they had not had one for many years.

The woman nodded, said thank you, and left.

Mr Pell did not put two and two together until closing time, and by then the street was empty in both directions.

He wrote it all down on the back of the card, in pencil, and put it back in the drawer, because that is what you do with something you cannot finish. You leave it tidily for whoever is next.`,
      qs: [
        { q: 'When did the book go out on loan?', opts: ['14 March 1954', '14 March 1991', '4 March 1954', '14 May 1954'], ans: 0, why: '"the fourteenth of March, 1954".', kind: 'retrieval' },
        { q: 'How many librarians have kept the card?', opts: ['Nine', 'Three', 'Five', 'One'], ans: 0, why: '"There have been nine of them."', kind: 'retrieval' },
        { q: 'Who was the woman who came in in 1991, most likely?', opts: ['E. Garraway, the borrower', 'Mr Pell\'s mother', 'A new librarian', 'The author of the book'], ans: 0, why: 'She asks for that exact book, and she is the right age. The writer never says so outright.', kind: 'inference' },
        { q: 'What does "did not put two and two together" mean?', opts: ['Did not work out what it meant until later', 'Could not do the sum', 'Did not hear her properly', 'Forgot her name'], ans: 0, why: 'It is a saying about realising what separate facts add up to.', kind: 'vocab' },
        { q: 'Why did Mr Pell write on the card in pencil?', opts: ['So somebody later could change or add to it', 'He had no pen', 'To hide what he wrote', 'Because pencil lasts longer'], ans: 0, why: 'Pencil can be added to. He is handing the story on, not finishing it.', kind: 'inference' },
        { q: 'Why did the librarians keep a card for a lost book?', opts: ['The story mattered more than the book', 'They were not allowed to throw it away', 'They thought it would come back', 'They forgot it was there'], ans: 0, why: 'Nine people in a row chose to keep it. That is a decision, not an accident.', kind: 'inference' },
        { q: 'Why does the writer tell us the street was "empty in both directions"?', opts: ['To show the chance was gone for good', 'To show it was late at night', 'To describe the town', 'To show she had run away'], ans: 0, why: 'There is nowhere left to look. The moment has closed.', kind: 'author' },
        { q: 'What does the last sentence tell you about the writer\'s view?', opts: ['Some stories are passed on rather than finished', 'Libraries should be tidier', 'Mr Pell was lazy', 'The book will be found'], ans: 0, why: '"You leave it tidily for whoever is next" is the writer speaking about more than a card.', kind: 'author' }
      ]
    },
    {
      id: 'storm', title: 'The Night The Roof Went', icon: '\u{1F32A}️',
      text: `The storm had a name, which Ruby thought was ridiculous. Storms should not have names. Names are for things you know.

It arrived at twenty past two in the morning and it did not sound like wind. It sounded like a train that had got lost and was going through the garden at speed, over and over, never quite arriving.

Her dad came in, sat on the end of her bed in the dark and said, "It is only weather," in a voice that was working quite hard to be ordinary.

Then there was a noise above them like a lid being lifted off a tin, and after that the rain in the hallway was as loud as the rain outside.

They spent the rest of the night at Mrs Dunn's across the road, the three of them and the cat, drinking tea nobody wanted.

In the morning, Ruby went out and looked up at her house with a rectangle of sky where her bedroom ceiling should have been.

She thought she would cry. She did not. What she actually felt, standing in the wet street in her wellingtons at half past six, was a kind of enormous curiosity about what on earth was going to happen next.`,
      qs: [
        { q: 'What time did the storm arrive?', opts: ['Twenty past two in the morning', 'Half past six', 'Midnight', 'Twenty past two in the afternoon'], ans: 0, why: '"It arrived at twenty past two in the morning".', kind: 'retrieval' },
        { q: 'Where did they spend the rest of the night?', opts: ['At Mrs Dunn\'s across the road', 'In the car', 'In the hallway', 'At her grandmother\'s'], ans: 0, why: 'The text says they went to Mrs Dunn\'s across the road.', kind: 'retrieval' },
        { q: 'Her dad\'s voice was "working quite hard to be ordinary". What does that tell you?', opts: ['He was worried but hiding it', 'He was bored', 'He was half asleep', 'He was cross with Ruby'], ans: 0, why: 'If a voice has to work at sounding calm, it is not calm.', kind: 'inference' },
        { q: 'What had actually happened when they heard "a lid being lifted off a tin"?', opts: ['The roof came off', 'A window broke', 'A door blew open', 'A tree fell'], ans: 0, why: 'The rain indoors becoming as loud as the rain outside tells you the roof has gone.', kind: 'inference' },
        { q: 'Why does the writer compare the storm to "a train that had got lost"?', opts: ['It sounded huge, close and wrong, and it never stopped', 'A train went past the house', 'It was travelling fast', 'It made a whistling noise'], ans: 0, why: 'A train in a garden is enormous and in the wrong place, which is exactly how the storm felt.', kind: 'author' },
        { q: 'Why does Ruby think naming storms is ridiculous?', opts: ['Names belong to things you know, and she does not know this', 'She does not like the name', 'She thinks storms are not real', 'She cannot remember the name'], ans: 0, why: 'She says it herself: "Names are for things you know."', kind: 'inference' },
        { q: 'What does the writer show by ending with "curiosity" rather than tears?', opts: ['Ruby is braver and tougher than she expected', 'Ruby did not care about her house', 'Ruby was too tired to cry', 'Ruby thought it was funny'], ans: 0, why: 'She expects to cry and does not. The writer is showing you something new about her.', kind: 'author' },
        { q: 'What does "enormous curiosity" mean?', opts: ['A very strong wish to know what happens next', 'Great fear', 'Deep sadness', 'Complete confusion'], ans: 0, why: 'Curiosity is wanting to find out, and enormous makes it large.', kind: 'vocab' }
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

  /** The questions for one passage, options shuffled so the answer moves. */
  function questionsFor(id) {
    const p = PASSAGES.find((x) => x.id === id) || PASSAGES[0];
    return p.qs.map((q) => {
      const correct = q.opts[q.ans];
      const opts = shuffle(q.opts);
      return { q: q.q, opts, ans: opts.indexOf(correct), why: q.why };
    });
  }

  root.Y3_READING = { PASSAGES, questionsFor };
})(typeof window !== 'undefined' ? window : globalThis);
