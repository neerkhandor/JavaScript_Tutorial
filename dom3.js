// there is problem with this method here since there was just
// one element javascript so there was not much problem but when
// we have many elements then handling this becomes an issue
// because it has to traverse the whole time every new element is created
// so it leads to optimization issue
// better approach
// li create kiya usme text node append ki and sidha kaam hogaya
function addLanguage(langName){
    // 1st create list item
    // 2nd select ul and append in it so wo sab se end mein append hojayega
    const li=document.createElement('li');
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li);
}
addLanguage("python")
addLanguage("cpp")
addLanguage("java")

function optiLanguage(langName){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
optiLanguage("goLang");
const secondLang=document.querySelector('li:nth-child(2)')
// secondLang.innerHTML="mojo"
const newLi=document.createElement('li')
newLi.textContent="mojo"
secondLang.replaceWith(newLi)
// const firstLang=document.querySelector('li:nth-child(1)');
const firstLang=document.querySelector('li:first-child');
const newLi1=document.createElement('li');
newLi1.textContent="typeScript";
firstLang.replaceWith(newLi1);

const firstLanguage=document.querySelector('li:first-child');
firstLanguage.outerHTML='<li>TypeScript</li>'

// Remove
const lastLang=document.querySelector("li:last-child")
lastLang.remove()

const middleLang=document.querySelector("li:nth-child(2)")
middleLang.remove()
