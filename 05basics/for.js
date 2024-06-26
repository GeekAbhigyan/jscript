const myObj = {
    name: 'abhi',
    class : 10,
    section: 'A'

}

// for of objects ke liye kaam nahi aata hai 

// issliye objects ke liye for in loop le ke aate hain 

for (const key in myObj) {
    console.log(`${key} for the ${myObj[key]}`);
}
const pro = ['abhi','gyan','agastya'];

for (const key in pro) {
    
    console.log(key)
    
}

// arrays ki keys 0 se start hoti hai aur by default numbers hi hor=ti hai 
// for in se map pe itration nahi kiya ja sakta hai 

