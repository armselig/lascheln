'use strict';

let activePlaceholder = 0;
const words = require('./words.json');
const btnDie = document.getElementById('btnDie');
const btnReset = document.getElementById('btnReset');
const firstPlaceholder = document.getElementById('word0');
const sharer = document.getElementById('sharer');
const twitterLink = document.getElementById('tweet');

function init() {
  firstPlaceholder.classList.add('word--active');
  btnDie.disabled = false;
  btnDie.addEventListener('click', getWord, false);
  btnReset.addEventListener('click', reset, false);
}

function reset() {
  activePlaceholder = 0;
  const placeholders = Array.from(document.getElementsByClassName('word'));

  placeholders.map((placeholder) => {
    placeholder.textContent = '';
    placeholder.classList.remove('word--solved', 'word--active');
  });

  firstPlaceholder.classList.add('word--active');
  btnDie.disabled = false;
  sharer.classList.remove('inline-flex');
  sharer.classList.add('hidden');
  twitterLink.href = '#';
  document.getElementById('word0Prefix').textContent = 'eine';
}

function buildTweet(phrase) {
  const url =
    'https://twitter.com/intent/tweet?url=https://lascheln.armselig.net/&text=';
  const prefix = '👋🏻 Hej @ArminLaschet! 💡 ';
  const suffix = ' %23lascheln 👉🏻';
  const tweet = url + prefix + phrase + suffix;

  twitterLink.href = tweet;
}

function genderWords() {
  document.getElementById('word0Prefix').textContent = 'ein';
  document.getElementById('word1').textContent += 'r';
  document.getElementById('word2').textContent += 'r';
}

function getWord() {
  const placeholder = document.getElementById('word' + activePlaceholder);
  const nextPlaceholder = document.getElementById(
    'word' + (activePlaceholder + 1)
  );
  const btnDieIco = document.querySelector('#btnDie .btn__ico');
  const die = Math.floor(Math.random() * words[activePlaceholder].length);
  let word = words[activePlaceholder];

  console.log('Die:', die);
  btnDieIco.classList.add('animate-spin-once');
  setTimeout(() => {
    btnDieIco.classList.remove('animate-spin-once');
  }, 500);

  switch (activePlaceholder) {
    case 4:
      placeholder.textContent = word[die].word;
      if (word[die].gender === 'male') genderWords();
      break;

    default:
      placeholder.textContent = word[die];
      break;
  }

  placeholder.classList.remove('word--active');
  placeholder.classList.add('word--solved');
  // placeholder.style.minWidth = 'unset';
  // placeholder.style.borderColor = 'transparent';

  if (activePlaceholder < words.length - 1) {
    nextPlaceholder.classList.add('word--active');
    activePlaceholder++;
  } else {
    const phrase = document
      .getElementById('phrase')
      .textContent.replace(/\s+/g, ' ')
      .trim();
    console.log(phrase);
    btnDie.disabled = true;
    buildTweet(phrase);
    sharer.classList.remove('hidden');
    sharer.classList.add('inline-flex');
  }
}

init();
