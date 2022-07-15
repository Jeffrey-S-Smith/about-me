'use strict';
// Prompt the user for their name
let personName = prompt('What is your name?', 'Type your name here');

// Show personalized message
alert('Hi, ' + personName + ' It is very nice to meet you. Welcome to my site.');
document.write (personName + ' Thank you for visting');
/*console.log(personName + ' Thank you for visting');*/

/* Show how many questions are right. 7 question*/
let numCorrect = 0; 

/*Question 1*/
function askQuestionOne() {
  let livesInSeattle = prompt ('do you live in seattle ').toLowerCase();

  if (livesInSeattle === 'yes' || livesInSeattle === 'y'){
    /*console.log('Yes I do live in seattle');*/
    alert ('Yes I do live in seattle');
    /* Show how many questions are right 7 question*/
    numCorrect++; 
  } else if (livesInSeattle === 'no' || livesInSeattle === 'n') {
    /*console.log ('sorry you are wrong I do live in seattle');*/
    alert ('sorry you are wrong I do live in seattle');
  } else {
    /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionOne();

// Question Two
function askQuestionTwo() {
  let fromWashington = prompt ('Am I from Washington ').toLowerCase();

  if (fromWashington === 'yes' || fromWashington === 'y'){
    /*console.log('No I'm from Virginia');*/
    alert ('No, sorry I\'m from Virgina');
  } else if (fromWashington === 'no' || fromWashington === 'n') {
    /*console.log ('That's correct, I'm from virginia');*/
    alert ('Yes, that\'s correct, I\' from Virginia.');
    /* Show how many questions are right. 7 question*/
    numCorrect++;
  } else {
    /*console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionTwo();

// Question 3
function askQuestionThree() {
  let fearOfHeights = prompt ('Is fear of heights my number one fear?').toLowerCase();

  if (fearOfHeights === 'yes' || fearOfHeights === 'y'){
    /*console.log('No, I"m not afraid of heights');*/
    alert ('That\'s incorrect, I\'m not afraid of heights');
  } else if (fearOfHeights === 'no' || fearOfHeights === 'n') {
    /*console.log ('Yes that's correct, I'm not afraid of heights');*/
    alert ('Yes, that\'s correct, I\' not afraid of heights.');
    /* Show how many questions are right. 7 question*/
    numCorrect++;
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
    /* Show how many questions are right. 7 question*/
    numCorrect++;
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
    /* Show how many questions are right. 7 question*/
    numCorrect++;

  } else if (technology === 'no' || technology === 'n') {
  /*console.log ('sorry you are wrong');*/
    alert ('sorry you are wrong');
  } else { 
    /* console.log ('You need to answer with a \'yes\' or a \'no\'');*/
    alert ('You need to answer with a \'yes\' or a \'no\'');
  }
}

askQuestionFive();

/*Question 6*/
function askQuestionSix() {
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
      /* Show how many questions are right. 7 question*/
      numCorrect++;
      turns = 0;
    } else {
      hint = 'Nope.';
      if (guess < x) hint += ' Too low!';
      if (guess > x) hint += ' Too high!';
      turns = turns - 1;
    }
  }
  alert('The secret number was ' + x + '.');
}

askQuestionSix();

/*Question 7*/
function askQuestionSeven() {
  let myFavAFootball = ['Seahawks', 'Commanders', 'Saints'];
  let guessRemaining = 6;
  let guessInput = '';
  /*what is my Favorite Americian Football Team */
  guessInput = prompt('What American Football Teams have I visited?');
  /* userResponse === seahawks then console.log (correct answer YOU WIN!)*/
  while (guessRemaining) {
    console.log('You have ${guessRemaining} guesses left');
    for (let i = 0; i < myFavAFootball.length; i++) {
      if (guessInput.toLowerCase() === myFavAFootball[i].toLowerCase()) {
        console.log('your correct');
        /* Show how many questions are right. 7 question*/
        numCorrect++;
        guessRemaining = 0;
      }
    }
    if(!(guessRemaining === 0)) {
      console.log('your wrong: ', guessRemaining);
      guessInput = prompt('That\'s incorrect, try again\nWhat American Football Teams have I visited?');
      guessRemaining--;
    }
  }
  alert('These are the correct answers: ' + myFavAFootball);
}

askQuestionSeven();

/* This is the alert for how many questions are right. 7 question*/
alert(`You got ${numCorrect} out of 7 questions.`);







