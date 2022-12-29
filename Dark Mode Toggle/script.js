let dark=false;

let darkel=document.getElementById("dark");
let bodyel=document.querySelector("body");
let buttonel=document.querySelector(".box");
let circleel=document.querySelector(".circle");

buttonel.addEventListener("click",()=>
{
    
    if(dark==false)
    {
        circleel.style.left="50px";
        dark=true;
        bodyel.style.backgroundColor="black";
    }
    else
    {
        circleel.style.left="0px";
        dark=false;
        bodyel.style.backgroundColor="white";
    }
    
})