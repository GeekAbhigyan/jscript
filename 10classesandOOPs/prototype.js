let myName ="hitesh     ";

console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heroPower = {

    thor : "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
    console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")
}
// heroPower.hitesh();
myHeroes.hitesh();

//inheritence 

const User = {
    name : "chai",
    email : "chai@google.com",
}

const teacher ={
    makeVideo : true,
}

const TeachingSupport ={
    isAvailable: false,
}

const TASupport ={
    makeAssignment : "js assignment",
    fulltime: true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = User

// modern syntax 

Object.setPrototypeOf(TeachingSupport,teacher);

let anotherusername = "chai          ";

String.prototype.truelength = function(){
    console.log(`${this.name}`)
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`)

}
anotherusername.truelength();