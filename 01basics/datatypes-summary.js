/* datatypes are differentiated on the basis in which they are 
the data is stored and fetched*/

//primitive and non primitive 
// primitive -> call by value types 
// non-primitive -> call by reference 

// 7 primitive data types : string , number , boolean , null , undefined , symbol , bigint 

// reference : array, objects , functions 

// javascrivt is dynamic typed language 

//symbol -> uniqueness 
const id = Symbol('123');
const anothid = Symbol('123');
// different datatypes 
console.log (id === anothid);

const bigNumber = 23456789012345678901234567890n;

// postfix at the end of number is joined for the BIGINT;

//non primitive type 

let heroes = ["shaktiman","naagraj","doga"];// arrays 
//objects
let myObj = {
    name : "abhi",
    age : 22,
    height : 173
}

let myfunction = function(){
 console.log("hello world");
}

console.log(typeof bigNumber);

 /*************************************************************** */


// stack -> primitive 

// heap -> non primitive 






