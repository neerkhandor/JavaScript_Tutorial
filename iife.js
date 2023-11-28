// immediately invokef function expression
// jaise hi function likha use turant execute karvadiya
// kai baar ham jabhi ham database ki alag se file rakhte hai
// tabhi hame chahiye ke jaise hi wo application start ho hamara db ka conn hojaye
// global scope ke variables pollute na hojaye so ham hamara alag se ek scope banalete hai
// aur wo immediately exec hojaye
// first code ko end karnekeliye maine semi colon explicitly lagaya

// named iife
(function chai(){
    console.log("db connected");
})();

// unnamed iife
( (name)=>{
    console.log("db2 connected");
    console.log(`hello ${name}`)
})("neer");