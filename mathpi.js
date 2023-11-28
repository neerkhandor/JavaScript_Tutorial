// objects pe iterate karna hai to Object.entries(chai)
// object ki entries leke iterate kar sakte hai
// enumeration matlab aap loop laga sakte ho
// object mein agar function daaloge to code fatega
const myObj={
    username:"neer"
}
// shows hidden properties of object
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor) 
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)

const chai={
    name:"masala",
    chai:100,
    isAvailable:true,
    orderChai:function(){
        console.log("order chai")
    }
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{
  value: 'masala',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}