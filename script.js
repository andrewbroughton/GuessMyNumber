'use strict';

// Secret Number Generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score 
let score = 20;
document.querySelector('.score').innerHTML = score;

//changed this to zero
let highscore = 0;

//refactor using a function
let messageUpdate = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess);


    //When there's no input
    if(!guess) {
    //  console.log('huh...? Where\'s the number?');
        messageUpdate('huh...? Where\'s the number?');
    }

    //Correct Guess (w/ background change)
    else if (guess === secretNumber) {
        messageUpdate('You guessed the number!');
        document.querySelector('body').style.background = '#46A049';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //Highscore assignment
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //Code refactored with functions
    //When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            messageUpdate(guess > secretNumber ? 'That\'s too high!' : 'That\'s too low!');
            score --;
            document.querySelector('.score').innerHTML = score;
        }
        else {
            messageUpdate('Sorry... you lost.');
            document.querySelector('.score').innerHTML = 0;      
            document.querySelector('body').style.background = '#BA1211';      
        }
    }
})

//Play Again/Restart the Game button
document.querySelector('.again').addEventListener('click', function() {
    //test to see if this click function works
    // alert('hello world');

    // reset values and content
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').value;
    messageUpdate('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222222';
    document.querySelector('.number').style.width = '15rem';  
    
    //test
    console.log(document.querySelector('.number').textContent);
    console.log(document.querySelector('.number').value);
});





