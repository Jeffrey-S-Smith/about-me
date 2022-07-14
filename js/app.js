'use strict';
// Prompt the user for their name
let personName = prompt('What is your name?', 'Type your name here');

// Show personalized message
alert('Hi, ' + personName + ' It is very nice to meet you. Welcome to my site.');
document.write (personName + ' Thank you for visting');
/*console.log(personName + ' Thank you for visting');*/
/*Question 1*/

function askQuestionOne() {
  let livesInSeattle = prompt ('do you live in seattle ').toLowerCase();

  if (livesInSeattle === 'yes' || livesInSeattle === 'y'){
    /*console.log('Yes I do live in seattle');*/
    alert ('Yes I do live in seattle');
  } else if (livesInSeattle === 'no' || livesInSeattle === 'n') {
    /*console.log ('sorry you are wrong I do live in seattle');*/
    alert ('sorry you are wrong I do live in seattle');
  } else {
    /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionOne();


/*Question 2 took example from https://sebhastian.com/javascript-confirmation-yes-no/#:~:text=You%20can%20create%20a%20JavaScript,can%20specify%20as%20its%20argument.*/

// function showConfirmBox() {
//   document.getElementById('overlay').hidden = false;
// }
// function closeConfirmBox() {
//   document.getElementById('overlay').hidden = true;
// }

// function isConfirm(answer) {
//   if (answer) {
//     alert('yes is the wrong answer');
//   } else {
//     alert('no is the correct answer From Charlottesville VA.');
//   }
//   closeConfirmBox();
// }

// Question Two
function askQuestionTwo() {
  let fromWashington = prompt ('Am I from Washington ').toLowerCase();

  if (fromWashington === 'yes' || fromWashington === 'y'){
    /*console.log('No I'm from Virginia');*/
    alert ('No, sorry I\m from Virgina');
  } else if (fromWashington === 'no' || fromWashington === 'n') {
    /*console.log ('That's correct, I'm from virginia');*/
    alert ('Yes, that\'s correct, I\' from Virginia.');
  } else {
    /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionTwo();

/*Question 3 */
// function showConfirmBox() {
//   document.getElementById('overlay').hidden = false;
// }
// function closeConfirmBox() {
//   document.getElementById('overlay').hidden = true;
// }

// function isConfirm(answer) {
//   if (answer) {
//     alert('yes is the wrong answer');
//   } else {
//     alert('no is the correct answer.');
//   }
//   closeConfirmBox();
// }

// Question 3
function askQuestionThree() {
  let fearOfHeights = prompt ('Is fear of heights my number one fear?').toLowerCase();

  if (fearOfHeights === 'yes' || fearOfHeights === 'y'){
    /*console.log('No, I"m not afraid of heights');*/
    alert ('That\'s incorrect, I\'m not afraid of heights');
  } else if (fearOfHeights === 'no' || fearOfHeights === 'n') {
    /*console.log ('Yes that's correct, I'm not afraid of heights');*/
    alert ('Yes, that\'s correct, I\' not afraid of heights.');
  } else {
    /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionThree();

/*Question 4*/
function askQuestionFour() {
  let woodworking = prompt ('Do I enjoy woodworking?').toLowerCase();
  if (woodworking === 'yes' || woodworking === 'y'){

    /*console.log('Yes I do enjoy woodworking');*/
    alert ('Yes I do enjoy woodworking');

  } else if (woodworking === 'no' || woodworking === 'n') {
  /*console.log ('sorry you are wrong');*/
    alert ('sorry you are wrong');
  } else { 
  /* console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionFour();


/*Question 5*/
function askQuestionFive() {
  let technology = prompt ('Do I like Technology?').toLowerCase();
  if (technology === 'yes' || technology === 'y'){

    /*console.log('Yes I like technology');*/
    alert ('Yes I do enjoy technology');

  } else if (technology === 'no' || technology === 'n') {
  /*console.log ('sorry you are wrong');*/
    alert ('sorry you are wrong');
  } else { 
    /* console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionFive();


/*lab03 */

/* 4 poss
user to high
user to low
user correct
user invalid

/*Also
are they out atttmpt
do they still attempt left
incrementing the score if the answer correcttly*/

/*Question 6*/
/* Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.  */

let x = Math.floor(Math.random() * 10) + 1;
let turns = 5;
let hint = 'Guess my number, 1-10!';

while (turns > 0) {
  let guess = prompt(hint +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  guess = Number(guess);
  console.log(typeof guess);
  if (guess === x) {
    document.write('<p>YOU WIN!</p>');
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too low!';
    if (guess > x) hint += ' Too high!';
    turns = turns - 1;
  }
}
alert('The secret number was ' + x + '.');


/*Question 7*/
/*As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.*/

/*As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.*/

let myFavAFootball = ['Colts', 'Seahawks', 'Commanders', 'Raiders', 'Saints', 'Chiefs', 'Lions', 'Browns'];
let userResponse = 'Seahawks';
let guessRemaining = 6;
let guessInput = '';

/*what is my Favorite Americian Football Team */
guessInput = prompt ('What is my Favorite Americian Football Team: the list is Colts, Seahawks, Commanders, Raiders, Saints, Chiefs, Lions, Browns');

/* userResponse === seahawks then console.log (correct answer YOU WIN!)*/


while (guessRemaining){
  guessRemaining--;
  console.log('You have ${guessRemaining} guesses left');

  for (let i = 0; i < myFavAFootball.length; i++) {
    if (userResponse === myFavAFootball[i]) {
      console.log('your correct');
    } else {
      console.log('your wrong');
    }
  }
}



/*let score = 0;
score++*/





