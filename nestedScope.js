// closure is majorly asked in interview
// code line by line exec hota hai isliye jab console.log(website); ne error diya to usne two ko exec hi nahi kiya
// closure upar upar se kya hai ki andar ke function bahar ke function ke variables ko access kar sakta hai
//  //// why it is showing erroe and not printing anything although code should be working line by line 
// js mein variable bohot powerful hai wo expression ko,json value ko function ko handle kar sakta hai
// function ko kis tarah se declare kar te ho usme bhi farak padta hai
function one(){
    const username="hitesh"
    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website); website is not defined
    two();
}
// two(); two is not defined
one();

if(true){
    const user="neer";
    if(true){
        const surname=" khandor";
        console.log(user+surname);
    }
    // console.log(surname);
}
// console.log(user);

// hoisting 
console.log(addOne(5));
// console.log(addTwo(5)); Cannot access 'addTwo' before initialization
function addOne(num){
    return num+1;
}
// hamne function ko variable mein store kar liya hai so usko ham declare karne ke pehle use nahi kar sakte hai
const addTwo=function(num){
    return num+2;
}
console.log(addOne(5));
console.log(addTwo(7));
