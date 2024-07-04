# project related to dom

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

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
## project2

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
