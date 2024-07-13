class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    
}

// extends same as prototype

class Teacher extends User{
    constructor (username , email , password){
        super(username)
        this.email = email ;
        this.password = password;
     }

     addCourse(){
        console.log(`A new course by ${this.username};`)
     }
}



const chai = new  Teacher("chai","chai@teacher.com","8520")

chai.addCourse()


const masala = new User("masalachai");
console.log(chai instanceof User);
chai.logMe()