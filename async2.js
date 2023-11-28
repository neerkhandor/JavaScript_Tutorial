let intervalId;
document.querySelector('#start').addEventListener('click',()=>{
    intervalId=setInterval(()=>{
        const date=new Date()
        console.log(`hi neer ${date.toLocaleTimeString()}`)
    },2000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    console.log("stopped");
})