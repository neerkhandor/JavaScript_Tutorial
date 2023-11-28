// api kuch nahi bas baat karneka madhyam hai
// java ko js mein js ko ruby mein (kiska frontend x mein ho and backend y mein but api ke through communication between this two is possible)
// api is talking lang between two system
// console ,document js ka part nahi hai ye sab apis hai
// actually mein console.log debugging tool hai,browser ka dev tool hai
// ye actually runtime inject karta hai
// Nodejs is implementation of V8 Engine v8 is written in cpp
// 5 letter ka word hai fetch wo behind the scene bohot kaam karta hai
// zyadatar ham promises ko consume hi karte hai
// A promise is an object representing the eventual completion or failure of an 
// asynchronous operation
// js mein using new keyword i can create instance of object
// promise hame direct object milta hai
// promises ek tarah ka callback leta hai
// promise also helps in reducing callback hell
// this function has two part resolve and reject
// what are async tasks : file handling ,db calls,cryptogrpahy related task,network call related task
// to consume promise we use .then and this .then have direct relation with resolve
// .then ke andar hame ek call back milta hai
// to connect .then with resolve we have to call a method resolve()
// there is no need to store promise in a variable

const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log('Async task Completed');
        resolve();
    },1000)
});
// console.log(promiseOne);
promiseOne.then(()=>{
    console.log('promise consumed')
})


// promise can be handled using async await or .then() .catch()
// microtask queue  -> vip line
