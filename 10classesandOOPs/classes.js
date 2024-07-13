//ES6

const { LONG_BLOB } = require("mysql/lib/protocol/constants/types");

class User {
    constructor (username , email , password){
       this.username = username ;
       this.email = email ;
       this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc` 
    }
    changeUseranme(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai" ,"chai@gmail.com","8520");


console.log(chai.encryptPassword());
console.log(chai.changeUseranme());

function user(username , email , password){
    this.username = username ;
    this.email = email ;
    this.password = password;
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc` 
}
user.prototype.changeUseranme = function(){
    return `${this.username.toUpperCase()}` 
}
const tea  = new User("tea" ,"tea@gmail.com","tea8520");

console.log(tea.encryptPassword());
console.log(tea.changeUseranme());
