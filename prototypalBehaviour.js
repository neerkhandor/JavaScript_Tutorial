// js is prototypal language
// matlab js haar nahi maanti if in case usko koi chiz nahi mili to wo ek level upar 
// jaayegi aur uparnjayegi parents ko access karegi ,grandparents ko access karegi jab tak use null value na mil jaye
// arrow function mein this ka access nahi hota kyuki prototype waha pe aajata hai
// prototype hi aapko this ka access de raha hai,new keyword ka access de raha hai
// classes mili hai wo bhi prototype ke karan and jo prototypal inheritance mila
// hai wo bhi issi ke karan se mila hai
// yaha nahi mila to aur upar waha nahi mila to aur uppar
// js mein sab kuch object hi hai then wo array hai ya string jo prop object ke paas
// available hai wo string and array ko bhi available hai
// object ka prototype null hota hai
// function is also object
// this ->jisne bhi bulaya uska kaam kardo
function multiply(num){
    return num*5;
}
console.log(multiply(5));
multiply.power=2
console.log(multiply.power);
console.log(multiply.prototype)

function createUser(username,score){
    this.username=username;
    this.score=score;
}
