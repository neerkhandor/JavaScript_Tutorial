// agar hame kisi chiz ka access nahi dena hai dusre ko to ham wahape static keyword use karenge
// childs ko bhi access nahi kar sakte 
class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static createId(){
        return '123'
    }
}
const user1=new User('Neer')
// user1.createId(); throws an error
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone=new Teacher("iphone","i@phone.com");
iphone.logMe();
console.log(iphone.createId())