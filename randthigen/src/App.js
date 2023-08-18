import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

let used = [];

// person gen functions

function buG() {
  var a = ['a slight',
           'a heavy',
           'an average',
           'a thin',
           'a chubby',
           'a fat',
           'a skinny',
           'a fair'];
  return a[Math.floor(Math.random()*a.length)];
}

function heG() {
  var a = ['tall',
           'towering',
           'statuesque',
           'short',
           'miniscule',
           'diminutive',
           'petite'];
  return a[Math.floor(Math.random()*a.length)];
}

function joG() {
  var a = ['woodcutter',
           'fisher',
           'farmer',
           'hunter',
           'guard',
           'mercenary',
           'alchemist',
           'baker',
           'beggar',
           'noble',
           'scribe',
           'blacksmith',
           'weaver',
           'merchant',
           'shepherd',
           'artist',
           'innkeeper',
           'cobbler',
           'miner',
           'tailor',
           'carpenter',
           'butcher',
           'brewer',
           'thief',
           'assassin',
           'leatherworker',
           'courier',
           'shipbuilder',
           'cultist',
           'priest',
           'necromancer',
           'mage',
           'wizard',
           'evil wizard',
           'witch',
           'warlock',
           'silly little guy',
           'unemployed person',
           'layabout'];
  return a[Math.floor(Math.random()*a.length)];
}

function adG() {
  var a = ['warm',
           'kind',
           'soft',
           'silly',
           'stupid',
           'absurd',
           'sarcastic',
           'charismatic',
           'clumsy',
           'gullible',
           'vain',
           'sociable',
           'pragmatic',
           'serious',
           'reliable',
           'cold',
           'harsh',
           'mean',
           'fashionable',
           'edgy',
           'unattractive',
           'beautiful',
           'shabby',
           'sensible',
           'elegant',
           'affable',
           'aloof',
           'bossy',
           'callous',
           'conceited',
           'condescending',
           'dull',
           'interesting',
           'cunning',
           'pious',
           'energetic',
           'excitable',
           'loyal',
           'gentle',
           'honorable',
           'imaginative',
           'creative',
           'mature',
           'innocent',
           'lazy',
           'hard-working',
           'misanthropic',
           'opinionated',
           'argumentative',
           'competitive',
           'flirty',
           'patient',
           'impatient',
           'strange',
           'magical',
           'quixotic',
           'rebellious',
           'reckless',
           'sickly',
           'healthy',
           'sadistic',
           'stingy',
           'tactless',
           'tactful',
           'witty'];
  
  var res = a[Math.floor(Math.random()*a.length)];
  if (used.includes(res)) {
    while (used.includes(res)) {
      res = a[Math.floor(Math.random()*a.length)];
    }
    used.push(res);
  }
  else {
    used.push(res);
  }
  return res;
}

function hobG() {
  var a = ['fish',
           'whittle',
           'cook',
           'bake',
           'paint landscapes',
           'paint portraits',
           'exercise',
           'sew',
           'knit',
           'play music',
           'sing',
           'draw',
           'shop',
           'read books',
           'read periodicals',
           'hike',
           'garden',
           'fence',
           'swim',
           'gamble',
           'attempt alchemy',
           'perform stage magic',
           'perform actual magic',
           'summon demons',
           'try to resurrect the dead',
           'study various orbs',
           'surf the waves',
           'do martial arts',
           'do ballet',
           'predict the weather in normal ways',
           'predict the weather in magical ways',
           'predict the weather by using magic to change the weather',
           'ice skate',
           'construct things',
           'dive',
           'study normal texts',
           'study ancient and forbidden texts',
           'assemble a collection of strange objects',
           'play board games',
           'watch birds',
           'watch people'];
  return a[Math.floor(Math.random()*a.length)];
}

