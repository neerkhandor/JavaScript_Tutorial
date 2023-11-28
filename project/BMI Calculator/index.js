// const height=document.getElementById('height')
// const weight=document.getElementById('weight') this use case will give empty value
// we want value of weight and height after they are inputted by user
// but if we declare outside event then it will store default empty value
// if you are using form for event listening than you have to use submit
// but if you are using id of the button and targeting that button
// then you can even use click event listener
const btn=document.getElementById('btn')
const form=document.querySelector('form')
btn.addEventListener('click',function(e){
    e.preventDefault();
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const result=document.getElementById('result');
    if(height === "" || height<=0 || isNaN(height)){
        result.innerHTML="Please Give a Valid Height";
    }
    else if(weight === "" || weight<=0 || isNaN(weight)){
        result.innerHTML="Please Give a Valid Weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        // result.innerHTML=`${bmi}`
        // console.log(`${height} ${weight} ${bmi}`)
        if(bmi<18.6){
            result.innerHTML=`<h2>Your BMI is ${bmi} --> You are Underweight</h2>`;
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML=`<h2>Your BMI is ${bmi} --> You are in a Normal Weight Category</h2>`;
        }
        else{
            result.innerHTML=`<h2>Your BMI is ${bmi} --> You are Overweight </h2>`;
        }
    }
})

