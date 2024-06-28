const coding = ['js','ruby','java','python','cpp'];


const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values);

//for ech does not return any value 



//filter use kar ke 

const mynum =[1,2,3,4,5,6,7,8,9,10];
const newnum = mynum.filter((num)=>{
    return num>4
})
console.log(newnum);


// for each se hi return karna hai '

const num=[];

mynum.forEach((item)=>{
    if (item>4){
        num.push(item)
    }
})

//logic lagana pada 

