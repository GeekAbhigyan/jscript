const userMail= 'abhigyan.ai';

if (userMail){
    console.log('got an email')
}
else{
        console.log(' not got an email')
    }
    
   // false , 0, -0,BigInt 0n ,"",null,undefined,NaN


   // truthy, "0" , "false" ," " ,[],{}, function(){}



   
   const emptyObj ={}
   if (Object.keys(emptyObj)==0){
    console.log('ooooooo');
   }

   // nullish coalesence operator

   let val1;
//    val1 = 5 ?? 10;

val1 = null ?? 10 ;
console.log(val1)

// teranry operator

// condition ? true : false 

const iceTeaPrice = 100;

iceTeaPrice>1000 ? console.log('okk') : console.log('not ok')
