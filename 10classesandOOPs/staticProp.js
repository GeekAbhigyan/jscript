class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`usernamer is ${this.username}`);
    }
   static createId(){
        return "8520";
    }
// static -> kisi ko ye function use karne se rokne ke liye 
}
const hitesh = new User("hitesh")
    // console.log( hitesh.createId());

    class Teacher extends User{
        constructor (username , email , password){
            super(username)
            this.email = email ;
            this.password = password;
         }
        }

        const iphone = new Teacher("iphone ", "i@phome.com",8520)


console.log(hitesh.logMe());


// static function uske exrends ko bhi excess nahi deta hai 