const clock=document.getElementById('clock');
// console.log(date.toLocaleTimeString())
// setInterval -> js ke events handle karta hai
// ye apko ek method de deta hai and aap interval bata dijiye ki 
// kitne interval ke baad continuous run karta jau
setInterval(function (){
    let date=new Date();
    console.log(date.toLocaleDateString)
    // clock.innerHTML=date.toLocaleDateString();
    clock.innerHTML=date.toLocaleTimeString();
},1000);