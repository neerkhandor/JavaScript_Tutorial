// a closure gives you access to an outer functions
// scope from inner function 
// closures are created every time a function is created at the 
// function creation time
// inner->reference  inner()->func call
// parent se le sakte hai and brothers mein sharing nahi hosakti hai
// chote bado se maang sakte hai but bade chotose nahi maang sakte

// Lexical Scoping
function outer(){
    let username="neer";
    function inner(){
        console.log(`inner function ${username}`)
    }
    inner();
}
outer();
// console.log(`outer function ${username}`)

// closure 
// pura ka pura func hi return kardete ho and uska 
// pura lexical scope bhi return hota hai
