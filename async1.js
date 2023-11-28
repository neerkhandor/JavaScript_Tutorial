// setTimeout,setTime interval ye sab browser based api pe work karte hai
// setTimeout method hai jo api ko bhi call karta hai
// ye core js ke part nahi ye window ke through milte hai

// setTimeout ye sab async code ka hi part hai
// js by default async nahi hoti usse banana padta hai async by using some api like setTimeout,etc
// default js is sync
// iss liya it is at many places return js is async hai wo asyn hai kyuki wo apis uske saath mein aa rahi hai
// isliya to aap async request maar paa rahe ho
// complete js ka runtime wo asyn kaam karta hai but jo default js ka engine hai wo sirf sync hi kaam karta hai
// ek hi thread pe chal raha hai that is great

// handler callback function sab kuch ek hi hai
// after 5 sec i will exec this once
setTimeout(()=>{
    console.log("Neer")
},5000)

// after 2 sec i will keep doing this thing again and again
// setInterval mein 3rd parameter bhi hota hai 
// setInterval(()=>{
//     console.log("vansh")
// },2000)

const sayName=function(){
    console.log("mummy:jigna");
}

setTimeout(sayName,2000);

const changeText=function(){
    document.querySelector('h1').innerHTML="Best Js Series";
}
const changeMe=setTimeout(changeText,1000)
// to stop the exec of setTimeout we have clearTimeout but this clearTimeout requires reference aap konse wale setTimeout ko hatana chahte ho
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
})

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
})
const changeMe2=setInterval(()=>{
    document.querySelector('h1').innerHTML="Best Js Series Enjoying It !!!";
},5000)
document.querySelector('#stop1').addEventListener('click',function(){
    clearInterval(changeMe2);
    console.log("stopped1");
})
