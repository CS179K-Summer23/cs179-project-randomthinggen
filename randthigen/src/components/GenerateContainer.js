import React, { useState } from 'react';
import styles from "./GenerateContainer.module.css";
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

const config = {
  dictionaries: [names]
}

let used = [];

// person gen functions

function firstName() {
  if (document.getElementById("fantasy").checked) {
    var res = "";
  var nameStart = [
    'Ab','Ac','Ae','Ag','Ai','Al','Am','An','Ap','Ar','As','At','Ax',
    'Ba','Be','Bi','Bo','Bu',
    'Ca','Ci','Co',
    'Da','De','Di','Do',
    'Eb','Ec','Ed','Ei','El','Em','En','Er','Es','Et','Ew','Ey',
    'Fa','Fe','Fi','Fo',
    'Ga','Ge','Go',
    'Ha','He','Hi','Hu',
    'Ib','Ic','Id','Ih','Ij','Im','In','Ip','Ir','Is','It','Ix',
    'Ja','Je','Ji','Jo','Ju', 'J\'',
    'Ka','Ke','Ki','Ko','Ku', 'K\'',
    'La','Li','Lu','Le','Lo',
    'Ma','Me','Mi','Mo','Mu',
    'Na','Ne','Ni','No','Nu',
    'Ob','Oc','Od','Og','Ol','Om','On','Or','Os','Ot','Ow','Ox',
    'Pa','Pe','Pi','Po','Pu',
    'Qu','Q\'',
    'Ra','Re','Ri','Ro','Ru',
    'Sa','Se','Si','So','Su',
    'Ta','Te','Ti','To','Tu','T\'',
    'Wa','We','Wu',
    'Xa','Xo',
    'Ya','Ye','Yi','Yl','Yo','Yu',
    'Za','Ze','Zi','Z\''];
  var nameMid = [
    'ba','be','bi','bo','bu',
    'ca','ci','co',
    'da','de','di','do',
    'fa','fe','fi','fo',
    'ga','ge','go',
    'ha','he','hi','hu',
    'ja','je','ji','jo','ju', 'j\'',
    'ka','ke','ki','ko','ku', 'k\'',
    'la','li','lu','le','lo',
    'ma','me','mi','mo','mu',
    'na','ne','ni','no','nu',
    'pa','pe','pi','po','pu',
    'qu','q\'',
    'ra','re','ri','ro','ru',
    'sa','se','si','so','su',
    'ta','te','ti','to','tu','t\''];
  var nameEnd = [
    'a','aba','alas','akev','arel','aren','aten',
    'bon','bors','bres','berev','bert',
    'cial','cen','carn','cel',
    'diel','dal','dern','deg', 'dottir',
    'ea','eren','evel','ell','ellol','ellia',
    'fia','fer','faz','fets','foll',
    'gia','ga','gel','gea',
    'hia','hel','hen','hea',
    'ii','ia','illin','ian',
    'lia','lin','lem','liel',
    'mia','ma','me','metis',
    'nia','non','nek','neo',
    'ol','orn','org','ork',
    'pia','pa','pol','pern',
    'qua','quen',
    'rel','ren','rria','rima','rma',
    'sia','sevel','sell','sid', 'son',
    'tia','tem','tellis','tel',
    'uin','ueno','una',
    'ven','vieve','veren','vera',
    'wa','wern','weiss','wein',
    'xan','xin','xame','xie',
    'zia','zin','zirn','zie'];
  var numMids = Math.floor(Math.random()*2);
  res += nameStart[Math.floor(Math.random()*nameStart.length)];
  for (var i = 0; i < numMids; i++) {
    res += nameMid[Math.floor(Math.random()*nameMid.length)];
  }
  res += nameEnd[Math.floor(Math.random()*nameEnd.length)];
  return res;
  }
  if (document.getElementById("scifi").checked) {
    var res = uniqueNamesGenerator(config);
    return res;
  }
  
}

