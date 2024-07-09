fetch('https://something.com').then().catch().finally();


// creation of promise 
const promiseone = new Promise(function(resolve ,reject){
    //do an async task
    //db calls ,cryptography

    setTimeout(function(){
        console.log('Async task is completed');
    },1000)
});


