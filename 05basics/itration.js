// for of loop 

//arrays = [""," ", "   "];

//objects = [{}, {}, {},   {    }]05

const arr = [1,2,3,4];

for (const num of arr) {

    console.log(num);
    
}

const greetings = "hello";

for (const greet of greetings) {
    console.log(`each of ${greet}`)
}

// maps 

const map = new Map();

map.set(`in`,`india`);
map.set(`us`,`usa`);

//maps set for unique values 

for (const [key,value] of map) {

    console.log(key);
    
}

const myObj = {
    name: 'abhi',
    class : 10,
    section: 'A'

}
for (const [key,value] of myObj) {
    console.log(key , ":-" ,value);      // objects are not itratable by for of
}