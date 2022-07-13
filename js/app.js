'use strict';
/*Question 1*/
/*
let livesInSeattle = prompt ('do you live in seattle ').toLowerCase();

if (livesInSeattle === 'yes' || livesInSeattle === 'y'){
/*console.log('Yes I do live in seattle');*/
 /* alert ('Yes I do live in seattle');

} else if (livesInSeattle === 'no' || livesInSeattle === 'n') {
*/
  /*console.log ('sorry you are wrong I do live in seattle');*/
 /* alert ('sorry you are wrong I do live in seattle');

} else {

  /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
 /* alert ('You need to answer with a \'yes\' or a \'no\'');
}


/*Question 2 took example from https://sebhastian.com/javascript-confirmation-yes-no/#:~:text=You%20can%20create%20a%20JavaScript,can%20specify%20as%20its%20argument.*/
/*
function showConfirmBox() {
  document.getElementById('overlay').hidden = false;
}
function closeConfirmBox() {
  document.getElementById('overlay').hidden = true;
}

function isConfirm(answer) {
  if (answer) {
    alert('yes is the wrong answer');
  } else {
    alert('no is the correct answer From Charlottesville VA.');
  }
  closeConfirmBox();
}

/*Question 3 *//*
function box() {
  let userval = confirm('You sure that is the correct answer?');
  console.log(userval);
  if (userval) {
    document.write('yes is the wrong answer');
    document.body.style.backgroundColor='red';
  } else {
    document.write('no is the correct answer.');
    document.body.style.backgroundColor='green';
  }

}

/*Question 4*/
/*
let woodworking = prompt ('Do I enjoy woodworking?').toLowerCase();

if (woodworking === 'yes' || woodworking === 'y'){
  /*console.log('Yes I do enjoy woodworking');*/
   
   /*alert ('Yes I do enjoy woodworking');*/
 /*
} else if (woodworking === 'no' || woodworking === 'n') {
  /*console.log ('sorry you are wrong');*/
 /* alert ('sorry you are wrong');
} else { */
  /* console.log ('You need to answer with a \'yes\' or a \'no\'');*/
 /* alert ('You need to answer with a \'yes\' or a \'no\'');*/
/*}

*/


/*Question 5*/

/*Two lower
Two upper

Comment out console.log change them to allerts
\’yes\’
*/

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
/*
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
*/

/*Question 7*/
/*As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.*/

/*As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.*/

let myFavAFootball = ["Indianapolis Colts", "Seattle Seahawks", "Washington Commanders", "New Orleans Saints"];
let userResponse = "Indianapolis Colts";

while () {
  
  
  }