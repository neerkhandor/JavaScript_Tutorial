// prototypes mein forEach present hai ye ek loop ka hi parameter hai jo bydefault hi inject kiya hai
// kyuki sabko pata hai arrays aayenge to uspe loop to lagana hi padega
// forEach higher order funtion hai 
// .prototype lagane ki jarurat nahi hai to uska direct access milta hai
// isko ek callback fn chahiye call back fn kuch nahi bas normal fn hi hai bas inka naam nahi hota
// since wo array pe laga hai to ye loop itna smart hai ke array ke har value pe jaayega
// so ham val ya kuch bhi ek paramter paas karenge jo ki iterate karne mein helpful hoga

const languages=["cpp","java","python"];
languages.forEach( function (val){
    console.log(val);
})
languages.forEach( (val) =>{
    console.log(val)
})
function printMe(val){
    console.log(val);
}
//yahape ham reference de rahe hai yahi pe execute nahi kardena
languages.forEach(printMe);

// iske paas aur bhi parameter bhi hota hai
// index bhi aata hai and pura array ka access bhi hota hai
languages.forEach( (val,ind,arr) =>{
    console.log(`${val} , ${ind} , ${arr}`);
})
// from the below example it is clear that first parameter is the value 2nd  is index and third is whole array
languages.forEach( (ind,val) =>{
    console.log(`${ind} , ${val}`);
})

// fourth parameter returns undefined
languages.forEach( (val,ind,arr,x) =>{
    console.log(`${val} , ${ind} , ${arr} ,${x}`);
})

// we initially talked about objects in arrays this is very common concept
// we can iterate through various object in array
// here every object is a key for an array
// db se jo value aati hai wo ek array ke form mein hi hoti hai and 
// har value ek object hi hota hai
const array=[
    {
        langName:"c++",
        langFileName:".cpp"
    },
    {
        langName:"java",
        langFileName:".java"
    },
    {
        langName:"python",
        langFileName:".py"
    },
    {
        langName:"javascript",
        langFileName:".js"
    }
];
// idhar items ek pure object ko represent karta hai and using dot ham uske saare keys ko access kar sakta hai
// array mein object ka access bohot easily access karliya
array.forEach( (items)=>{
    console.log(`${items.langName} -> ${items.langFileName}`)
} )
// yahape to bas 2 hi chize hai obj ke andar but ye majorly jab ham database se fetch karta hai
// tabhi hame db se ek array aata hai usme mobile name,pricing ,buy link ye sab chiz leke
// hamne webpage pe inject kar diya


// forEach loop return kya karta hai ->undefined
// isne return kuch nahi kiya so forEach loop return kuch nahi karta
// so jo chize jaha hame kuch conditionally check karna ho ya kuch return karna ho to wahape 
// ham forEach use nahi karte
const coding=["js","cpp","python"];
const values=coding.forEach((val)=>{
    console.log(val);
})
console.log(values);
coding.forEach((val)=>{
    // error jump target statement cannot cross function boundary
    // if(val=="cpp"){
    //     continue;
    // } 
    
    console.log(val);
})