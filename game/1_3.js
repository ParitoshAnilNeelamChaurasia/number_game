
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


// its array because -> value submitted by user -> stored in the array -> so that user must not guess the same value once more 
let prevGuess = [];

// numGuess -> stops -> when numGuess == 10 -> condition for termination defined by us
let numGuess = 1;

let playGame = true;

// did we able to play game or not
if (playGame) {
    // addEventListener -> in this function an event came
    submit.addEventListener('click', function (e) {

    // don't throm values -> I have to take the value for future use
    e.preventDefault();

    // guess -> made by the user
    const guess = parseInt(userInput.value);

    // printing in console window for checking
    console.log(guess);

    // call function
    validateGuess(guess);
  });
}

// did user guesses the validate number or not
function validateGuess(guess) {
  if (isNaN(guess)) 
  {
    alert('PLease enter a valid number');
  } 
  else if (guess < 1) 
  {
    alert('PLease enter a number more than 1');
  } 
  else if (guess > 100) 
  {
    alert('PLease enter a  number less than 100');
  } 
  else 
  {
    // push in the array
    prevGuess.push(guess);
    
    // checking that if it is not his last attempt
    if (numGuess === 11) 
    {
      displayGuess(guess);     // for displaying guess
      displayMessage(`Game Over. Random number was ${randomNumber}`);

    //   calling endgame() function
      endGame();   
    }

    // if its not his last guess
    else 
    {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// for printing the messages 
function checkGuess(guess) {
  if (guess === randomNumber) 
  {
    displayMessage(`You guessed it right`);
    endGame();
  } 
  else if (guess < randomNumber) 
  {
    displayMessage(`Number is TOOO low`);
  } 
  else if (guess > randomNumber) 
  {
    displayMessage(`Number is TOOO High`);
  }
}

// passing the message (guess) 
function displayGuess(guess) 
{
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;   // gave spacing -> so that its not  
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// takes message from user
function displayMessage(message) 
{
  lowOrHi.innerHTML = `<h2>${message}</h2>`;     // printing
}

// for ending the game

/* make a button in html */

function endGame() 
{
    // clean the userInput -> input given by the user
  userInput.value = '';

//   so that no more input can be taken

/* setAttribute -> {key,value} -> pair */
  userInput.setAttribute('disabled', '');

//   
  p.classList.add('button');

//   taking paragraph and printing
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

//   appending paragraph
  startOver.appendChild(p);

//   
  playGame = false;
  newGame();
}

// for starting newGame -> if onegame ends
function newGame() {


    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {

        // take random number
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;

    // removing attributes =>'disabled'
    userInput.removeAttribute('disabled');
    // removing child
    startOver.removeChild(p);

    playGame = true;
  });
}

