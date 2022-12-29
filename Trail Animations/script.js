bodyel=document.querySelector("body");  

bodyel.addEventListener("mousemove",(event)=>
{
    let xpos=event.offsetX;
    let ypos=event.offsetY;
     let icon=document.createElement("span");
     icon.style.top=ypos+"px";
     icon.style.left=xpos+"px";
   let size=Math.floor(Math.random()*100);
    console.log(size);
    icon.style.backgroundSize=size+"px";

     bodyel.appendChild(icon);

     setTimeout(()=>
     {
         icon.remove();
     },3000)
    
})
