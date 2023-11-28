// shopping cart wagere mein bohot use hota hai
// isme apneko accumulator milta hai and ek current value
// accumulator ek khali empty variable diya jata hai
// so jo bhi ham initial value dete hai first time to wo accummulator mein chali jati hai
// dusri baar result wala value accumulator mein chala jata hai
// since 1st time accumulator ko malum nahi konsi value leni hai isliye wo initial value
// ko use karte hai
// , ke baad jo use kiya wo automatic accumulator ko assign hojayega as initial value
// 
const myNums=[1,2,3,4,5];
const myTotal=myNums.reduce((acc,curr)=>{
    console.log(`acc: ${acc} and current value : ${curr}`);
    return acc+curr;
},0)
console.log(myTotal)
const courses=[
{
    course_name:"java dev",
    price:2999
},
{   
    course_name:"dsa with cpp",
    price:4199
},
{
    course_name:"frontend dev",
    price:3499
}
];
const totalPrice=courses.reduce((acc,items)=>{
    return acc+items.price;
},0);
console.log(totalPrice);