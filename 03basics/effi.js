//immediately invoked function expression
 // named effi 
  (function chai (){
    console.log(`DB connected`)
  })(); // code end karne ke liye semicolon jaroori  jab do effi ho to 

  // jo function immediately execute ho jaye 
  // global scope ke pollution se problem hoti hai kai baaar jiska soln effi hai 

  
  
  
  //unnamed effi
  ((name)=>{

    console.log(`db connected to ${name}`)

  })(`abhi`)