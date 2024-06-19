// array -> object , reference type ,

const arr = [1,2,3,"abhi",null,undefined];
console.log(arr[5]);

// arrays make shallow copy when copies 
// deep copies do not share the same references

const myarr= new Array(1,2,3,4,5);
console.log(myarr);

// arrays methode 

arr.push(6);
console.log(arr);
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr.includes(3));
console.log(arr.indexOf(6));
const newarr = arr.join();
console.log(newarr);

//slice -> return sa copy of section of the array
//splice -> manipuates the orignal array

console.log('A',myarr);

const myarr1= myarr.slice(1,3);
console.log(myarr1);
console.log('B',myarr);

const myarr2= myarr.splice(1,3);
console.log(myarr);
console.log('c',myarr)