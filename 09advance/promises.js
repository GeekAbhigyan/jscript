fetch('https://something.com').then().catch().finally();


// creation of promise 
const promiseone = new Promise(function(resolve ,reject){
    //do an async task
    //db calls ,cryptography

    setTimeout(function(){
        console.log('Async task is completed')
        resolve();
    },1000)
  
});


// consume the [promise]

promiseone.then(function(){
    console.log("promise consumed");
})


// dono task eek saath hi ho raha hai 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async2 resolved");
})

const promisethree= new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve({username:"chai", email:"chai@example.com"})

                // jo bhi data resolve me pass karenge wo hum logo ko 
                // then ke function me mil jayewga 

        },1000)



})

promisethree.then(function(user){
        console.log(user);
})


const promisefour = new Promise(function(resolve,reject){

    
    setTimeout(function(){
        let error = true;

        if (!error){
            resolve({username:"hitesh", password:"1234"})
        }
        else {
            reject('ERROR:Something went wrong')
        }

    },1000)

})


promisefour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("promise is either resolved or rejected")

})

const promisefive = new Promise ((resolve,reject)=>{
    setTimeout(function(){
        let error = true;

        if (!error){
            resolve({username:"javascript", password:"1234"})
        }
        else {
            reject('ERROR:javascript went wrong')
        }

    },1000)
  
  
})

async function consumepromisefive(){
   try {
    const response = await promisefive
    console.log(response);
    
   } catch (error) {
    console.log("error")
   }
}

consumepromisefive()

async function getAllUsers(){
    const response = await fetch()
}