'use strict';

/*Question 1*/

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


/*Question 2 took example from https://sebhastian.com/javascript-confirmation-yes-no/#:~:text=You%20can%20create%20a%20JavaScript,can%20specify%20as%20its%20argument.*/

function showConfirmBox() {
  document.getElementById("overlay").hidden = false;
}
function closeConfirmBox() {
  document.getElementById("overlay").hidden = true;
}

function isConfirm(answer) {
  if (answer) {
    alert("yes is the wrong answer");
  } else {
    alert("no is the correct answer From Charlottesville VA.");
  }
  closeConfirmBox();
}

/*Question 3 */
function box() {
  let userval = confirm('You sure that is the correct answer?');
  if (userval) {
    document.write("yes is the wrong answer");
    document.body.style.backgroundColor="red";
  } else {
    document.write("no is the correct answer.");
    document.body.style.backgroundColor="green";
  }
 
}

/*Question 4*/

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


  

/*Question 5*/

/*Two lower
Two upper

Comment out console.log change them to allerts
\’yes\’
*/