function taG() {
  var a = ['saw a dragon',
           'fell off a cliff and lived',
           'programmed a random description generator that described them exactly',
           'stole a magical orb from a wizard',
           'ate some questionable food and met the god of food poisoning',
           'rode a whirlwind',
           'met a very large cow',
           'saw a ghost',
           'saw a fairy',
           'made a deal with the devil',
           'won a duel with the devil',
           'sold their soul for minimal gain',
           'went viral',
           'starred in a short-lived run of a famous play',
           'got turned into a newt (they got better)',
           'saved a princess from a dragon',
           'saved a dragon from a princess',
           'was saved from a dragon by a princess',
           'died and came back wrong',
           'died and came back'];
  return a[Math.floor(Math.random()*a.length)];
}

function seG() {
  var a = ['they\'re actually from regular old Earth and found themselves here by some means',
           'they killed someone once',
           'they\'ve actually never been on a date',
           'they have a terminal illness',
           'they hate their family',
           'they really love their family',
           'they really hate their job',
           'they have no sense of smell',
           'they witnessed a terrible event and were sworn to secrecy',
           'there are many binaries to which they do not adhere'];
  return a[Math.floor(Math.random()*a.length)];
}

function feG() {
  var a = ['bugs',
           'fish',
           'sharks',
           'losing their memories',
           'being forgotten',
           'eternity',
           'spiders, but only the giant kind',
           'spiders, but only the small kind',
           'being alone',
           'emotional vulnerability',
           'magic',
           'facing their fears',
           'death',
           'everyone hating them',
           'everyone being indifferent toward them',
           'everyone being afraid of them',
           'wide open spaces',
           'enclosed spaces',
           'losing control of themselves',
           'having nonspecific health issues',
           'having very specific health issues',
           'snakes',
           'drawing the wrath of the gods',
           'drawing the attention of the gods',
           'the idea of their self-image being correct'];
  return a[Math.floor(Math.random()*a.length)];
}

function hopG() {
  var a = ['to be happy',
           'to have a lot of money',
           'to get married',
           'to get divorced',
           'to have a child',
           'to have many children',
           'to get a good nights\' sleep',
           'to achieve something amazing',
           'to gain the admiration of everyone',
           'to make the world a better place',
           'to make the world a slightly worse place',
           'to have a fulfilling job',
           'to slay a terrible beast',
           'to become a hero',
           'to become royalty',
           'to leave and never come back',
           'to become immortal',
           'to slay all their enemies',
           'to be remembered',
           'to be loved',
           'to retire',
           'to live a life of luxury',
           'to never do anything again',
           'to never get bored',
           'to achieve infinite arcane power'];
  return a[Math.floor(Math.random()*a.length)];
}

function rngsent() {
  var rng = Math.floor(Math.random() * 8);
  var res;
  if (used.includes(rng)) {
    while (used.includes(rng)) {
      rng = Math.floor(Math.random() * 8);
    }
    used.push(rng);
  }
  else {
    used.push(rng);
  }
  if (rng === 0) {
    res = "In their free time, they often " + hobG() + ". ";
  }
  else if (rng === 1) {
    res = "They're very proud of how " + adG() + " they are. ";
  }
  else if (rng === 2) {
    res = "They try their best not to be " + adG() + ", considering it a quality they're ashamed of. ";
  }
  else if (rng === 3) {
    res = "They once " + taG() + ", but nobody believes them when they say so. ";
  }
  else if (rng === 4) {
    res = "They have never told anyone, but " + seG() + ". ";
  }
  else if (rng === 5) {
    res = "Their greatest fear is " + feG() + ". ";
  }
  else if (rng === 6) {
    res = "Their most dearly-held dream is " + hopG() + ". ";
  }
  else if (rng === 7) {
    res = "Growing up, they were " + adG() + ", but they have grown out of it. ";
  }
  else {
    res = "Growing up, they were " + adG() + ", which they've never managed to shake. ";
  }
  return res;
}

//place gen functions

