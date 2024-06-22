//const tinderUser =new Object(); // singleton object


const tinderUser = {};//non singleton object

tinderUser.name = `agastya`;
tinderUser.id = `cool`;
tinderUser.age = `23`;
tinderUser.isLoggedIn= true;

//console.log(tinderUser);

const regularuser = {
    email:`agastyaroy45@gmail.com`,
    fullname : {
        first:'Agastya',
        last:'Roy'
    }
}
console.log(regularuser.fullname.last);

// merging two objects

const obj1 = {
    1:`a`,
    2:`b`
}
const obj2 = {
    3:`c`,
    4:`d`
}
//const obj3 = {obj1,obj2}; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = Object.assign({},obj1,obj2);

// sara object first object {jo ki empty hai} ,issme jaa rha hai

console.log(obj3);

// spread operator
const obj4 = {...obj1,...obj2};
