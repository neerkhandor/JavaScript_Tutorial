/*
{} braces ko hi scope bolte hai scope ki dikkat isme hi aati hai
if ke andar jo bhi likha hai wo hai block scope
if ke bahar jobhi likha wo hai global scope
windows mein jab ham global scope check karte hai and jab ham vs jaise environment mein check karenge tab
scope alag hota hai 
*/ 

// let a=12;
// const b=14;
// var c=16;
let a=100;
if(true){
    let a=12;
    const b=14;
    var c=16;
    // console.log(`inside local scope a value: `,{a}); this will return as an object
}

// console.log(a); this will throw an error as it is accessed outside its block
// console.log(b); this will throw an error as it is accessed outside its block
// a=120;this is possible since let can be updated
console.log("outside local scope a value",a);
// console.log(c);this is not a good scope suppose another programmer is working on this code and he also declared
// the variable with the same name than he will have lot of problem debugging it cause that if might be
// imported from some different file which he might not know so it is a good practice to declare the 
// variable as let or const
// if we will have future requirements to update the variable then we will declare it let
// and if we dont want to update the value once declared than we will use const