function lastName() {
  if (document.getElementById("fantasy").checked) {
    var res = "";
    var nameStart = [
    'Ab','Ac','Ae','Ag','Ai','Al','Am','An','Ap','Ar','As','At','Ax',
    'Ba','Be','Bi','Bo','Bu',
    'Ca','Ci','Co',
    'Da','De','Di','Do',
    'Eb','Ec','Ed','Ei','El','Em','En','Er','Es','Et','Ew','Ey',
    'Fa','Fe','Fi','Fo',
    'Ga','Ge','Go',
    'Ha','He','Hi','Hu',
    'Ib','Ic','Id','Ih','Ij','Im','In','Ip','Ir','Is','It',"Iw",'Ix',
    'Ja','Je','Ji','Jo','Ju', 'J\'',
    'Ka','Ke','Ki','Ko','Ku', 'K\'',
    'La','Li','Lu','Le','Lo',
    'Ma','Me','Mi','Mo','Mu',
    'Na','Ne','Ni','No','Nu',
    'Ob','Oc','Od','Og','Ol','Om','On','Or','Os','Ot','Ow','Ox',
    'Pa','Pe','Pi','Po','Pu',
    'Qu','Q\'',
    'Ra','Re','Ri','Ro','Ru',
    'Sa','Se','Si','So','Su',
    'Ta','Te','Ti','To','Tu','T\'',
    'Wa','We','Wu',
    'Xa','Xo',
    'Ya','Yb','Yd','Ye','Yi','Yl','Yo','Ys','Yt','Yu',
    'Za','Ze','Zi','Z\''];
    var nameMid = [
    'ba','be','bi','bo','bu',
    'ca','ci','co',
    'da','de','di','do',
    'fa','fe','fi','fo',
    'ga','ge','go',
    'ha','he','hi','hu',
    'ja','je','ji','jo','ju', 'j\'',
    'ka','ke','ki','ko','ku', 'k\'',
    'la','li','lu','le','lo',
    'ma','me','mi','mo','mu',
    'na','ne','ni','no','nu',
    'pa','pe','pi','po','pu',
    'qu','q\'',
    'ra','re','ri','ro','ru',
    'sa','se','si','so','su',
    'ta','te','ti','to','tu','t\''];
    var nameEnd = [
    'a','aba','alas','akev','arel','aren','aten','aus',
    'bon','bors','bres','berev','bert',
    'cial','cen','carn','cel',
    'diel','dal','dern','deg',
    'ea','eren','evel','ell','ellol','ellia',
    'fia','fer','faz','fets','foll', 'field',
    'gia','ga','gel','gea',
    'hia','hel','hen','hea',
    'ii','ia','illin','ian','ios','ius',
    'lia','lin','lem','liel',
    'mia','ma','me','metis',
    'nia','non','nek','neo',
    'ol','orn','org','ork',
    'pia','pa','pol','pern',
    'qua','quen',
    'rel','ren','rria','rima',
    'shi','sia','sevel','sell','sid', 'son',
    'tia','tem','tellis','tel',
    'uin','ueno','una',
    'ven','vieve','veren','vera',
    'wa','wern','weiss','wein',
    'xan','xin','xame','xie',
    'zia','zin','zirn','zie'];
    var numMids = Math.floor(Math.random()*3);
    res += nameStart[Math.floor(Math.random()*nameStart.length)];
    for (var i = 0; i < numMids; i++) {
      res += nameMid[Math.floor(Math.random()*nameMid.length)];
    }
    res += nameEnd[Math.floor(Math.random()*nameEnd.length)];
    return res;
  }
  else {
    var dig = "0123456789ABCDEF"
    var res = "";
    for (var i = 0; i < 4; i++) {
      res += dig[Math.floor(Math.random()*dig.length)];
    }
    return res;
  }
}

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
  if(document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'retail worker',
      'food service worker',
      'healthcare worker',
      'cashier',
      'nurse',
      'general manager',
      'customer service worker',
      'manual laborer',
      'mover',
      'clerk',
      'order stocker',
      'janitor',
      'freight pilot',
      'secretary',
      'mechanic',
      'accountant',
      'software developer',
      'teacher',
      'line cook',
      'chef',
      'security guard',
      'lawyer',
      'personal assistant',
      'electrician',
      'electrical engineer',
      'software engineer',
      'computer engineer',
      'pathologist',
      'roboticist',
      'fighter pilot',
      'AI engineer',
      'mech pilot',
      'commercial pilot',
      'space trucker',
      'hired gun',
      'professional assassin',
      'hydroponics farmer',
      'systems analyst',
      'bartender',
      'private detective',
      'slacker',
      'unemployed person',
      'loser'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function adG() {
  if (document.getElementById("fantasy").checked) {
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
           'quixotic',
           'rebellious',
           'reckless',
           'sickly',
           'healthy',
           'sadistic',
           'stingy',
           'tactless',
           'tactful',
           'witty',
           'magical',
           'elven',
           'dwarven',
           'orcish',
           'goblinoid',
           'animalistic',
           'draconic',
           'demonic',
           'angelic',
           'celestial',
           'infernal',
          ];
  
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
  else {
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
           'quixotic',
           'rebellious',
           'reckless',
           'sickly',
           'healthy',
           'sadistic',
           'stingy',
           'tactless',
           'tactful',
           'witty',
           'cybernetically-enhanced',
           'robotic',
           'android',
           'tech-savvy',
           'tech-illiterate',
           'genetically-modified',
           'space-faring',
           'alien',
           'human',
           'mutated',
           'irradiated'
          ];
  
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
}

function hobG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'program websites',
      'program database software',
      'program games',
      'make robots',
      'bedazzle their stuff',
      'hot glue things to each other',
      'drink',
      'read books',
      'journal',
      'learn languages',
      'take online classes',
      'run a blog',
      'get mad on social media',
      'cause drama on social media',
      'listen to podcasts',
      'record their podcast',
      'collect figurines',
      'collect old coins',
      'collect circuitboards',
      'cook',
      'bake',
      'run on the treadmill',
      'write novels',
      'draw comics',
      'visit museums',
      'volunteer for charitable causes',
      'do yoga',
      'play competitive online games',
      'gamble',
      'do graffiti',
      'plan vacations they\'ll never take',
      'surf the waves in VR',
      'do martial arts',
      'do ballet',
      'paint landscapes',
      'paint portraits',
      'paint space',
      'whittle',
      '3D print things'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function taG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'made an AI that became sentient and destroyed itself',
      'flew a spaceship into a black hole and escaped unharmed'
    ];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function seG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'they\'ve actually never been on a date',
      'they have a terminal illness',
      'they hate their family',
      'they really love their family',
      'they really hate their job',
      'they have no sense of smell',
      'they witnessed a terrible event and were sworn to secrecy',
      'there are many binaries to which they do not adhere',
      'they are actually a popular online content creator who hides their identity',
      'they anonymously exposed a major corporation\'s illegal activities'
    ];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function feG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = ['bugs',
            'fish',
            'sharks',
            'losing their memories',
            'being forgotten',
            'eternity',
            'spiders',
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
            'sentient AI',
            'airlocks',
            'robots',
            'their family hating them',
            'the idea of their self-image being correct'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function hopG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = ['to be happy',
            'to have a lot of money',
            'to get married',
            'to fall in love',
            'to get divorced',
            'to have a child',
            'to have many children',
            'to get a good nights\' sleep',
            'to achieve something amazing',
            'to gain the admiration of everyone',
            'to make the world a better place',
            'to make the world a slightly worse place',
            'to have a fulfilling job',
            'to leave and never come back',
            'to be remembered',
            'to be loved',
            'to retire',
            'to live a life of luxury',
            'to never do anything again',
            'to never get bored',
            'to become famous online',
            'to get rich online',
            'to have a really cool robot butler',
            'to abolish capitalism'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function rngsent() {
  var rng = Math.floor(Math.random() * 9);
  var res;
  if (used.includes(rng)) {
    while (used.includes(rng)) {
      rng = Math.floor(Math.random() * 9);
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
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'Altea ',
      'Atlantis ',
      'Mecca ',
      'Akhet ',
      'Laistrygon ',
      'Nysa ',
      'Okeanos ',
      'Nirvana ',
      'Svarga ',
      'Himavanta ',
      'Xangdu ',
      'Fusang ',
      'Barzakh ',
      'Malakut ',
      'Celliwig ',
      'Adiri ',
      'Irkalla ',
      'Vineta ',
      'Promise ',
      'Hope ',
      'Destiny ',
      'Elysium ',
      'Eden ',
      'Zion ',
      'Heaven ',
      'Paradise ',
      'Utopia ',
      'Arcadia ',
      'Shangri-La ',
      'Shambhala ',
      'Avalon ',
      'Camelot ',
      'El Dorado ',
      'Shangdu ',
      'Xanadu ',
      'Agartha ',
      'Hyperborea ',
      'Asgard ',
      'Valhalla ',
      'Olympus ',
      'Asphodel ',
      'Limbo ',
      'Tartarus ',
      'Hades ',
      'Gehenna ',
      'Sheol ',
      'Inferno ',
      'Chinvat ',
      'Ydalar ',
      'Vyraj ',
      'Annwn ',
      'Albios ',
      'Bitu ',
      'Dubnos ',
      'Yomi ',
      'Diyu ',
      'Naraka ',
      'Duat ',
      'Tarwan ',
      'Bifrost ',
      'Pacha ',
      'Tlalocan ',
      'Xibalba ',
      'Sukhavati ',
      'Alpha ',
      'Beta ',
      'Gamma ',
      'Delta ',
      'Epsilon ',
      'Zeta ',
      'Eta ',
      'Theta ',
      'Iota ',
      'Kappa ',
      'Lambda ',
      'Mu ',
      'Nu ',
      'Xi ',
      'Omicron ',
      'Pi ',
      'Rho ',
      'Sigma ',
      'Tau ',
      'Upsilon ',
      'Phi ',
      'Chi ',
      'Psi ',
      'Omega ',
    ];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function ptwoG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'Station',
      'Colony',
      'City',
      'Shelter',
      'Settlement',
      'Outpost',
      'Base',
      'Frontier',
      'Spaceport',
      'Starport',
      'Reach',
      'Habitat',
      'Dome',
      'Ring',
      'Spome',
      'Sphere',
      'Observatory',
      'Torus',
      'Arcology',
      'Cenery',
      'Gateway',
      'Simvironment',
      'Bernal',
      'Structure',
      'Polity',
    ];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function ptypeG() {
  if(document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'space station',
      'planetary settlement',
      'asteroid colony',
      'series of biodomes',
      'ring habitat',
      'Dyson sphere',
      'generation ship',
      'colony fleet',
      'arcology',
      'spaceport',
      'solar city',
      'starbase'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function prepG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'economically control the system in which it\'s located',
      'militarily control the system in which it\'s located',
      'serve as a trading hub',
      'extract fuel from the system\'s gas giants',
      'extract minerals from the system\'s asteroid belt',
      'extract minerals from the system\'s planets',
      'halt travel through the system in which it\'s located',
      'serve as a stopover for travelers on exploratory missions',
      'research an unusual anomaly in the system in which it\'s located',
      'research the lifeforms that occupy the system in which it\'s located',
      'observe an uncontacted alien civilization in the system in which it\'s located',
      'serve as a military base',
      'serve as a mining base',
      'serve as a research base',
      'threaten a nearby military base from a hostile power',
      'stake a claim on the system for a corporate entity',
      'produce crops',
      'raise the local lifeforms as livestock',
      'raise the local lifeforms as exotic pets',
      'exploit the system\'s natural resources',
      'draw tourists to the system\'s unique locales',
      'encourage a nearby alien civilization to join the galactic community',
      'discourage a nearby alien civilization from leaving their planet',
      'serve as a prison colony',
      'serve as a quarantine zone',
      'serve as containment observation for a dangerous anomaly',
      'take advantage of the nearest star\'s unusual properties',
      'serve as the headquarters for an interstellar diplomatic organization',
      'serve as the headquarters for a corporate entity',
      'serve as the headquarters for a criminal organization',
      'serve as the headquarters for a religious organization',
      'serve as the headquarters for a scientific organization',
      'serve as the headquarters for a military organization',
      'serve as a demonstration of its people\'s technological prowess',
      'serve as a demonstration of its people\'s hardiness',
      'serve as a demonstration of its people\'s adaptability'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function padG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'calm',
      'lively',
      'crowded',
      'peaceful',
      'vibrant',
      'bleak',
      'rundown',
      'majestic',
      'beautiful',
      'desolate',
      'colorful',
      'quaint',
      'charming',
      'picturesque',
      'quiet',
      'serene',
      'unassuming',
      'chaotic',
      'dangerous',
      'safe',
      'welcoming',
      'hostile',
      'friendly',
      'unfriendly',
      'oxygenated',
      'hydrogenated',
      'argonated',
      'nitrogenated',
      'industrial',
      'science-focused',
      'militaristic',
      'suspicious',
      'welcoming',
      'agriculturally-focused',
      'touristy',
      'old-fashioned',
      'new-fangled',
      'altruistic',
      'capitalistic',
      'communistic',
      'socialistic',
      'solar-powered',
      'nuclear-powered',
      'fission-powered',
      'fusion-powered',
      'warp-powered'
    ];
  
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
}

function plrngsent() {
  var rng = Math.floor(Math.random() * 7);
  var res;
  if (used.includes(rng)) {
    while (used.includes(rng)) {
      rng = Math.floor(Math.random() * 7);
    }
    used.push(rng);
  }
  else {
    used.push(rng);
  }
  if (document.getElementById("fantasy").checked) {
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
  }
  else {
    if (rng === 0) {
      res = "Due to its location, it " + pthG() + ". ";
    }
    else if (rng === 1) {
      res = "It was once " + padG() + ", but recently that's changed. ";
    }
    else if (rng === 2) {
      res = "Those who live there are known for being " + adG() + ". ";
    }
    else if (rng === 3) {
      res = "It's widely known for its " + pgoG() + ". ";
    }
    else if (rng === 4) {
      res = "Unbeknownst to the wider galactic community, " + pcoG() + ". ";
    }
    else if (rng === 5) {
      res = "Its founding was " + phiG() + ". ";
    }
    else {
      res = "Its people have taken to " + panG()  + ". ";
    }
  }
  return res;
}

function pthG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'only ever sees the light of day for a few hours at a time',
      'only ever sees night for a few hours at a time',
      'has to be constantly heated to keep its inhabitants alive',
      'has to be constantly cooled to keep its inhabitants alive',
      'must be shielded against the radiation of its parent star',
      'must be shielded against the radiation of nearby space debris',
      'must have all its air filtered to remove harmful toxins',
      'must have all its air filtered to remove harmful microbes',
      'must have all its air filtered to remove harmful nanobots',
      'must constantly monitor its citizens to ensure they are who they say they are',
      'has to monitor a nearby anomaly to ensure its safety',
      'must use a shield array to protect against debris',
      'has to cloak itself from hostile pirates',
      'must always keep watch for solar flares'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function pgoG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'rare ore',
      'highly pure metal',
      'warp fuel',
      'exotic crops',
      'wealth of scientific data',
      'wealth of junk from derelict ships',
      'tourist attractions',
      'diplomatic summits',
      'natural beauty',
      'alien beauty',
      'distinct and interesting culture'];
    return a[Math.floor(Math.random()*a.length)];
  }

}

