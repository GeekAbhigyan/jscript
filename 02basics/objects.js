//symbol ko symbol ki tahah use karne ke liye square braket ke saath use karn padta hai 

const mysym = Symbol('key1');
//object literals 
const user = {
    name_1 :"abhigyan",
    "full name" : `abhigyan singh`,
    [mysym] : 'mysymbol',
    age : 23,
    gender : 'male',
    email : `singhdefinite12@gmail.com`
}
console.log(user.age);
//square notation
console.log(user['name_1']);
console.log(user['full name']);
console.log(user[mysym]);


// freeze command 

// Object.freeze(user);
user.email = `abhigyansingh23@gmail.com`

console.log(user.email);

user.tele = function(){
    console.log(`abhigyan function`);
}

user.names = function(){
    console.log(`hello js user,${this.name_1}`); // this naya use hua hai 
}
console.log(user.tele); //function anonymous 
console.log(user.tele());// actually prints the function
console.log(user.names()); // 


// undefines kyu aa raha hai ??

