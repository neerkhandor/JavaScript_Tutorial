// if(condition){
// agar conditon true hogi to andar code run hoga
// agar condition false hogi to andar ka code run nahi hoga
// }
// there are cerain variable for comparison on the basis which we decide 
// whether it should go into the if block
// <,>,<=,>=,==,!=,===,!==
// === checks type as well strict checking
// else is conditional code if agar fail hua to else work karega hi

if(2=="2"){
    console.log("exec");
}
// strict check
if(2==="2"){
    console.log("exec");
}
else{
    console.log("not exec")
}
const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
if(userLoggedIn && debitCard){
    console.log("Allowed to buy course");
}
else{
    console.log("Not allowed to buy course");
}
