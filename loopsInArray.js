// higher order function
// for in,fro each,for of
// arrays and objects are very powerful in js
// arrays mein object bohot common scenario hai and har iteration mein object se kuch value nikalni hai
// array iterator hai uspe loop laga sakte hai
// object iterator hai uspe loop laga sakte hai
// string iterator hai uspe loop laga sakte hai
// for of loop sidha value utha ke de deta hai in array but wo object mein not iterable hota hai
// for in loop keys deta hai and wo object pe bhi work karta hai
// array ki keys index hoti hai
// array ke andar for of laga lenge 
// objects ke liye for in laga lenge
// 
const arr=[1,3,5,7,9];
// ye apne aap decide karega length wagera and koi conditions wagera daalni hi nahi padegi

for (const val of arr) {
    console.log(val);
}
const greetings="hello world";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
const myObj={
    'user':"neer",
    'sap':161,
    'age':21,
    'myFun':function(){
        console.log("loves coding")
    }
}
// for(const obj of myObj){
//     // console.log(obj);myObj is not iterable
// }


// Maps it is itself an object 
// map is similar to Array it holds key value pairs no dup value
const map =new Map();
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('in',"india")
console.log(map);

// this prints whole map
for(const key of map){
    console.log(key);
}
// but whenever we use [] we destructure it into array
// and now we can hold key and value alone
for(const [i,j] of map){
    console.log(i)
    // console.log(i,":",j);
}

const languages={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in languages){
    console.log(`${key} is shortcut for ${languages[key]}`);
}

const programming=["js","cpp","ruby","python"]
for(const key in programming){
    console.log(programming[key]);
    console.log(key);//indexes
}

// map are not iterable there are other methods to make them iterable 
// this will return nothing
for (const [key,val] in map){
    console.log(`${key} -> ${val}`);
}