function poneG() {
  var a = [
    'Stone',
    'Rock',
    'Wood',
    'Marsh',
    'Dry',
    'Waste',
    'Var',
    'Sun',
    'Moon',
    'Star',
    'Beast',
    'Night',
    'Day',
    'Earth',
    'Sky',
    'North',
    'South',
    'East',
    'West',
    'Cave',
    'Hole',
    'River',
    'Sea',
    'Bay',
    'Bridge',
    'Ice',
    'Red',
    'Yellow',
    'Green',
    'Blue',
    'White',
    'Black'];
  return a[Math.floor(Math.random()*a.length)];
}

function ptwoG() {
  var a = [
    'ton',
    'town',
    'wood',
    'march',
    'keep',
    'hold',
    'helm',
    'clear',
    'fjord',
    'ville',
    'borough',
    'shire',
    'glen',
    'dale',
    'comb',
    'cliff',
    'ford',
    'lock',
    'lea',
    'weed',
    'port'];
  return a[Math.floor(Math.random()*a.length)];
}

function ptypeG() {
  var a = [
    'town',
    'city',
    'borough',
    'village',
    'settlement',
    'keep',
    'hamlet',
    'township',
    'burg',
    'port',
    'shire'];
  return a[Math.floor(Math.random()*a.length)];
}

function prepG() {
  var a = [
    'is widely beloved and often traveled to',
    'is known for its many mysteries',
    'is largely overlooked among its more interesting peers',
    'is known for playing host to many untimely and suspicious deaths',
    'is rife with political corruption and nepotism',
    'is basically owned by a prominent crime family',
    'is home to great natural beauty',
    'is there',
    'has changed greatly in the last hundred years',
    'was once much greater and more powerful',
    'was once much smaller and less important',
    'howls at night with the screams of a thousand unquiet spirits',
    'falls victim in the night to all manner of dangerous wildlife',
    'is menaced by local bandits',
    'is a holy site for a certain religion',
    'is a holy site for more than one religion',
    'is avoided unfairly',
    'is avoided for good reason',
    'was once somewhere else, before circumstances neccessitated its relocation',
    'is unsettlingly normal',
    'is suffused with magical energies',
    'has long been thought to have the power to heal anyone who lives there'];
  return a[Math.floor(Math.random()*a.length)];
}

function padG() {
  var a = [
    'calm',
    'lively',
    'crowded',
    'peaceful',
    'vibrant',
    'bleak',
    'rundown',
    'touristy',
    'ancient',
    'magical',
    'modern',
    'traditional',
    'majestic',
    'beautiful',
    'barren',
    'desolate',
    'colorful',
    'quaint',
    'charming',
    'picturesque',
    'quiet',
    'serene',
    'unassuming',
    'unremarkable',
    'chaotic',
    'dangerous',
    'safe',
    'welcoming',
    'hostile',
    'friendly',
    'unfriendly',
    'dry',
    'humid',
    'high in altitude',
    'low in altitude',
    'cold',
    'hot',
    'temperate',
    'rainy',
    'sunny',
    'windy',
    'foggy',
    'snowy',
    'mountainous',
    'flat',
    'hilly',
    'forested'];

    var res = a[Math.floor(Math.random()*a.length)];
    if (used.includes(res)) {
      while (used.includes(res)) {
        res = a[Math.floor(Math.random()*a.length)];
      }
      used.push(res);
    }
    else {
      used.push(res);
    }
  return res;
}

function plrngsent() {
  var rng = Math.floor(Math.random() * 6);
  var res;
  if (used.includes(rng)) {
    while (used.includes(rng)) {
      rng = Math.floor(Math.random() * 6);
    }
    used.push(rng);
  }
  else {
    used.push(rng);
  }
  if (rng === 0) {
    res = "It has a famous " + pthG() + ". ";
  }
  else if (rng === 1) {
    res = "It was once " + padG() + ", but it has recently changed. ";
  }
  else if (rng === 2) {
    res = "Those who live there are known for being " + adG() + ". ";
  }
  else if (rng === 3) {
    res = "It's widely known for its " + pgoG() + ". ";
  }
  else if (rng === 4) {
    res = "Its entire population is engaged in a conspiracy to " + pcoG() + ". ";
  }
  else if (rng === 5) {
    res = "It was once the site of " + phiG() + ". ";
  }
  else {
    res = "Every year, its people " + panG()  + ". ";
  }
  return res;
}

