# project related to dom

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 :- color selector

```javascript

console.log("abhigyan");


const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body");

buttons.forEach(function(button){
  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    
    if (e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
    
 });
  
})


```
## project2 :- BMI calculator

```javascript

const form = document.querySelector('form');

// this usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    
}



});


```
## project 3 :- local clock

```javascript
const colck = document.getElementById("#clock");

let date = new Date()
console.log(date);

setInterval(function(){
  let date = new Date()
console.log(date);
clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## project 4 :- guess the number

```javascript
let randomNum = parseInt(Math.random() * 100 +1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHi");
const startOver =document.querySelector(".resultParas");


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
   submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess =   parseInt(userInput.value);
    validateGuess(guess);
   })

}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number");
  }
  else if (guess<1){
    alert("number is less than 1")
  }
  else if (guess>100){
    alert("number is greater than 100")
  }
  else {
    prevGuess.push(guess);
    if (numGuess >= 11){
      displayGuess(guess);
      displayMessage(`game is over.random number was ${randomNum}`);
      endGame();
    }

    else {
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess){

  if (guess===randomNum){
     displayMessage("you guessed it right");
     endGame(); 
  }
  else if (guess < randomNum){
      displayMessage("number is too low");

  }
  else if (guess>randomNum){
    displayMessage("number is too high");
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML =`${11-numGuess}` 
}

function displayMessage(message){
  lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value ='';
  userInput.setAttribute(`disabled`,'');
  // p.classlist.add('button');
  p.innerHTML= `<h2 id = "newGame">Start New Game</h2>`;
  startOver.append(p);
  playGame = false;
  NewGame()
}

function NewGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNum = parseInt(Math.random() * 100 +1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML =`${11-numGuess}` ;
    userInput.removeAttribute('disable');
    startOver.removeChild(p);
    
    
    playGame = true;
  })
}

```

### issme jo hai eo endgeme wale function me wo add button kaam nahi kar raha hai 

### look into the matter at the time of revision 