// document.addEventListener('DOMContentLoaded',function(){
//     document.body.addEventListener('click',function(){
//         document.getElementById('welcomepage').style.display='none';
//         document.getElementById('parent').style.display='block';
//     });
// });
// src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
var typed= new Typed("#autotype",
{
strings : ["front-end developer","programmer","Designer","App-developer"],
typeSpeed:100,
backSpeed:100,
loop:true
})
let temp=1
let buton=document.getElementById("buton")
let prodiv=document.getElementById("project-div")
buton.addEventListener("click",()=>{
    let pro1=document.getElementById("pro1")
    let pro2=document.getElementById("project2")
    let pro3=document.getElementById("project3")

if(temp==1){
pro1.style.display="none"
pro2.style.display="block"
pro3.style.display="none"
temp=2
}
else if(temp==2){
    pro1.style.display="none"
    pro2.style.display="none"
    pro3.style.display="block"
    temp=3  
}
else if(temp==3){
    pro1.style.display="block"
    pro2.style.display="none"
    pro3.style.display="none"
    temp=1
}
let prohead=document.getElementById("prohead")
prohead.textContent=`In page ${temp} /3`
})


let buton2=document.getElementById("buton2")
buton2.addEventListener("click",()=>{
    let pro1=document.getElementById("pro1")
    let pro2=document.getElementById("project2")
    let pro3=document.getElementById("project3")

if(temp==1){
pro1.style.display="none"
pro2.style.display="none"
pro3.style.display="block"
temp=3
}
else if(temp==3){
    pro1.style.display="none"
    pro2.style.display="block"
    pro3.style.display="none"
    temp=2
}
else if(temp==2){
    pro1.style.display="block"
    pro2.style.display="none"
    pro3.style.display="none"
    temp=1
    
}
let prohead=document.getElementById("prohead")
prohead.textContent=`In page ${temp} /3`
})
let prohead=document.getElementById("prohead")
prohead.textContent=`In page ${temp} /3`
