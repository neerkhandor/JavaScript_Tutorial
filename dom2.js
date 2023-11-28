const parent=document.querySelector('.parent')
console.log(parent)
// this provides an HTML Collection
// this is a very imp property
console.log(parent.children)
console.log(parent.children[1].innerHTML)
console.log("printing")
for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
}
console.log(parent.firstElementChild.innerHTML)
console.log(parent.lastElementChild.innerHTML)
// Nodelist ya child nodes pura ek complex tree structure
const dayOne=document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextSibling)
console.log(dayOne.nextElementSibling.innerHTML);
console.log("Nodes : ",parent.childNodes)

// creating new child
const div=document.createElement('div');
div.className='main'
div.id=Math.round(Math.random()*10+1)
div.innerHTML="<h1>chai aur code</h1>";
// const addText=document.createTextNode("chai aur code");
// div.appendChild(addText)
div.style.backgroundColor="yellow";
div.style.padding="6px";
div.style.color="orange";
document.body.appendChild(div);
