//please excuse my notes to my future self that are commented out! 

var userChoice;
var computerChoice;
var userScore = 0; //set to 0 because you need to incriment things
var computerScore = 0;
var result;

//onclick, reset
$('#reset').on('click', function (){
	userScore = 0;
	computerScore = 0;
	$('#humanScore').html(userScore);
	$('#computerScore').html(computerScore);
});

//main function - get's users choice on click
$('.choices button').on('click',function(){
	userChoice = $(this).find('.type').html(); //remeber empty () get's something; quotes or something within it is setting it.
	// userChoice = userChoice.toLowerCase;
	computerChoice = getComputerChoice(); //generates it everytime a user plays
	console.log(userChoice); //make sure when console logging it's in the function!
	console.log(computerChoice); 
	getWinner();

});

//function compares these two choices
function getWinner(){
  if (userChoice === 'rock') {
    if (computerChoice === 'rock') {
      result = 'Tie';
    } else if (computerChoice === 'paper') {
      result = 'You Lose';
      computerScore++;
    } else if (computerChoice === 'scissors') {
      result = 'You Win';
      userScore++; //adds one or userScore = userScore + 1;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You Win';
      userScore++;
    } else if (computerChoice === 'paper') {
      result = 'Tie';
    } else if (computerChoice === 'scissors') {
      result = 'You Lose';
      computerScore++;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = 'You Lose';
      computerScore++;
    } else if (computerChoice === 'paper') {
      result = 'You Win';
      userScore++;
    } else if (computerChoice === 'scissors') {
      result = 'Tie';
    }
  }

	$('#status').html('You chose '+userChoice+'. Computer chose '+computerChoice+'. '+result+'.');  //+Concatinates- Cannot put quotes around variables.
	console.log(result);
	$('#humanScore').html(userScore);
	$('#computerScore').html(computerScore);
}

//get random computer choice; randomly select and index for these options and grab it that way

function getComputerChoice() {
  var plays = ['rock', 'paper', 'scissors'];
  var randNum = Math.floor(Math.random() * plays.length);
  var play = plays[ randNum ];
  return play;
}

/*function getComputerChoice() {
  var plays = ['Rock', 'Paper', 'Scissors']; //creating an array of options
  var randNum = Math.floor(Math.random() * plays.length); //always includes the min number - 0 - but not the max number
  var play = plays[ randNum ];
  return play;
}*/


//		$('h2').html('You Won!'); $('.humanScore').val(''+1); $('.computerScore').val();

// var play = plays[Math.floor(Math.random() * plays.length)]; //. alt way of writing... floor rounds it up & 
/*	down so that you do not get a decimal (aka a float) in you array*/