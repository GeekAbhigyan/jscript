// const user = {
//     username: "hitesh",
//     logincount: 8,
//     sighIn : true,

//     getUserDetails: function(){

//        // console.log(`get username: ${this.username}`)
//         console.log(this);
//     }

// }

const user2 = {
    username: "hitesh",
    logincount: 8,
    sighIn : true,

    getUserDetails: function(){

       // console.log(`get username: ${this.username}`)
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.logincount);
// console.log(user.getUserDetails());

// console.log(this);

// const promiseone = new Promise();
// const date  = new Date();

function User(userName,loginCount,isLoggenIn) {
    this.userName = userName;
    this.loginCount=loginCount;
    this.isLoggenIn=isLoggenIn;

    return this;
}

// new kwyword kyu lagate hain -> har baar ekk naya instance milta hai 
// new keyword nahi likhenge to purane wale instance ko hi overwrite kar dega 

const userOne =new User("abhigyan",10,false);
const userTwo = new User("chai Code",15,true)
console.log(userOne);
console.log(userTwo);

// new keyword likhne se naya object create hota hai 
//constructor function call hota hai new keyword se 

// this keyword uss instance me inject hota hai 


// constructer is nothing but the function user itself 