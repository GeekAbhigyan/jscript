const mynums = [1,2,3,4,5,6,7]

const mytotal=mynums.reduce((acc,curr)=> acc + curr,0)

// console.log(mytotal);


//reduce keyword

// used in adding 

// function keyword hata kar =>
// {} hatane se return keyword aa jaye 

const shoppingCart = [
    {
        item : "js",
        price :99 ,
    },
    {
        item : "js",
        price :99 ,
    },
    {
        item : "js",
        price :99 ,
    },
    {
        item : "js",
        price :99 ,
    }
]

const total = shoppingCart.reduce((acc,item)=> item.price+acc,0)
console.log(total);

// shpopping cart me use hota hai 