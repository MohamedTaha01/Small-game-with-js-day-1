'use strict';

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) document.querySelector('.message').textContent = '⛔ No number';
});

let number = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = number;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let snumber = document.querySelector('.guess').value;
  if (number == snumber) {
    document.querySelector('.message').textContent = '🎇 Correct Number 🎇';
    if (Number(document.querySelector('.highscore').textContent) < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (score <= 1) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'Game Over';
  } else if (number > snumber) {
    document.querySelector('.message').textContent = '👇 Too low 👇';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (number < snumber) {
    document.querySelector('.message').textContent = '👆 Too high 👆';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
