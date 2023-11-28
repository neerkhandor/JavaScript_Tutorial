// map basically koi operation wagera perform karne keliye use hota hai
// filter alag hai wo true false type return karta hai
const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.map((num)=> num+10);
// console.log(newNums);

// chaining is possible where  we can use various 
const newNum=myNums
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=> num>=40)
console.log(newNum)