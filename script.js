'use-strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;  
let score = 20;
let displayScore = (score) => { 
   document.querySelector('.score').textContent = score
}
let highscore = 0

const displayMessage = (message) => {
   document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

//   console.log(guess, typeof guess);

  if (!guess) {
   displayMessage('no number');
  } else if (guess === secretNumber) {
   displayMessage('your number is same');
     document.querySelector('.number').textContent = secretNumber
     score++;
     displayScore(score);  
     document.querySelector('body').style.backgroundColor = '#60b347' 
     document.querySelector('.number').style.width = '30rem'  

     if(highscore < score) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore
     }

  } else if (guess !== secretNumber){
     if(score > 1) {
        displayMessage(guess > secretNumber ? 'your number too high' : 'your number too low')
        score--
         displayScore(score) 
     } else {
      displayMessage('you lose')
      displayScore(0)
     }
  }
  
//   else if (guess > secretNumber) {
//      if(score > 1) {
//         document.querySelector('.message').textContent = 'your number too high';
//         score--
//         document.querySelector('.score').textContent = score 
//      } else {
//         document.querySelector('.message').textContent = 'you lose'
//         document.querySelector('.score').textContent = 0
//      }
//   } else if (guess < secretNumber) {
//      if(1 < score) {
//         document.querySelector('.message').textContent = 'your number too low';
//         score--
//         document.querySelector('.score').textContent = score 
//      } else {
//         document.querySelector('.message').textContent = 'you lose'
//         document.querySelector('.score').textContent = 0
//      }
//   }

});

document.querySelector('.again').addEventListener('click', () => {
   score = 20
   displayScore(score) 
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   console.log();
   displayMessage('Start guessing...')
   document.querySelector('.guess').value = ''
   document.querySelector('.number').textContent = '?'

   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem'
})