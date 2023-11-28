// __proto__ is used to give reference
// kisi aur ki properties ko access karna is prototypal inheritance
// react ke andar call,bind bohot use hota tha initially
// sabse bottom mein hamare paas hai gec
// reference hold karneke liye mathod is .call
// wo call to hua hai but kuch kam ka call nahi ho raha hai
// wo outer function tak pohcha hi nahi so hame uska reference hold karna padta hai
// and this is done using .call() method
// apna this de diya to 1st parameter this pass karta hu
// Call -> current execution context kisi aur function ko pass kar deta hai

// constructor kab call hota hai jaise hi class se object initialize hoga tabhi
class User{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }
    encryptPassword(){
        return `${this.pass}abc`;
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("neer","neer123@example.com",123);
console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUserName())

// inheritance

class Person{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends Person{
    constructor(username,email,pass){
        super(username);
        this.email=email;
        this.pass=pass;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const newUser=new Teacher('Neer','neer@example.com',"123");
newUser.addCourse();
newUser.logMe();
const newUser1=new Person('Vansh')
newUser1.logMe();
// newUser1.addCourse();//gives an error
console.log(newUser instanceof Teacher)
console.log(newUser instanceof Person)
// console.log(newUser instanceof newUser1)//TypeError: Right-hand side of 'instanceof' is not callable
console.log(newUser1 instanceof Person)
console.log(newUser1 instanceof Teacher)
// console.log(newUser1 instanceof newUser);