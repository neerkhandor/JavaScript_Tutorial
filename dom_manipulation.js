// document behind the scene class ko className mein karta hai
// array mein map available hota hai but nodelist and htmlCollection mein nahi hota hai
// difference between nodelist and htmlCollection
const heading=document.getElementsByClassName('heading');
heading.innerHTML="<h3>Dom Manipulation in JavaScript</h3>"
const paragraph=document.getElementById("para");
console.log(paragraph.id)
// console.log(paragraph.className)  //undefined
// setAttribute method overrides existing class so hame wapas se deni padti hai with a space
paragraph.setAttribute('class','class-para paragraph')
// isme title ka pura element store hojayega
const title=document.getElementById('title')
title.style.backgroundColor="green"
title.style.padding="10px"
title.style.borderRadius="10px"
// title.textContent --> even if something has display:hidden property than also it can 
// be seen using this
// title.innerText -->it will show the things that is displayed on web page(visible content)
// title.innerHTML --> uske andar koi html likha hoga wo bhi return hoyega
// but textContent and innerText HTML ko support nahi karte

// ye sirf 1st p tag leke aayega
// const query=document.querySelector('#para')
// const query=document.querySelector('.bg-black')
// const query=document.querySelector('p')
// understand css selectors to make it easy
// const query=document.querySelector('p:first-child')
// const query=document.querySelector('input[type="password"]')

// here even if there is one element also then also putting index in [] is necessary
// this is major difference between querySelector and querySelectorAll
const query=document.querySelectorAll('p');
query[0].style.backgroundColor='green';
// nodelist is not an array so avoid using map try going with forEach
query.forEach((p)=>{
    p.style.backgroundColor="red";
    p.style.padding="10px";
})

// this is a html collection it even does not have forEach method
// so there is only one method we have to convert it into array

const list=document.getElementsByClassName('list-items')
const newLi=Array.from(list)
newLi.forEach((li)=>{
    li.style.color="orange"
    li.style.backgroundColor="blue"
    li.style.padding="10px"
    li.style.borderRadius="5px"
    li.style.margin="3px"
})







