//dates

// date is an `object` in javascript 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let mycrDate = new Date(2023 ,0,23);
console.log(mycrDate.toDateString());

let mytimestamp= Date.now()
console.log(mytimestamp);

// convert my date to the numerical date 
console.log(mycrDate.getTime());

console.log(Math.floor(Date.now()/1000));

mycrDate.toLocaleString('default',{
    weekday : "long",
    
})