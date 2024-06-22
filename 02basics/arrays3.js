const marvel =['thor','iron','spiderman'];
const dc = ['superman', 'batman','flash'];

// marvel.push(dc);

console.log(marvel);
//array lo bhi as a data le liya yaha

// console.log(marvel[3][2]);

const newarr = marvel.concat(dc);
console.log(newarr);
//concat makes a new array without disturbing both the arrays

/*spread operator*/
const allnewheroes = [...marvel,...dc];
console.log(allnewheroes);

/*  flat->    Returns a new array with all sub-array elements concatenated into it
 recursively up to the specified depth.*/

const another_array = [1,2,3,4,[1,2,3,[34]],[23,45]];
const real_another_Array = another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_Array);

console.log(Array.isArray('hitesh'));
console.log(Array.from('hitrsh'));
console.log(Array.from({name:'hitesh'}));//interesting

let score1 = 300;
let score2 = 200;
console.log(Array.of(score1,score2));