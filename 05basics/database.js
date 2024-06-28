const books = [{
    title :"book 1",
    genre :"fic",
    launch:2004

},{
    title :"book 2",
    genre :"his",
    launch:2001
},{
     title :"book 3",
    genre :"fic",
    launch:2002

},{
    title :"book 4",
    genre :"his",
    launch:2003

}]

const user = books.filter((bk)=>{return bk.launch >=2003 && bk.genre === "his"})

console.log(user)