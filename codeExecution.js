// v.imp for js
// execution context and calls

// js execution context->js aapki file ko run/execute kaise karegi
// js aapke programs ko 2 phase mein run karti hai
// 1.global exec context hamesha banta hi banta hai and ye gec this variable ke andar rakh diya jata hai
// pura thread ke andar kam karta hai js single threaded hai(har chiz ek process hoti hai)
// 2.function exec context
// 3.eval exec context

// how our js code execute
// 1st memory creation phase (variables ki jagah /momory allocate ki jati hai)
// 2nd execution phase

/*
1.global exec  -->  this
2.Memory phase
    val1->undefined
    val2->undefined
    addNum-> whole definition(pura ka pura phase chala jayega)
    result1->undefined
    result2->undefined
    yaha tak jo bhi hua use kehte hai 1st cycle and ye 1st cycle hogahi hoga
3.Execution Phase(processing,execution)
    val1->10
    val2->5
    addNum ke andar kuch nahi hoga kyuki waha pe kuch exec karnekeliye hai hi nahi
    now in next line there is result1 which is calling addNum
    addNum apna alag se execution context banta hai
    jitni baar bhi function ecec hote hai utni baar ye box create hota hai
    jisme new env var + exec thread hota hai(new exec context)
    so ab addNum ke liye Memory phase and Execution phase wapas se honge
    jitni baar function likhenge utni baar ye hoga
    global to ek baar hi define hota hai so abhi jitni baar bhi function create hoga
    ab utni baar apko ek memory phase and execution phase bhi karna hai
    now we will have memory phase for that function addNum
    val1->undefined
    val2->undefined
    total->undefined

    execution context
    val1->10
    val2->5
    total->15
    total aapka wapas return hojayega to gloabal execution context
    ye jo naya exec context create hota hai wo uska kaam hone ke baad delete bhi hojata hai
    now result1 will have value 15
    result2 ke andar bhi function hai so wapas naya box naya env var + thread(kyuki thread pe to saara js ka exec hota hai)
    wapas se memory phase and exec context
    memory phase
    val1->undefined
    val2->undefined
    total->undefined
    execution context
    val1->10
    val2->2
    total->12
    total aapka wapas return hojayega to gloabal execution context
    now result1 will have value 12


*/
let val1=10;
let val2=5;
function addNum(num1,num2){
    let total=num1+num2;
    return total;
}
let result1=addNum(val1,val2);
let result2=addNum(10,2);

/*
Call Stack

global execution context to hoga hi hoga
so samjho ek function hai one() to wo call stack mein jayega and once
uska kaam hogaya wo wapas nikal jayega
call stack mein lifo naam ka concept chalta hai
suppose func1() calls func2() and func2() calls func3()
then they will enter the stack in the order func1() func2() func3()
but while going they will go in the order func3() func2() func1()

*/

// function one(){
//     console.log("one");
//     two();
// }
// function two(){
//     console.log("two");
//     three();
// }
// function three(){
//     console.log("three")
// }
// one()

function one(){
    two();
    console.log("one");
}
function two(){
    three();
    console.log("two");
}
function three(){
    console.log("three")
}
one()
