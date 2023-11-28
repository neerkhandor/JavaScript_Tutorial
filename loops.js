// loops ko iterators bhi bolte hai
// there are various ways to perform loop

for (let i = 0; i < 10; i++) {
    const element =i;
    console.log(element);
}
let  myArr=[1,4,6,7];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}
// kahibaar kya hota hai ke database se kuch value aagayi to baadme uska iteration stop karna hota hai
// aisa situation mein we can use break
// break sidha scope ke bahar fek deta hai
// continue particular case ko skip/ignore kar deta hai

console.log("break")
for(let i=0;i<5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}
console.log("continue")
for(let i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}


// while loop
console.log("while loop")
let i=0;
while(i<10){
    console.log(`value of index is ${i+2}`);
    i++;
}
let arr=["flash","superman","batman"];
let index=0;
while(index<arr.length){
    console.log(arr[index]);
    index++;
}
// kaam pehle condition checking baadme
let score=11;
do{
    console.log(score);
    score++;
}while(score<=10)

