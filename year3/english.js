// ── YEAR 3 ENGLISH ───────────────────────────────────────────────────────────
// Authored, not generated: grammar and word work need a teacher's judgement.
// Follows the Year 3 programme of study: prefixes and suffixes, homophones,
// word classes, conjunctions, prepositions, adverbs, inverted commas,
// apostrophes, and the a/an rule.
//
// Shape of every question: { q, opts:[4], ans:index, why }.
(function (root) {
  'use strict';

  const SETS = [
    {
      id: 'prefixes', title: 'Prefixes', icon: '\u{1F50E}',
      teach: 'A prefix goes on the FRONT of a word and changes its meaning. ' +
        'un- and dis- and mis- turn a word to its opposite or make it go wrong. ' +
        're- means again. pre- means before. sub- means under.',
      qs: [
        { q: 'Which prefix makes "happy" mean the opposite?', opts: ['un-', 're-', 'pre-', 'sub-'], ans: 0, why: 'Unhappy means not happy.' },
        { q: 'What does "rebuild" mean?', opts: ['Build again', 'Build badly', 'Build before', 'Build under'], ans: 0, why: 're- means again, so rebuild is to build it again.' },
        { q: 'What does "misheard" mean?', opts: ['Heard wrongly', 'Heard again', 'Heard before', 'Did not hear'], ans: 0, why: 'mis- means wrongly or badly.' },
        { q: 'Which word means "under water"?', opts: ['submarine', 'antiwater', 'prewater', 'rewater'], ans: 0, why: 'sub- means under, and a submarine goes under the sea.' },
        { q: 'What does "preheat" mean?', opts: ['Heat beforehand', 'Heat again', 'Do not heat', 'Heat wrongly'], ans: 0, why: 'pre- means before, so you heat the oven before you cook.' },
        { q: 'Which prefix means "between"?', opts: ['inter-', 'anti-', 'auto-', 'mis-'], ans: 0, why: 'The internet goes between computers; international means between nations.' },
        { q: 'What does "automatic" tell you?', opts: ['It works by itself', 'It works wrongly', 'It works again', 'It works underneath'], ans: 0, why: 'auto- means self, so it does the job by itself.' },
        { q: 'Which word is the opposite of "obey"?', opts: ['disobey', 'reobey', 'preobey', 'superobey'], ans: 0, why: 'dis- makes it the opposite.' },
        { q: 'What does "antifreeze" do?', opts: ['Works against freezing', 'Freezes again', 'Freezes first', 'Freezes underneath'], ans: 0, why: 'anti- means against.' },
        { q: 'Which word means "more than human strength"?', opts: ['superhuman', 'subhuman', 'interhuman', 'mishuman'], ans: 0, why: 'super- means above or beyond.' },
        { q: 'A word that has been spelled wrongly has been ___.', opts: ['misspelled', 'unspelled', 'respelled', 'prespelled'], ans: 0, why: 'mis- means wrongly. Note it keeps both s letters: mis + spelled.' },
        { q: 'Which is NOT a real prefix?', opts: ['ly-', 'un-', 'dis-', 're-'], ans: 0, why: '-ly is a suffix. It goes on the end, never the front.' }
      ]
    },
    {
      id: 'suffixes', title: 'Suffixes', icon: '\u{1F517}',
      teach: 'A suffix goes on the END of a word. -ly usually makes an adverb. ' +
        '-ful means full of. -less means without. -ness and -ment turn a word into a noun.',
      qs: [
        { q: 'Which word means "full of care"?', opts: ['careful', 'careless', 'caring', 'cared'], ans: 0, why: '-ful means full of.' },
        { q: 'Which word means "without hope"?', opts: ['hopeless', 'hopeful', 'hoping', 'hoped'], ans: 0, why: '-less means without.' },
        { q: 'Add -ly to "happy". How do you spell it?', opts: ['happily', 'happyly', 'happely', 'happilly'], ans: 0, why: 'When a word ends in a consonant then y, the y changes to i: happy becomes happily.' },
        { q: 'Add -ly to "gentle". How do you spell it?', opts: ['gently', 'gentlely', 'gentley', 'gentlly'], ans: 0, why: 'A word ending in -le drops the e: gentle becomes gently.' },
        { q: 'What kind of word does -ness usually make?', opts: ['A noun', 'A verb', 'An adjective', 'An adverb'], ans: 0, why: 'Kind becomes kindness, which is a thing, so a noun.' },
        { q: 'Which is spelled correctly?', opts: ['enjoyment', 'enjoyement', 'enjoiment', 'enjoymant'], ans: 0, why: 'Enjoy keeps its y because the y follows a vowel: enjoy + ment.' },
        { q: 'Add -ly to "basic".', opts: ['basically', 'basicly', 'basicaly', 'basiclly'], ans: 0, why: 'Words ending in -ic add -ally, not just -ly.' },
        { q: 'Which word means "able to be enjoyed"?', opts: ['enjoyable', 'enjoyful', 'enjoyless', 'enjoyment'], ans: 0, why: '-able means it can be done.' },
        { q: 'Sad + ness = ?', opts: ['sadness', 'sadnes', 'saddness', 'sadeness'], ans: 0, why: 'Just add the suffix: sad + ness. No extra letters.' },
        { q: 'Which suffix would turn "argue" into a thing you can have?', opts: ['-ment', '-ly', '-less', '-ful'], ans: 0, why: 'Argue becomes argument. Watch out, the e disappears.' },
        { q: 'Beauty + ful = ?', opts: ['beautiful', 'beautyful', 'beutiful', 'beautifull'], ans: 0, why: 'The y changes to i, and -ful only ever has one l.' },
        { q: 'Which word has BOTH a prefix and a suffix?', opts: ['unhelpful', 'helpful', 'unhelp', 'helping'], ans: 0, why: 'un- at the front, -ful at the end, help in the middle.' }
      ]
    },
    {
      id: 'homophones', title: 'Homophones', icon: '\u{1F465}',
      teach: 'Homophones sound the same but mean different things and are spelled ' +
        'differently. The only way to choose is to think about the meaning.',
      qs: [
        { q: 'I could not ___ the music from my room.', opts: ['hear', 'here', 'heer', 'hier'], ans: 0, why: 'Hear is what your EAR does. The word "ear" is hidden inside it.' },
        { q: 'The knight wore a suit of ___.', opts: ['mail', 'male', 'mayle', 'maile'], ans: 0, why: 'Chain mail is armour. A male is a boy or man.' },
        { q: 'She ate a ___ of cake.', opts: ['piece', 'peace', 'pease', 'peice'], ans: 0, why: 'A piece is a part of something. Peace means calm and quiet.' },
        { q: 'The horse shook its ___.', opts: ['mane', 'main', 'maine', 'mayn'], ans: 0, why: 'A mane is the hair on a horse or lion. Main means most important.' },
        { q: 'We walked down the ___ to the sea.', opts: ['stairs', 'stares', 'staires', 'starres'], ans: 0, why: 'Stairs are steps. Stares are long hard looks.' },
        { q: 'He ___ the ball over the fence.', opts: ['threw', 'through', 'thru', 'throo'], ans: 0, why: 'Threw is the past of throw. Through means from one side to the other.' },
        { q: 'The king began his ___ in 1066.', opts: ['reign', 'rain', 'rein', 'raign'], ans: 0, why: 'A reign is a period of ruling. Rain falls from the sky. A rein steers a horse.' },
        { q: 'Which sentence is right?', opts: ['The dog wagged its tail.', "The dog wagged it's tail.", 'The dog wagged its\' tail.', 'The dog wagged its tale.'], ans: 0, why: "Its means belonging to it. It's is short for it is. A tale is a story." },
        { q: 'I do not know ___ coat this is.', opts: ['whose', "who's", 'whoes', 'whos'], ans: 0, why: "Whose asks who it belongs to. Who's is short for who is." },
        { q: 'Please ___ me at the gate.', opts: ['meet', 'meat', 'mete', 'meate'], ans: 0, why: 'Meet is what you do with a person. Meat is food.' },
        { q: 'The wind ___ the door shut.', opts: ['blew', 'blue', 'bleu', 'blewe'], ans: 0, why: 'Blew is the past of blow. Blue is a colour.' },
        { q: 'Take a deep ___ before you dive.', opts: ['breath', 'breathe', 'breth', 'breeth'], ans: 0, why: 'A breath is the thing you take. To breathe is the action. The e on the end makes it a doing word.' }
      ]
    },
    {
      id: 'wordclass', title: 'Nouns, Verbs, Adjectives, Adverbs', icon: '\u{1F3F7}️',
      teach: 'A noun is a person, place or thing. A verb is what someone does or is. ' +
        'An adjective describes a noun. An adverb usually describes a verb, and often ends in -ly.',
      qs: [
        { q: 'In "The enormous giant snored loudly", which word is the adjective?', opts: ['enormous', 'giant', 'snored', 'loudly'], ans: 0, why: 'Enormous describes the giant, so it is an adjective.' },
        { q: 'In "The enormous giant snored loudly", which word is the adverb?', opts: ['loudly', 'enormous', 'giant', 'snored'], ans: 0, why: 'Loudly tells you HOW he snored, so it describes the verb.' },
        { q: 'Which word is a verb?', opts: ['galloped', 'saddle', 'shiny', 'quickly'], ans: 0, why: 'Galloped is a doing word.' },
        { q: 'Which word is a noun?', opts: ['forest', 'creep', 'silvery', 'softly'], ans: 0, why: 'A forest is a place, so it is a noun.' },
        { q: 'In "She whispered nervously", what does "nervously" tell you?', opts: ['How she whispered', 'What she whispered', 'When she whispered', 'Who whispered'], ans: 0, why: 'Adverbs answer how, when or where. This one answers how.' },
        { q: 'Which sentence has TWO adjectives?', opts: ['A cold, dark cave.', 'He ran fast.', 'The cave was there.', 'She shouted loudly.'], ans: 0, why: 'Cold and dark both describe the cave.' },
        { q: 'Which word is an adverb of time?', opts: ['later', 'gentle', 'mountain', 'catch'], ans: 0, why: 'Later tells you WHEN, so it is an adverb of time.' },
        { q: 'What kind of word is "quickly"?', opts: ['Adverb', 'Adjective', 'Noun', 'Verb'], ans: 0, why: 'It ends in -ly and tells you how something is done.' },
        { q: 'In "The dream fizzed", which word is the verb?', opts: ['fizzed', 'The', 'dream', 'none of them'], ans: 0, why: 'Fizzed is what the dream did.' },
        { q: 'Which is a proper noun?', opts: ['London', 'city', 'street', 'building'], ans: 0, why: 'A proper noun is a particular name and always takes a capital letter.' },
        { q: 'Which word could be BOTH a noun and a verb?', opts: ['run', 'beautiful', 'quietly', 'enormous'], ans: 0, why: 'You can run a race (verb) or go for a run (noun).' },
        { q: 'In "an incredibly tall tree", what does "incredibly" describe?', opts: ['tall', 'tree', 'an', 'nothing'], ans: 0, why: 'It makes the adjective "tall" stronger. Adverbs can describe adjectives too.' }
      ]
    },
    {
      id: 'conjunctions', title: 'Joining Sentences', icon: '\u{1F517}',
      teach: 'A conjunction joins two parts of a sentence. when, before, after, while, ' +
        'because, if, although and so all show HOW the two parts are connected.',
      qs: [
        { q: 'I put my coat on ___ it was raining.', opts: ['because', 'although', 'before', 'or'], ans: 0, why: 'Because gives the reason.' },
        { q: 'We can go out ___ you finish your homework.', opts: ['if', 'because', 'but', 'so'], ans: 0, why: 'If sets a condition.' },
        { q: '___ it was freezing, she went out without a coat.', opts: ['Although', 'Because', 'So', 'When'], ans: 0, why: 'Although shows a surprising contrast.' },
        { q: 'Which conjunction tells you WHEN?', opts: ['after', 'because', 'although', 'if'], ans: 0, why: 'After places one thing in time relative to another.' },
        { q: 'He was tired ___ he had run all the way home.', opts: ['because', 'although', 'if', 'before'], ans: 0, why: 'The second part explains why, so because fits.' },
        { q: 'Which sentence uses the conjunction correctly?', opts: ['She smiled because she was happy.', 'She smiled although she was happy.', 'She smiled if she was happy.', 'She smiled before she was happy.'], ans: 0, why: 'Being happy is the reason for the smile.' },
        { q: 'Wait here ___ I come back.', opts: ['until', 'because', 'although', 'so'], ans: 0, why: 'Until marks the point when the waiting stops.' },
        { q: 'Which word can join two whole sentences?', opts: ['and', 'quickly', 'enormous', 'under'], ans: 0, why: 'And is a conjunction. The others are an adverb, an adjective and a preposition.' },
        { q: 'I had my tea ___ I did my reading.', opts: ['after', 'because', 'although', 'if'], ans: 0, why: 'After puts the two events in order.' },
        { q: 'The giant tiptoed ___ nobody would hear him.', opts: ['so that', 'although', 'because of', 'until'], ans: 0, why: 'So that explains the purpose.' },
        { q: 'Which is NOT a conjunction?', opts: ['suddenly', 'while', 'because', 'unless'], ans: 0, why: 'Suddenly is an adverb. It does not join two parts together.' },
        { q: '___ the sun set, the street lamps came on.', opts: ['When', 'Because of', 'Although', 'Unless'], ans: 0, why: 'When links the two things in time.' }
      ]
    },
    {
      id: 'speech', title: 'Speech Marks', icon: '\u{1F4AC}',
      teach: 'Inverted commas go round the words actually spoken. The spoken words ' +
        'start with a capital letter, and there is a comma, question mark or ' +
        'exclamation mark before you close them.',
      qs: [
        { q: 'Which is punctuated correctly?', opts: ['"Come here," said Mum.', '"come here," said Mum.', '"Come here" said Mum.', 'Come here, "said Mum."'], ans: 0, why: 'Capital letter inside, comma before the closing marks, then who said it.' },
        { q: 'Where does the comma go?', opts: ['"I am hungry," he groaned.', '"I am hungry" , he groaned.', '"I am hungry ", he groaned.', '"I am hungry", he groaned.'], ans: 0, why: 'The comma sits INSIDE the speech marks, tight against the last word.' },
        { q: 'Which question is punctuated correctly?', opts: ['"Where are you going?" asked Ava.', '"Where are you going?," asked Ava.', '"Where are you going" ? asked Ava.', '"where are you going?" asked Ava.'], ans: 0, why: 'The question mark replaces the comma. You never use both.' },
        { q: 'What goes round the words that are spoken?', opts: ['Inverted commas', 'Brackets', 'Dashes', 'Full stops'], ans: 0, why: 'Inverted commas, also called speech marks.' },
        { q: 'Which sentence starts the speech correctly?', opts: ['Mum shouted, "Get down from there!"', 'Mum shouted "get down from there!"', 'Mum shouted, "get down from there!"', 'Mum shouted "Get down from there!"'], ans: 0, why: 'A comma before the speech opens, and a capital letter to start the spoken words.' },
        { q: 'When someone new speaks, what should you do?', opts: ['Start a new line', 'Use brackets', 'Write in capitals', 'Leave out the speech marks'], ans: 0, why: 'A new speaker always gets a new line. It is how the reader keeps track.' },
        { q: 'Which uses the exclamation mark correctly?', opts: ['"It is enormous!" gasped Sophie.', '"It is enormous!." gasped Sophie.', '"It is enormous," ! gasped Sophie.', '"It is enormous!" Gasped Sophie.'], ans: 0, why: 'The exclamation mark goes inside, and "gasped" is not a new sentence so it stays lower case.' },
        { q: 'Which word is a better choice than "said"?', opts: ['whispered', 'walked', 'quickly', 'enormous'], ans: 0, why: 'Whispered is another way of speaking, and it tells the reader how.' },
        { q: 'Which handles TWO pieces of speech correctly?', opts: ['"Stop!" she cried. "You will fall."', '"Stop!" She cried. "you will fall."', '"Stop! she cried. You will fall."', 'Stop! "she cried." You will fall.'], ans: 0, why: 'Each piece of speech gets its own speech marks, and the new sentence inside starts with a capital.' },
        { q: 'What is wrong with:  "I am ready" said Tom.', opts: ['There is no comma before the closing speech marks', 'There should be no speech marks', '"Said" needs a capital letter', 'Nothing is wrong'], ans: 0, why: 'It needs a comma: "I am ready," said Tom.' },
        { q: 'Which is NOT a way of saying something?', opts: ['jumped', 'muttered', 'yelled', 'murmured'], ans: 0, why: 'Jumped is a movement, not a way of speaking.' },
        { q: 'In  Ava asked, "Is it far?"  what goes after "asked"?', opts: ['A comma', 'A full stop', 'A question mark', 'Nothing'], ans: 0, why: 'A comma introduces the speech that follows.' }
      ]
    },
    {
      id: 'apostrophes', title: 'Apostrophes', icon: '\u{2757}',
      teach: 'An apostrophe does two jobs. It shows a letter is missing (do not becomes ' +
        "don't) and it shows belonging (the dog's bone). For a plural that already " +
        "ends in s, the apostrophe goes after the s: the girls' coats.",
      qs: [
        { q: 'Which shows the bone belongs to one dog?', opts: ["the dog's bone", 'the dogs bone', "the dogs' bone", "the dog's' bone"], ans: 0, why: 'One dog, so apostrophe then s.' },
        { q: 'Which shows a coat belonging to each of several girls?', opts: ["the girls' coats", "the girl's coats", 'the girls coats', "the girls's coats"], ans: 0, why: 'Girls already ends in s, so the apostrophe goes after it.' },
        { q: 'What is "do not" shortened?', opts: ["don't", 'dont', "do'nt", "don'te"], ans: 0, why: 'The apostrophe takes the place of the missing o.' },
        { q: 'What is "it is" shortened?', opts: ["it's", 'its', "its'", "it's'"], ans: 0, why: "It's is short for it is. Its without an apostrophe means belonging to it." },
        { q: 'Which is correct?', opts: ["The children's shoes", "The childrens' shoes", 'The childrens shoes', "The children's' shoes"], ans: 0, why: 'Children is already plural without an s, so it takes apostrophe s.' },
        { q: 'Which needs NO apostrophe?', opts: ['I have three cats.', 'The cats bowl is empty.', 'The cats are hungry, its late.', "Wheres my cat?"], ans: 0, why: 'A plain plural never takes an apostrophe. Three cats, no apostrophe.' },
        { q: 'What is "could not" shortened?', opts: ["couldn't", 'couldnt', "could'nt", "couldn t"], ans: 0, why: 'The apostrophe stands in for the missing o of not.' },
        { q: 'Which shows a book belonging to Ava?', opts: ["Ava's book", 'Avas book', "Avas' book", "Ava' s book"], ans: 0, why: 'One person, so apostrophe then s.' },
        { q: 'The apostrophe in "we\'ll" replaces which letters?', opts: ['wi', 'll', 'we', 'l'], ans: 0, why: 'We will becomes we\'ll. The wi of will drops out.' },
        { q: 'Which sentence uses "its" correctly?', opts: ['The bird fed its chick.', "The bird fed it's chick.", "Its raining again.", "The bird fed its' chick."], ans: 0, why: 'The chick belongs to the bird, so no apostrophe.' },
        { q: 'Which shows boots belonging to several men?', opts: ["the men's boots", "the mens' boots", 'the mens boots', "the men's' boots"], ans: 0, why: 'Men is already plural, so it takes apostrophe s.' },
        { q: 'What is "she is" shortened?', opts: ["she's", 'shes', "she'is", "sh'es"], ans: 0, why: 'The apostrophe replaces the missing i.' }
      ]
    },
    {
      id: 'aan', title: 'a or an', icon: '\u{1F524}',
      teach: 'Use "an" before a word that STARTS WITH A VOWEL SOUND, not just a vowel ' +
        'letter. It is an hour (the h is silent) but a unicorn (it sounds like "yoo").',
      qs: [
        { q: 'I waited for ___ hour.', opts: ['an', 'a', 'the a', 'any'], ans: 0, why: 'The h in hour is silent, so it starts with a vowel sound.' },
        { q: 'She saw ___ unicorn.', opts: ['a', 'an', 'the an', 'some an'], ans: 0, why: 'Unicorn starts with a "yoo" sound, which is not a vowel sound, so it takes a.' },
        { q: 'He ate ___ apple.', opts: ['an', 'a', 'the a', 'any a'], ans: 0, why: 'Apple starts with a vowel sound.' },
        { q: 'That is ___ honest answer.', opts: ['an', 'a', 'the a', 'any'], ans: 0, why: 'The h in honest is silent.' },
        { q: 'We need ___ umbrella.', opts: ['an', 'a', 'the a', 'any'], ans: 0, why: 'Umbrella starts with a clear u sound.' },
        { q: 'It was ___ enormous giant.', opts: ['an', 'a', 'the a', 'any'], ans: 0, why: 'Enormous starts with a vowel sound.' },
        { q: 'He played ___ European game.', opts: ['a', 'an', 'the an', 'any an'], ans: 0, why: 'European sounds like "yer-o-pean", so it takes a.' },
        { q: 'She has ___ idea.', opts: ['an', 'a', 'the a', 'any a'], ans: 0, why: 'Idea starts with a vowel sound.' },
        { q: 'I need ___ pencil.', opts: ['a', 'an', 'the an', 'any an'], ans: 0, why: 'Pencil starts with a consonant sound.' },
        { q: 'It took ___ whole day.', opts: ['a', 'an', 'the an', 'any'], ans: 0, why: 'Whole starts with an h sound, so it takes a.' },
        { q: 'Which rule decides between a and an?', opts: ['The SOUND the next word starts with', 'The letter the next word starts with', 'How long the word is', 'Whether it is a noun'], ans: 0, why: 'Always the sound, which is why it is an hour but a unicorn.' },
        { q: 'He is ___ MP.', opts: ['an', 'a', 'the a', 'any'], ans: 0, why: 'MP is said "em-pee", which starts with a vowel sound.' }
      ]
    },
    {
      id: 'vocab', title: 'Big Words', icon: '\u{1F4D6}',
      teach: 'These are words you will meet in the books you read this year. ' +
        'Knowing them makes a hard page much easier.',
      qs: [
        { q: 'If something is COLOSSAL, it is very ___.', opts: ['large', 'small', 'quiet', 'fast'], ans: 0, why: 'Colossal means huge.' },
        { q: 'A PECULIAR smell is a ___ smell.', opts: ['strange', 'lovely', 'strong', 'faint'], ans: 0, why: 'Peculiar means odd or strange.' },
        { q: 'To MURMUR is to speak ___.', opts: ['very quietly', 'very loudly', 'very fast', 'very rudely'], ans: 0, why: 'A murmur is a low, soft sound.' },
        { q: 'If you are FURIOUS you are very ___.', opts: ['angry', 'tired', 'pleased', 'hungry'], ans: 0, why: 'Furious is much stronger than cross.' },
        { q: 'A TREMENDOUS noise is a ___ noise.', opts: ['huge', 'tiny', 'sweet', 'distant'], ans: 0, why: 'Tremendous means very great.' },
        { q: 'To TREMBLE is to ___.', opts: ['shake', 'shout', 'run', 'fall'], ans: 0, why: 'You tremble when you are cold or frightened.' },
        { q: 'Something MAGNIFICENT is ___.', opts: ['splendid', 'ordinary', 'broken', 'tiny'], ans: 0, why: 'Magnificent means grand and impressive.' },
        { q: 'A GRUESOME sight is ___.', opts: ['horrible', 'beautiful', 'funny', 'ordinary'], ans: 0, why: 'Gruesome means it makes you shudder.' },
        { q: 'To VANISH is to ___.', opts: ['disappear', 'arrive', 'shout', 'grow'], ans: 0, why: 'Vanish means to go suddenly out of sight.' },
        { q: 'If you do something CAUTIOUSLY you do it ___.', opts: ['carefully', 'quickly', 'loudly', 'badly'], ans: 0, why: 'Caution means care, so cautiously means with care.' },
        { q: 'A person who is FRANTIC is ___.', opts: ['wildly worried', 'calm', 'sleepy', 'polite'], ans: 0, why: 'Frantic means in a panic.' },
        { q: 'To DEVOUR your dinner is to eat it ___.', opts: ['hungrily and fast', 'slowly', 'politely', 'secretly'], ans: 0, why: 'Devour means to gobble it all up.' }
      ]
    },
    {
      id: 'wordbuilding', title: 'Making Up Words', icon: '\u{1F9E9}',
      teach: 'Writers invent words on purpose. They squash two words together, ' +
        'they copy a sound, or they change a word just enough that you can still ' +
        'guess it. Roald Dahl did it on every page. So can you.',
      qs: [
        { q: 'Two words joined into one, like "playground", is called a ___ word.', opts: ['compound', 'silent', 'rhyming', 'proper'], ans: 0, why: 'Play + ground = playground.' },
        { q: 'Which is a compound word?', opts: ['moonlight', 'moonly', 'moonful', 'moonest'], ans: 0, why: 'Moon + light. The others are a real word plus a suffix.' },
        { q: 'A word that copies a sound, like "crunch", is called ___.', opts: ['onomatopoeia', 'alliteration', 'a simile', 'a prefix'], ans: 0, why: 'Onomatopoeia. Say it: on-o-mat-o-pee-a.' },
        { q: 'Which word copies a sound?', opts: ['sizzle', 'happy', 'purple', 'slowly'], ans: 0, why: 'Sizzle sounds like the thing it describes.' },
        { q: 'If "grumble" and "rumble" describe low noises, what might "grumbly-rumbly" describe?', opts: ['A deep grumbling noise', 'A bright colour', 'A fast runner', 'A sweet taste'], ans: 0, why: 'You can work out an invented word from the real ones hiding inside it.' },
        { q: 'Which made-up word probably means a very big yawn?', opts: ['yawnsome', 'yawnlet', 'unyawn', 'yawnish'], ans: 0, why: '-some suggests a lot of it, like "fearsome". -let makes things smaller.' },
        { q: 'What does the ending -let do in "piglet"?', opts: ['Makes it smaller', 'Makes it bigger', 'Makes it the opposite', 'Makes it a verb'], ans: 0, why: 'A piglet is a little pig, a booklet is a little book.' },
        { q: 'Which sounds like a word for walking very quietly?', opts: ['tiptoe-ing', 'stompering', 'clangering', 'crashling'], ans: 0, why: 'The sounds in a word give away its meaning. Stomp, clang and crash are all loud.' },
        { q: 'Three words starting with the same sound, like "slippery silver snake", is called ___.', opts: ['alliteration', 'onomatopoeia', 'a compound', 'a suffix'], ans: 0, why: 'Alliteration. Writers use it to make a phrase stick.' },
        { q: 'Which pair could be squashed into one new word?', opts: ['breakfast + lunch', 'happy + happy', 'the + the', 'run + ran'], ans: 0, why: 'Breakfast and lunch famously squash into brunch.' },
        { q: 'If a writer invents a word you have never seen, what should you do?', opts: ['Look for real words hiding inside it', 'Skip the sentence', 'Look it up in a dictionary', 'Change it to a word you know'], ans: 0, why: 'Invented words are built out of real ones. That is the clue.' },
        { q: 'Why do writers invent words?', opts: ['To make a character sound like nobody else', 'Because they cannot spell', 'To make the book longer', 'To confuse the reader'], ans: 0, why: 'An invented word can do a job no real word does, and it makes a voice unmistakable.' }
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

  /** Pull `n` questions from one set, with the options shuffled each time so the
   *  answer is not always A. */
  function makeSet(setId, n) {
    const set = SETS.find((s) => s.id === setId) || SETS[0];
    return shuffle(set.qs).slice(0, n || set.qs.length).map((q) => {
      const correct = q.opts[q.ans];
      const opts = shuffle(q.opts);
      return { q: q.q, opts, ans: opts.indexOf(correct), why: q.why };
    });
  }

  function makeMixed(n) {
    const all = SETS.flatMap((s) => s.qs.map((q) => ({ ...q, set: s.id })));
    return shuffle(all).slice(0, n).map((q) => {
      const correct = q.opts[q.ans];
      const opts = shuffle(q.opts);
      return { q: q.q, opts, ans: opts.indexOf(correct), why: q.why };
    });
  }

  root.Y3_ENGLISH = { SETS, makeSet, makeMixed };
})(typeof window !== 'undefined' ? window : globalThis);