function pcoG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'it shelters an alien species hunted by a hostile power',
      'it benefits from a dangerous anomaly that destroys many ships passing through the system',
      'it is the latest front in a shadow proxy war between two galactic superpowers',
      'it exists thanks to a time traveler\'s intervention in the timeline',
      'it plans to declare independence from its parent nation',
      'it is secretly controlled by a hostile alien power',
      'it is secretly run by a sapient AI',
      'all of its people are actually robots'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function phiG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'fraught — over half of the original settlers perished in the first year',
      'simple — it prospered quickly and easily',
      'complex — new methods of governance had to be invented to deal with the constantly changing situation',
      'dangerous — hostile pirates menaced it for years, making development difficult',
      'crowded — it was settled by a large number of disparate peoples, who had to learn to live together',
      'a mystery — it was built on the ruins of a much older settlement, and its history is largely unknown',
      'a mystery — its government hides the actual story behind so much contradictory propaganda that the truth is unknown',
      'harsh — its people had to learn to survive in a hostile environment',
      'convoluted — many smaller settlements came together to form it, and their histories are often at odds',
      'spiteful — it was settled by a group of people who had been exiled from their homeworld, and they have never forgotten it',
      'zealous — it was settled by a religious group whose beliefs have shaped its development',
      'comical — tales of its founding are told raucously in bars across the galaxy',
      'lucky — the original settlers had nearly run out of supplies when they discovered the site'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function panG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'the weaving of special cloth',
      'the creation of unique crafts',
      'the manufacture of weapons',
      'an obscure and difficult to understand religion',
      'believing a long-disbelieved creation myth',
      'the creation of new art forms',
      'following the latest fashion trends',
      'imitating the lives of days long past',
      'gladiatorial combat',
      'public executions for minor infractions',
      'tricking visitors into breaking arcane local laws and pranking them with fake trials'];
    return a[Math.floor(Math.random()*a.length)];
  }
}

