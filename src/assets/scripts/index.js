'use strict';

let activePlaceholder = 0;
let phrase;
const words = require('./words.json');
const btnDie = document.getElementById('btnDie');
const btnReset = document.getElementById('btnReset');
const firstPlaceholder = document.getElementById('word0');
const sharer = document.getElementById('sharer');

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
  sharer.classList.add('hidden');
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
  const die = Math.floor(Math.random() * 6);
  let word = words[activePlaceholder];

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
    phrase = document.getElementById('phrase').textContent;
    console.log(phrase);
    btnDie.disabled = true;
    // sharer.classList.remove('hidden');
  }
}

init();
