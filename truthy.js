const usermail="neer@gmail.com"
if(usermail){
    console.log("email present");
}
else{
    console.log("email not present");
}
// here in the condition we are not comparing and just hamara paas jo string tha usko tru maan liya
// this is called truthy value
// agar usermail mein empty value hoti to wo else case mein jata kyuki "" value falsy ko represent karti hai

// Truthy Value
// other than falsy 
// "0",'false'," ",[],{},function(){}

// Falsy Value
// false,0,-0,BigInt On, "" ,null,undefined,Nan

// so for checking empty array we have to explicit check
const myArr=[];
if(myArr.length === 0){
    console.log("array is empty");
}
else{
    console.log("array is not empty");
}

const emptyObj={};
// Object.keys(objName) karne se aapko object ke keys ka array mil jata hai
// Object.keys(objName) this returns array
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}
else{
    console.log("object is not empty");
}
// interview question
console.log(false == 0);
console.log(false == '');
console.log(0 == '')

// nullish coalescence operator: based on null and undefined
// kai baar kya hota hai jab aap database se call karte hai aapko directly response nahi milta
// so chances hai apko null response mil jaye ya chances hai aapko response aaye hi na(undefined)
// so us case mein aapka pura ka pura code structure pareshan ho sakta hai
// so ye wo special case ke liye use hota hai agar null/undefined ho to uss hisab se check 
// karlena and agar value aa rahi hai to value assign karlo
// it does a safety check
// kai baar koi function 3rd party ka ho uska return value hamare control mein na ho and wo 
// return mein null ho to ham koi alag se flag value use karta hai
let val1;
val1=5??10;
console.log(val1);

val1=null??10;
console.log(val1);

val1=undefined??10;
console.log(val1);

val1=null??10??20;
console.log(val1);
// basically ye hamara call back hai ki agar error aaye to kaise handle kare

// Ternary Operator (if else ka chota version)
// Note:dont confuse with nullish coalescence operator
// condition ? true : false
const iceTea=100;
iceTea < 80 ? console.log("less than 80") : console.log("greater than 80");

