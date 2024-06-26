const pro = ['abhi','gyan','agastya'];

pro.forEach(function (item)  {
    console.log(item)
})

pro.forEach((item) =>{
    console.log(item);
})



function abhi(item)  {
    console.log(item)
}
pro.forEach(abhi)

// objects in arrays 

const lang = [
    {
        languageNmae : 'javascript',
        languageFileName :'js'
    },
    {
        languageNmae : 'java',
        languageFileName :'java'
    },
    {
        languageNmae : 'python',
        languageFileName :'py'
    }

]
lang.forEach( (item)=>{
    console.log(item.languageNmae ,`:`,item.languageFileName);
    
})