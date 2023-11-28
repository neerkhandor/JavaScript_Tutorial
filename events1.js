// javascript mein events usually sequencely hi run karte hai
// events major koi activity hoti hai tabhi invoke hote hai

const btn = document.getElementById('btn');
// btn.onclick=function(){
// alert('submit clicked')
// }
btn.addEventListener('click',function(){
    alert("submit2 clicked");
})

const con=document.getElementById('container')
con.addEventListener('click',(e)=>{
console.log(e)
console.log(e.target)
con.innerHTML="CLICKED"
},false)
// type,timestamp,defaultPrevented,target,toElement,srcElement, 
// clientPosition(clientX,clientY),screenX,screenY,
// altkey,ctrlkey,shiftkey,keycode,currentTarget

// Event Propogation->EVENT BUBBLING AND EVENT CAPTURE
// normally code ham event bubbling ke through karte hai
// false pass wala(inside se outside)
// when true (top se bottom) 