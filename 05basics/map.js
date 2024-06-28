const mynum = [1,2,3,4,5,6,7]

const nums =mynum.map((num)=> num + 10)
console.log(nums);

const newnum = mynum
                    .map((num)=>num *10)
                    .map((item)=> item +1 )
                    .filter ((num)=> num >40)
console.log(newnum);

// two maps in a row => chaining 