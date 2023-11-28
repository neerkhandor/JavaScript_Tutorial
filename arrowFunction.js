// es6 bought arrowFunction
// this keyword current context batata hai
// aap agar current context ko refer karte ho to wo ham this ke dwara karte hai
// hamne value ko hard code nahi ki thi hamne kya bola ke jo wo currrent 
// context(current variables jo hai uski baat karta hai)
// mein jo value ho wo print ho
// node environment mein current context empty object ko refer karta hai
// but browser mein gloabal object window object hai(tabhi to ham saare event 
// capture kar paate hai click,formSubmit etc...)
// initailly js ko exec karne ka ek hi method tha browser ke andar 
// so jo engine tha js ko run karnekeliye wo sirf browser ke andar hi paya jata tha
// so hamne us engine ko nikala and sab nekuch alag alag naam diya kuchne 
// node,bun,dino so abhi hamare paas engine stand alone hai

// ye jo this ka context hai wo sirf objects pe hi kaam karta hai
// function mein kaam nahi karta undefined aata hai 
// but agar ham function ke andar this ka scope
// dekhte hai to wo bohot sari chize provide karta hai naki empty object 
const user={
    username:"neer",
    price:999,
    welcomeMessage: function(){
        // this will throw error username is not defined
        // console.log(`${username} , welcome to website`);
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username="vansh";  //yaha par context change hogaya (value change hogayi)
user.welcomeMessage();
console.log("inside node env this ka gloabal val")
console.log(this);

function chai(){
    const username="neer"
    console.log(this.username);//undefined
}
chai()
const chaiInVariable=function(){
    const username="neer"
    console.log(this.username);//undefined
}
chaiInVariable()

const chaiArrow = () =>{
    const username="neer";
    console.log(this.username);//undefined
    console.log(this);//empty object
}
chaiArrow()
// basic arrow function
// {} braces use hua to return statement likhna hi padega
const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(4,7));

// implicit return function -> ham yaha pe arrows hata dete hai and return type bhi hatadete hai

const add1 = (num1,num2) => num1+num2;
console.log(add1(3,4));

// () braces use hua to return statement nahi likhna padega
const add = (num1,num2) => (num1+num2);
console.log(add(3,4));
// ye braces ka bhi ek use hai jab hame object return karna ho tab hame 
// {} ye braces use karne padte hai but hame to return type nahi dena hai explicitly
// to hame undefined milta hai but agar ham () isme wrap karke object ko return kare
// to hame wo object milta hai

// when we are passing something as parameter than it is returning the object
// when we are not passing anything then it returns function
const user1 = (num1) => ({username:"neer"});
console.log(user1(5))

