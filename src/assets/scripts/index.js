'use strict';

let activePlaceholder = 0;
const words = require('./words.json');
const btnDie = document.getElementById('btnDie');
const btnReset = document.getElementById('btnReset');

function init() {
  const firstPlaceholder = document.getElementById('word0');

  firstPlaceholder.style.borderColor = 'green';
  btnDie.disabled = false;
  btnDie.addEventListener('click', getWord, false);
  btnReset.addEventListener('click', reset, false);
}

function reset() {
  activePlaceholder = 0;
  const placeholders = Array.from(document.getElementsByClassName('word'));

  placeholders.map((placeholder) => {
    placeholder.textContent = '';
    placeholder.style.minWidth = '6ch';
    placeholder.style.borderBottom = '4px solid';
  });
}

function genderWords() {
  console.info('Needs gendering');
}

function getWord() {
  const placeholder = document.getElementById('word' + activePlaceholder);
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

  placeholder.style.minWidth = 'unset';
  placeholder.style.borderBottom = '0';
  if (activePlaceholder < words.length - 1) {
    activePlaceholder++;
  } else {
    btnDie.disabled = true;
  }
}

init();
