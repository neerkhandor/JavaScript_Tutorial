// filter fn bhi callback fn hi chahiye
// filter mein ham ek condition dete hai jahape wo cond satisfy hojayegi wo add hoga baaki ke nahi honge
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter( (num) => num>4 )
console.log(newNums);

const newNum=myNums.filter((num)=>{
    return num>4;
})
console.log(newNum);

const newArr=[];
myNums.forEach((val)=>{
    if(val>4){
        newArr.push(val);
    }
})
console.log(newArr);