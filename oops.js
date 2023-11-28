// kya js mein classes hai? nahi it was introduced in 2015(es6)
// js is actually prototype based language
// classes are primarily syntactic sugar over existing prototype based inheritance mechanism
// behind the scene ab bhi prototype based hi hota hai

// OOP -> Programming Paradigm (code likhneka structure,style preference)
// Object->collection of properties and methods
// -tolowercase / promises ye sab objects hi hai
// why oop was required ? code was getting mess up it lead to problem of sphagetti code
// where kuch bhi chunk reuse nahi ho raha tha
// what is object literal ->it is literally an object
// this is an object literal
const user={
    username:"neer",
    loginCount:0,
    signedIn:true
}
// console.log(user.signedIn)
// map method to ek hi hai but wo konse array pe lagana hai wo kaise malum padega 
// wo current context ka use karta hai (this keyword)
// bahar se kuch saaman lena hoto hame batana padta hai ki ham yehi context ka saaman lena chahte hai
// new keyword is actually constructor function it allow ek hi object literal se multiple instances bana sakte hai
// value over write karenge to bohot problem hoga is liye new keyword is v.imp
// constructor fucntion har time ek naya instance deta hai ek nayi copy deta hai
// uss copy ke saath jo bhi kheloge wo aap ke havale hai
// originally aur dusre usse affect nahi hote hai
// just mujhe naya instance dedo
// ṣabke paas apna khudka instance hai
// this return hota hi hame explicitly return karneki jarurat nahi hai
// new keyword is used to create new context
// this.username ye hamara variable hai and username ye jo ham pass kar rahe hai wo hai
// this kya hai ek object hai to jo bhi hai this. karte jao
// return this karne se hamne object hai wo pass on kardiya and wo puri values ko use kar sakta hai
// isliye ham promise mein hamesha new keywors use karte hai
// new keyword likh ke karenge to faltu ka bhi koi mess nahi aata hamare paas jo actual 
// mein hai object mein wohi aata hai
// 1st new keyword likhte hi ek empty object create hojata hai
// 2nd 1 constructor function call hota hai new keyword ke karan
// 3rd this keyword saare arguments inject kardeta hai
// 4th step mein function mein arguments mil jata hai

// constructor fucntion references hoti hai khudike baare mein
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`WELCOME ${this.username}`)
    }
    // return this;
}
const userOne=new User("neer",4,true);
// console.log(userOne.constructor);
// ye values overwrite kar dega (if i dont use new keyword)
const userTwo=new User("vansh",7,false)
// console.log(userOne);
console.log(userTwo)
