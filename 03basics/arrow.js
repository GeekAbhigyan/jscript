const user ={

    username:'abhi',
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
    // this -> current context ko refer karta hai 


}
// user.welcomeMessage();
// user.username = `sam`;
// user.welcomeMessage();
// console.log(this);

function chai(){
    let username = `hitesh`
    console.log(this.username ); // undefined
}
chai();

//arrow function

const chai2 = () => {
    let username = `hitesh`
    console.log(this); // undefined
}
chai2();


const addtwo = (num1,num2) => {
    return num1+ num2
}

addtwo(5,6);
console.log(addtwo(5,6));


/// implecit return => return ko chor kar 
const add = (num3,num4) =>  num3 + num4 
console.log(add(1,32))