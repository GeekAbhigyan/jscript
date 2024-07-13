class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
// "_" lagane se wo private property ban gya hai 
 
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
             this._email = value.toUpperCase();
    }
 
    get passowrd(){
        return this._password.toUpperCase();
    }
    set password(value){
             this._passowrd = value.toUpperCase();
    }
}

const hitesh = new User ("abhigyan@123.com","8520");
console.log(hitesh.password);
console.log(hitesh.email);