

bodyel=document.querySelector("body");
xel=document.querySelector(".xpos");
yel=document.querySelector(".ypos");

bodyel.addEventListener("mousemove",(e)=>
{
    xel.innerText=e.clientX;
    yel.innerText=e.clientY;
});

