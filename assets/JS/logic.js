// GLOBAL VARIABLES
//---------------------------------------
// Used to record how many times a letter can be pressed
var doubleWord = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];
// Holds the all the words
var wordBank =['americano', 'cappucino', 'espresso', 'cubano', 'latte', 'macchiato', 'mocha', 'frappe','black'];
// Holds chosenWord
var chosenWord = "";
// Holds letters in word
var lettersInWord = [];
// Holds number of blanks in word
var numBlanks = 0;
// Holds Blanks and successful guesses
var blanksAndSuccesses =[];
// Holds Wrong guesses
var wrongLetters = [];
// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 6;
var rightGuessCounter = 0;

// FUNCTIONS
// ----------------------------------------

function reset()
{
// Chooses word randombly from the wordBank
chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// Splits the choosen word into individual letters
lettersInWord = chosenWord.split('');
// Get the number of blanks
numBlanks = lettersInWord.length;

// RESET
// ===========================================================

letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 6;
wrongLetters =[];
blanksAndSuccesses =[];
doubleWord = ['a','b','c',
	'd','e','f',
	'g','h','i',
	'j','k','l',
	'm','n','o',
	'p','q','r',
	's','t','u',
	'v','w','x',
	'y','z'];
test=false;
startGame();
}
function startGame()
{
// Chooses word randombly from the wordBank
chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// Splits the choosen word into individual letters
lettersInWord = chosenWord.split('');
// Get the number of blanks
numBlanks = lettersInWord.length;

// RESET
// ===========================================================

rightGuessCounter = 0;
guessesLeft = 6;
wrongLetters =[];
blanksAndSuccesses =[];
doubleWord = ['a','b','c',
	'd','e','f',
	'g','h','i',
	'j','k','l',
	'm','n','o',
	'p','q','r',
	's','t','u',
	'v','w','x',
	'y','z'];

// Populate blanks
for(var i = 0; i< numBlanks; i++)
{
blanksAndSuccesses.push('_');
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
}

// Changes HTML 
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = lossCount;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;
// Testing / Debugging
console.log(chosenWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
console.log('WORKING!');
// If user key exist in choosen word then perform this function 
if(chosenWord.indexOf(userKey) > -1)
{
  // Loops depending on the amount of blanks 
  for(var i = 0; i < numBlanks; i++)
  {
	  // Fills in right index with user key
	  if(lettersInWord[i] === userKey)
	  {
		  rightGuessCounter++;
		  blanksAndSuccesses[i] = userKey;
		  document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	  }	
  }
  // Test / Debug
  console.log(blanksAndSuccesses);
}
// Wrong Keys
else
{
  wrongLetters.push(userKey);
  guessesLeft--;
  //Changes HTML
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wrongGuesses').innerHTML = wrongLetters;
  //Test / Debug
  console.log('Wrong Letters = ' + wrongLetters);
  console.log('Guesses left are ' + guessesLeft);
}



}
function winLose()
{
// When number blanks if filled with right words then you win
if(rightGuessCounter === numBlanks)
{
// Counts Wins 
winCount++;
// Changes HTML
document.getElementById('winCounter').innerHTML = winCount;
alert('You Win');
reset();
}
// When number of Guesses reaches 0 then You lose
else if(guessesLeft === 0)
{
// Counts losses
lossCount++;
// Changes HTML
document.getElementById('lossCounter').innerHTML = lossCount;
alert('You Lose');
reset();
}
}

// MAIN PROCCESS
// -------------------------------------------	

// Initiates the Code
startGame();

document.onkeyup = function(event)
{
test = true;
var letterGuessed = event.key;
for(var i = 0; i < doubleWord.length; i++)
{	
if(letterGuessed === doubleWord[i] && test === true)
{
var spliceDword = doubleWord.splice(i,1);
//Test / Debug
console.log('Double word is = ' + doubleWord[i])
console.log('Spliced Word is = ' + spliceDword);

compareLetters(letterGuessed);
winLose();
}
}		

}

// Music Volume Choice 
var x = document.getElementById('myAudio');

function getVolume() { 
    alert(x.volume);
} 

function setHalfVolume() { 
    x.volume = 0.2;
}
   
function setFullVolume() { 
    x.volume = 1.0;
} 