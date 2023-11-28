// variables pe getters and setters lagasakte hai
// getter define kiya hai to setter to use karna hi padega
// to get a value we use getter to set a value we use setter
// agar setter diya hi nahi to akele getter se value nahi aa jayegi
// yahape mujhe pass ka access nahi dena hai and usi ke liye getters and setters hota hai
// jitne bhi properties hai unke naam ke getters and setters by default ban jate hai
// we just have to use get for getter  method and set for setter method
// class ke bahar koi value get karna hai to getter 
// class ke andar koi value set karna hai to setter(koi value isme dalni padegi)
// there will be race condition for constructor and getter-setter method
// so we will use different name in setter and getter
// setters ko return nahi karte hai kabhi
// _email and _password are private property 
// ye aap hi sirf access kar sakte ho
// email is method but we dont use() because it becomes as parameter
class User{
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(val){
        this._email=val;
    }
    get pass(){
        return  `${this._pass}neer`;
    }
    set pass(value){
        this._pass=value
    }
}
const userOne=new User("neer@example.com","abc")
console.log(userOne.pass)
console.log(userOne.email)