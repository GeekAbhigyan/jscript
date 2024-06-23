// let sum = function(a,b){
//     console.log(a+b);
// }

// sum(a+b);

function saymyname(){
    console.log("abhigyan")
}

//saymyname();
function add(num1,num2){  // num1 amd num2 are called parameters 
    console.log(num1+num2);
}

function add2(num1,num2){  // num1 amd num2 are called parameters 
    return num1+num2;
}

add(3,null); // 3,4 are call arguments 

const result = add2(5,6);
console.log(result);

function loginUserMessage (username= 'sam'){ // sam is the default value
    if (username === undefined ){
        console.log(`please enter a username`);
        return;
    }
    return ` ${username} just logged in `;
}

console.log(loginUserMessage('abhigyan'));

// jab arguements pass nahi hoga tab undefined aayega 


// jab no of arguments defined nahi ho+

//...  -> rest operator 

function calculateCartPrice (val1,val3,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));


//objects in function

const user ={

    username:'hitesh',
    price:199

}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} , price is ${anyobject.price}`)

}

handleObject(user)

handleObject({
    username:'sam',
    price:1234
})

///arrays pass karna hai 

const mynewarray = [200,300,400];

function retuensecondvalue(getarray){
    return getarray[1];
}

console.log(retuensecondvalue(mynewarray));