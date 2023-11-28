const container=document.querySelectorAll('.container')
const body=document.querySelector('body');
container.forEach((con)=>{
    con.style.backgroundColor=con.id;
    con.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === "blue"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === "red"){
            body.style.backgroundColor=e.target.id;   
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === "orange"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === "green"){
            body.style.backgroundColor=e.target.id;
        }
    }) 
})

// jab bhi aap koi event ko click karte hai tab us activity
// ko function me le sakte hai and uske saath kuch activity kar sakte hai
// e.target se malum padta hai event kaha se aaraha hai