// thing gen functions

function toneG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'Pulsar ',
      'Graviton ',
      'Wormhole ',
      'Schwarzschild ',
      'Quasar ',
      'Neutron ',
      'Dark Matter ',
      'Magnetar ',
      'Strange Matter ',
      'Plasma ',
      'Quark-Gluon ',
      'Chandrasekhar ',
      'Isotope ',
      'Electroweak ',
      'Gamma ',
      'Proton ',
      'Electron ',
      'Positron ',
      'Neutrino ',
      'Tachyon ',
      'Meson ',
      'Boson ',
      'Hadron ',
      'Baryon ',
      'Resonance '];
    return a[Math.floor(Math.random()*a.length)];
  }
}

function ttwoG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var res = "";
    var a = [
      'Singularity',
      'Breaker',
      'Mold',
      'Shift',
      'Burst',
      'Ray',
      'Nova',
      'Hyperreality',
      'Atlas',
      'Phage',
      'Pulse',
      'Wave',
      'Storm',
      'Sequence',
      'Signal',
      'Overflow',
      'Range Error',
      'Eruption',
      'Hazard',
      'Cataclysm',
      'Catastrophe',
      'Apocalypse',
      'Sextant',
      'Shovel',
      'Blade',
      'Shaper',
      'Cascade',
      'Collider'];
      var b = [
        ' Mark ',
        ' Version ',
        ' V',
        ' Model ',
        ' Mk. '
      ];
    res += a[Math.floor(Math.random()*a.length)];
    if (Math.random() < 0.5) {
      var c = Math.floor(Math.random()*5) + 2;
      var d = "";
      for (var i = 0; i < c; i++) {
        if (Math.random() < 0.5 && i % 2 !== 0 && i !== c - 1) {
          d += ".";
        }
        else {
          d += Math.floor(Math.random()*11);
        }
      }
      res += b[Math.floor(Math.random()*b.length)];
      res += d;
    }
    return res;
  }
}

