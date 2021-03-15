'use-strict';

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'your number is same';
    score++;
    document.querySelector('.score').textContent = score; 
  } else if (guess >= number) {
     if(score > 1) {
        document.querySelector('.message').textContent = 'your number too high';
        score--
        document.querySelector('.score').textContent = score 
     } else {
        document.querySelector('.message').textContent = 'you lose'
        document.querySelector('.score').textContent = 0
     }
  } else if (guess < number) {
     if(1 < score) {
        document.querySelector('.message').textContent = 'your number too low';
        score--
        document.querySelector('.score').textContent = score 
     } else {
        document.querySelector('.message').textContent = 'you lose'
        document.querySelector('.score').textContent = 0
     }
  }
});