function pthG() {
  var a = [
    'monument to a historical figure',
    'hot spring',
    'pastry shop',
    'party scene',
    'celebrity\'s home',
    'inn in which great heroes once met',
    'mine from which vast quantities of mithral are excavated',
    'grove of many fruit trees',
    'pit that is said to lead directly to the underworld',
    'system of local government'];
  return a[Math.floor(Math.random()*a.length)];
}

function pgoG() {
  var a = [
    'pastries',
    'ore',
    'glasswork',
    'enchanted items',
    'weapons',
    'lumber',
    'furniture',
    'waste products',
    'fine dining',
    'tourist attractions',
    'crops'];
  return a[Math.floor(Math.random()*a.length)];
}

function pcoG() {
  var a = [
    'ensure that everyone who visits has a nice time',
    'ensure that everyone who visits has a terrible time',
    'revive the Dark Lord',
    'find a great hero to slay the Dark Lord',
    'keep property prices low',
    'keep property prices high',
    'scam visitors out of their money',
    'trick visitors into taking more money with them when they leave'];
  return a[Math.floor(Math.random()*a.length)];
}

function phiG() {
  var a = [
    'the birth of a great ruler',
    'the death of a great ruler',
    'a terrible battle in which thousands died',
    'the founding of a nation',
    'the founding of a religion',
    'the discovery of a new method of frying food',
    'the discovery of a new method of forging metal',
    'the discovery of a new method of sewing',
    'the creation of a new art form',
    'the creation of a new alloy of metals',
    'the creation of a new type of magic',
    'the casting of a great spell',
    'the casting of a terrible spell'];
  return a[Math.floor(Math.random()*a.length)];
}

function panG() {
  var a = [
    'celebrate a festival of lights',
    'celebrate a festival of darkness',
    'have a theologically distinct winter solstice festival',
    'have a festival for the longest day of the year',
    'celebrate the day of harvest',
    'celebrate the first day of spring',
    'celebrate a festival of winds',
    'pray for a full day for good harvest',
    'have a grand feast to which all are invited',
    'sacrifice a goat to the gods',
    'have a lively series of games to decide who gets to lead'];
  return a[Math.floor(Math.random()*a.length)];
}

// thing gen functions

function toneG() {
  var a = [
    'Dawn',
    'Dusk',
    'Night',
    'Day',
    'Flame',
    'Freeze',
    'Frost',
    'Heat',
    'Steel',
    'Iron',
    'Gold',
    'Silver',
    'Cobalt',
    'Wood',
    'Stone',
    'Air',
    'Wind',
    'Water',
    'Torrent',
    'Earth',
    'Fire'];
return a[Math.floor(Math.random()*a.length)];
}

function ttwoG() {
  var a = [
  'moon',
  'star',
  'blade',
  'fang',
  'claw',
  'tooth',
  'horn',
  'tear',
  'heart',
  'soul',
  'steel',
  'burn',
  'cast',
  'forge',
  'run',
  'skin',
  'blood',
  'bone',
  'beast',
  'turn',
  'twist',
  'bend',
  'break',
  'crush',
  'grind',
  'cut',
  'rend'];
return a[Math.floor(Math.random()*a.length)];
}