function tadG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'broken',
      'confusing',
      'dangerous',
      'networked',
      'unstable',
      'unpredictable',
      'toxic',
      'radioactive',
      'anomalous',
      'physics-defying',
      'physics-breaking',
      'sought-after',
      'classified',
      'secret',
      'hidden',
      'forgotten',
      'lost',
      'alien',
      'valuable',
      'worthless',
      'unusual',
      'hazardous',
      'untested',
      'experimental',
      'unreliable',
      'untrustworthy',
      'unethical',
      'illegal',
      'reality-bending'];
    
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
}

function ttypeG() {
  if (document.getElementById("fantasy").checked) {
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
  else {
    var a = [
      'device',
      'mechanism',
      'apparatus',
      'machine',
      'gadget',
      'contraption',
      'invention',
      'utensil',
      'tool'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function trepG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'its use in a great battle',
      'its use by a great hero',
      'its use by a great evil',
      'the terrible deeds it has been party to',
      'being supposedly destroyed for its power',
      'not being its creator\'s best work',
      'being an early, unpolished work by its creator',
      'being its creator\'s first and best work',
      'being its creator\'s magnum opus',
      'ending the lives of many',
      'saving the lives of many',
      'forever changing the lives of many',
      'breaking the hearts of many',
      'sparking a war for its possession',
      'sparking a war for its destruction',
      'destroying those unworthy to use it',
      'its role in an ancient prophecy'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'explode violently with enough force to destroy a small moon',
      'detonate an active warp engine',
      'create a microscopic black hole',
      'tear a hole in reality',
      'allow its user to travel back in time',
      'decrease the temperature of its surroundings',
      'increase the temperature of its surroundings',
      'break the laws of thermodynamics',
      'violate special relativity without traditional warp methods',
      'teleport matter from one place to another',
      'alter the gravity of massive objects',
      'create matter from nothing',
      'destroy matter completely',
      'do something quantum',
      'move perpetually without outside input',
      'violate conservation of energy',
      'violate the uncertainty principle',
      'allow its user to travel into alternate universes'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function tmatG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'mithral',
      'steel',
      'iron',
      'bronze',
      'gold',
      'silver',
      'diamond',
      'wood',
      'marble',
      'granite',
      'ruby',
      'emerald',
      'sapphire',
      'topaz',
      'bone',
      'glass',
      'enchanted water',
      'enchanted fire',
      'enchanted air',
      'amber',
      'dead grass',
      'flesh',
      'crystal',
      'quartz',
      'magical energy'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'a strange isotope',
      'complex and interconnected circuitry',
      'a tiny, contained black hole',
      'zero-mass material',
      'a strange, glowing liquid',
      'an ancient civilization\'s technology',
      'a crystal of some persuasion',
      'gas from an anomalous nebula',
      'remnants of a supernova',
      '4-dimensional matter',
      'negative-mass material',
      'anomalous microorganisms',
      'nanomachines',
      'a quantum tunnel',
      'carbon nanotubes',
      'programmable matter',
      'quantum dots',
      'graphene',
      'a network of AIs',
      'a network of quantum computers',
      'quantum entanglement',
      'an uploaded consciousness',
      'a hypercomputer',
      'a cold fusion device',
      'a muon collider',
      'a particle containment field',
      'cells from an anomalous species'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function tcoG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'the sudden death of its creator',
      'the sudden imprisonment of its creator',
      'the sudden destruction of the forge in which it was created',
      'the methods used to create it being outlawed',
      'an attack by demons',
      'an attack by forces of heaven',
      'an attack by hordes of undead',
      'an attack by a dragon',
      'a group attempting to steal it and use it for an unholy ritual',
      'a thief stealing it, who then completed it themselves',
      'a force ten thousand strong coming to destroy it',
      'someone trying to destroy it for their personal beliefs',
      'someone trying to destroy it for their religious beliefs',
      'someone trying to destroy it for their loyalty to an organization'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'a loss of funding',
      'a government shutdown',
      'a planetary invasion',
      'a planetary bombardment',
      'a solar flare',
      'a group attempting to steal it and use it for their own purposes',
      'a group attempting to destroy it before it could be completed',
      'the creator lacking motivation',
      'the creator falling ill',
      'its original designer dying',
      'its original designer being imprisoned',
      'its original designer being killed',
      'internal sabotage',
      'its own creator trying to destroy it',
      'issues with its power source',
      'issues with material sourcing',
      'supply chain issues',
      'a lack of skilled labor',
      'a lack of raw materials'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function tpoG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'permanently destroy a certain otherwise-immortal being',
      'wound an otherwise-invincible being',
      'tempt anyone who owns it into evil acts',
      'convince anyone who owns it to do unequicoval good',
      'slowly drain its user\'s life force',
      'transfer the life force of others into its user',
      'make its owner immortal',
      'make its owner\'s loved ones immortal',
      'control fire',
      'control water',
      'control air currents',
      'control stones of all kinds',
      'control the minds of others',
      'change the laws of reality',
      'allow its user to predict the future',
      'control the flow of time',
      'allow its user to travel through time',
      'allow its user to travel into other worlds'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'overcomplex, with many dud controls to obfuscate its usage from the uninitiated',
      'overly simple, with only one button to activate and deactivate it',
      'complicated, with a number of unlabeled dials and switches',
      'simple, with all of its controls labeled and a clear on/off switch',
      'unreliable, with a tendency to break down at the worst possible moment',
      'reliable, with a tendency to work even in the worst possible conditions',
      'unstable, with a tendency to explode when used',
      'stable, with a tendency to work no matter what the user tries',
      'dangerous, with a tendency to cause harm to the user',
      'multi-part, since it requires the combined efforts of many people to use',
      'difficult, with many of its parts requiring significant strength to operate',
      'irritating, with many of its controls needing to be held in place at once'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function tevG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'kill a god',
      'kill a king',
      'kill a truly good person',
      'kill a truly evil person',
      'slay a great evil',
      'slay a great good',
      'kill its owner',
      'justify great atrocities',
      'create a new religion',
      'destroy the world or save it',
      'save the world',
      'destroy the world',
      'topple a political system',
      'change a truly good person\'s heart',
      'change a truly evil person\'s heart',
      'save a village',
      'save a person important to its creator',
      'save a person important to its owner',
      'save a city',
      'save a religion',
      'save a god',
      'save a king',
      'save its owner',
      'win the heart of its owner\'s true love'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'consolidate power in the hands of the government',
      'consolidate power in the hands of the people of a certain planet',
      'consolidate power in the hands of a corporate authority',
      'threaten the stability of the galactic community',
      'threaten a corporate authority',
      'threaten a construction project',
      'threaten a diplomatic summit',
      'threaten a scientific project',
      'threaten a military installation',
      'threaten a civilian population',
      'threaten a religious site',
      'protect a religious site',
      'protect a scientific project',
      'protect a diplomatic summit',
      'protect a construction project',
      'protect a military installation',
      'protect a civilian population',
      'protect a corporate authority',
      'protect the stability of the galactic community',
      'benefit a single person',
      'make an absurd amount of money'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function tusG() {
  var a = [
    'slayed a dragon',
    'slayed an archdemon',
    'slayed an archangel',
    'served a just king',
    'served an unjust king',
    'dethroned a monarch',
    'served a good god',
    'served an evil god',
    'worked for a shadowy organization',
    'saved a town',
    'destroyed a town',
    'slipped through the cracks of reality and disappeared forever, leaving it behind',
    'saved the world from sure destruction',
    'saved the world from an extraplanar invasion',
    'saved the world from the concept of entropy',
    'cast a spell so powerful it changed the world'];
    return a[Math.floor(Math.random()*a.length)];
}

function thiG() {
  if (document.getElementById("fantasy").checked) {
    var a = [
      'was blessed by an unknown presence',
      'was cursed by an unknown presence',
      'had great power bestowed upon it by a divine being',
      'had great power bestowed upon it by a demonic being',
      'was brought to a monarch as a gift, and it was rejected',
      'was brought to a god as an offering, and it was rejected',
      'was brought to a demon as an offering, and it was rejected',
      'was brought to a monarch as a gift, and it was accepted',
      'was brought to a god as an offering, and it was accepted',
      'was brought to a demon as an offering, and it was accepted',
      'was given as a wedding gift',
      'was given as a birthday gift',
      'was given as an anniversary gift',
      'was given to win the heart of another',
      'was given to break the heart of another',
      'caused a great storm',
      'caused a massive earthquake',
      'caused a tsunami',
      'caused a wildfire',
      'caused a volcanic eruption'];
      return a[Math.floor(Math.random()*a.length)];
  }
  else {
    var a = [
      'a militaristic government',
      'a peaceful government',
      'a wealthy corporation',
      'a single ultra-rich individual',
      'a shadowy organization',
      'a criminal syndicate',
      'a religious authority',
      'a scientific study',
      'a diplomatic organization',
      'an organization dedicated to galactic peace',
      'a group of pirates',
      'a mercenary company',
      'an ancient alien civilization',
      'a group of time travelers',
      'a group of aliens from another dimension',
      'a benevolent sentient AI',
      'a malevolent sentient AI',
      'one of the creator\'s friends',
      'one of the creator\'s enemies',
      'one of the creator\'s family members',
      'the independently wealthy creator'];
      return a[Math.floor(Math.random()*a.length)];
  }
}

function trngsent() {
  var rng = Math.floor(Math.random() * 7);
  var res;
  if (used.includes(rng)) {
    while (used.includes(rng)) {
      rng = Math.floor(Math.random() * 7);
    }
    used.push(rng);
  }
  else {
    used.push(rng);
  }
  if (document.getElementById("fantasy").checked) {
    if (rng === 0) {
      res = "It's made of " + tmatG() + ", with " + tmatG() + " accents. ";
    }
    else if (rng === 1) {
      res = "Its creation was complicated by " + tcoG() + ", but despite that, it exists. ";
    }
    else if (rng === 2) {
      res = "One must be " + adG() + " to be worthy to use it. ";
    }
    else if (rng === 3) {
      res = "Its secret power is to " + tpoG() + ". ";
    }
    else if (rng === 4) {
      res = "An oracle once prophesied it would be used to " + tevG() + ". ";
    }
    else if (rng === 5) {
      res = "A past user once " + tusG() + ". ";
    }
    else {
      res = "When it was created, it " + thiG()  + ". ";
    }
  }
  else {
    if (rng === 0) {
      res = "It uses " + tmatG() + ", with incidental usage of " + tmatG() + ". ";
    }
    else if (rng === 1) {
      res = "Its creation was complicated by " + tcoG() + ", but despite that, it exists. ";
    }
    else if (rng === 2) {
      res = "Its creator was " + adG() + ", which shows in its design. ";
    }
    else if (rng === 3) {
      res = "Its usage is " + tpoG() + ". ";
    }
    else if (rng === 4) {
      res = "In the past, it was used to " + tevG() + ". ";
    }
    else if (rng === 5) {
      res = "The place in which it was created was " + padG() + ", which is obvious from its internal construction. ";
    }
    else {
      res = "Its creation was financed by " + thiG()  + ". ";
    }
  }
  return res;
}

function newGen() {

  var desc;
  if (document.getElementById("person").checked) {
    if (document.getElementById("fantasy").checked) {
      desc = firstName() + " " + lastName() + ", " + buG() + ", " 
    + heG() + " " + joG() + ", is well-known among their peers for being "
    + adG() + " and " + adG() + ". " + rngsent() + rngsent() + rngsent();
    used = [];
    }
    else {
      desc = firstName() + ", ident code " + lastName() + ", " + buG() + ", " 
    + heG() + " " + joG() + ", is well-known among their peers for being "
    + adG() + " and " + adG() + ". " + rngsent() + rngsent() + rngsent();
    used = [];
    }
  }
  else if (document.getElementById("place").checked) {
    if (document.getElementById("fantasy").checked) {
      desc = poneG() + ptwoG() + ", a " + ptypeG() + ", is a place that " + prepG() + 
    ". It's widely known for being " + padG() +" and " + padG() + ". " + plrngsent() + plrngsent() + plrngsent();
    used = [];
    }
    else {
      desc = poneG() + ptwoG() + ", a " + ptypeG() + ", is built to " + prepG() +
      ". It's primarily known for being " + padG() + " and " + padG() + ". " + plrngsent() + plrngsent() + plrngsent();
      used = [];
    }
  }
  else if (document.getElementById("thing").checked) {
    if (document.getElementById("fantasy").checked) {
      desc = toneG() + ttwoG() + ", a " + tadG() + ", " + tadG() + " " + 
    ttypeG() + ", is known for " + trepG() + ". " + trngsent() + trngsent() + trngsent();
    used = [];
    }
    else {
      desc = "The " + toneG() + ttwoG() + ", a " + tadG() + ", " + tadG() + " " + 
    ttypeG() + ", is designed to " + trepG() + ". " + trngsent() + trngsent() + trngsent();
    used = [];
    }
  }
  else {
    desc = "No boxes checked. Check Person, Place, or Thing to generate!";
  }
  return desc;
}

  const GenerateContainer = ({onSave}) => {

    const boxCont = newGen();
    const [content, setContent] = useState(boxCont); // Default content
      const handleSave = () => {
        onSave(content);
      };
      const handleDelete = () => {
        //deletion code here
        console.log("delete attempt");
      };
      return (
        <div className={styles.singlegeneratecontainer}>
          <div className={styles.generatecontainer}>
            {boxCont}
          </div>
          <button className={styles.savegeneratebutton} onClick={handleSave}>
            <div className={styles.save}>Save</div>
            <img
              className={styles.materialSymbolssaveIcon}
              alt=""
              src="/materialsymbolssave.svg"
            />
          </button>
          <button className={styles.deletebutton} onClick={handleDelete}>
            <img className={styles.typcndeleteIcon} alt="" src="/typcndelete.svg" />
          </button>
        </div>
      );
    };

export default GenerateContainer;
