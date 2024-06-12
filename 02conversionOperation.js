let score = "33b4C"
let num = "23"

console.log(typeof score)
console.log(typeof num)
let valueInNum = Number(num)

console.log(typeof valueInNum)

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0;

let isLoggenIn =1;
let booleanIsLoggedIn =Boolean(isLoggenIn);
console.log(booleanIsLoggedIn); 

// 1 => true ; 0 => false
//""=> false 
// "abhi"=> true

/* conversion to string */

let numb = 23;

let stringNumb = String(numb);
console.log(typeof stringNumb);


//**********************************operations ************* */

let value = 5;
let negVal= -value;
console.log(negVal);

console.log(2**8);//power 2^8

let str1 = "hello";
let str2 = "abhi";
let str3 = str1 + "  " +str2;
console.log(str3);

console.log("1"+ 2);
console.log(1 + "2");
//tricky
console.log("1"+2+2);
console.log(1+2+"2");