function tadG() {
  var a = [
  'hardened',
  'sharp',
  'ancient',
  'fresh',
  'precise',
  'keen',
  'dull',
  'blunt',
  'jagged',
  'smooth',
  'worn',
  'broken',
  'cracked',
  'perfect',
  'flawless',
  'recent',
  'legendary',
  'mythical',
  'magical',
  'enchanted',
  'cursed',
  'holy',
  'unholy',
  'mysterious',
  'secret',
  'hidden',
  'lost',
  'forgotten',
  'forbidden'];

    var res = a[Math.floor(Math.random()*a.length)];
    if (used.includes(res)) {
      while (used.includes(res)) {
        res = a[Math.floor(Math.random()*a.length)];
      }
      used.push(res);
    }
    else {
      used.push(res);
    }
  return res;
}

function ttypeG() {
  var a = [
  'sword',
  'axe',
  'dagger',
  'spear',
  'bow',
  'staff',
  'wand',
  'mace',
  'hammer',
  'flail',
  'whip',
  'shield',
  'suit of armor',
  'helmet',
  'gauntlet',
  'glove',
  'bracer',
  'pair of boots',
  'pair of greaves',
  'chain shirt',
  'saw',
  'knife',
  'trident',
  'halberd',
  'lance',
  'crossbow',
  'sling',
  'club',
  'rod',
  'scepter',
  'orb',
  'tome',
  'stone',
  'ring',
  'amulet',
  'necklace',
  'crown',
  'diadem',
  'circlet',
  'tiara',
  'earring',
  'brooch',
  'pin',
  'cloak',
  'cape',
  'robe',
  'vest',
  'tunic'];
  return a[Math.floor(Math.random()*a.length)];
}

function trepG() {
  var a = [
    'its use in a great battle',
    'its use by a great hero',
    'its use by a great evil',
    'the terrible deeds it has been party to',
    'nothing — it has been hidden since its creation, for fear of its power',
    'nothing — it was cast off, considered a mistake by its creator',
    'being supposedly desroyed for its power',
    'being kind of weak',
    'not being its creator\'s best work',
    'being its creator\'s least impressive work',
    'being an early, unpolished work by its creator',
    'being its creator\'s first and best work'];
    return a[Math.floor(Math.random()*a.length)];
}

function trngsent() {
  return "Test sentence. ";
}

async function newGen() {

  if (document.getElementById("person").checked) {
    var randNameGen = 'https://randomuser.me/api/?inc=name';
    try {
      const response = await axios.get(randNameGen);
    const person = response.data.results[0];
    var fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
    } catch (error) {
      console.error('Failed with error:', error);
    } 
    document.getElementById('descs').innerHTML = fullName + ", " + buG() + ", " 
    + heG() + " " + joG() + ", is well-known among their peers for being "
    + adG() + " and " + adG() + ". " + rngsent() + rngsent() + rngsent();
    used = [];
  }
  if (document.getElementById("place").checked) {
    document.getElementById('descs').innerHTML = poneG() + ptwoG() + ", a " + ptypeG() + ", is a place that " + prepG() + 
    ". It's widely known for being " + padG() +" and " + padG() + ". " + plrngsent() + plrngsent() + plrngsent();
    used = [];
  }
  if (document.getElementById("thing").checked) {
    document.getElementById('descs').innerHTML = toneG() + ttwoG() + ", a " + tadG() + ", " + tadG() + " " + 
    ttypeG() + ", is known for " + trepG() + ". " + trngsent() + trngsent() + trngsent();
    used = [];
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          RandomThingGen
        </div>
        <div className="selectors">
          <input 
          type="radio" 
          name="selector"
          id="person"/>
          PERSON
          <input 
          type="radio" 
          name="selector"
          id="place"/>
          PLACE
          <input 
          type="radio" 
          name="selector"
          id="thing"/>
          THING
        </div>
        <div className="gButt">
          <button onClick={newGen}>Generate</button>
        </div>
      </header>
      <body>
        <div className='descBox' id='descs'>Select an option and press "Generate" to make something!</div>
      </body>
    </div>
  );
}

export default App;
