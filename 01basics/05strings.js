let names ='abhigyan';
let age = 23;

// console.log(names + age);

console.log(`helo my name is ${names}.
    and my aage is ${age}`);

const good = new String(`abhigyan`);
console.log(good[3]);

console.log(names[2]);
console.log(names.toLocaleUpperCase());
console.log(names.charAt(3));
console.log(names.indexOf('i'))

const newstr = names.substring(4,10);
console.log(newstr);

// slice me neg value dene se wo piche se suru kar deta hai 
// jabki substring me aaisa nahi hota hai 
const anothstr = names.slice(-1,5);

const newstring = "   hitesh     ";

console.log(newstring);
console.log(newstring.trim());

// replace 

const url = "https:/goo%gle.com"
console.log(url);
console.log(url.replace('%','-'));

// includes

console.log(url.includes('.com'))
console.log(url.includes('.etm'))

//split-> splits the string on the basic of given character

console.log(url.split('%'));
// ans ->   [ 'https:/goo', 'gle.com' ]


