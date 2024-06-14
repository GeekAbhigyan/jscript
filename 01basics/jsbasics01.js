const accountId = 123453;
let accountEmail = "abhi@google.com";
var accountpassword ="1234";
accountCity= "jaipur";

// sometimes a variable is declared without any keyword


/* 
prefer not to use var because of issue in 
scope and functional scope
*/


// accountId = 3211; // const cant be changed

console.log(accountId);
console.table([accountCity,accountEmail,accountId,accountpassword]);

/* when some variable is declared without stating the value 
 then it returns the value of "undefined" */