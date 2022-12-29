leftbtnel=document.querySelector(".left");
rightbtnel=document.querySelector(".right");

sliderel=document.querySelector(".img");

imgel=document.querySelectorAll("img");
let currentimg=1;
let timeout;
leftbtnel.addEventListener("click",()=>
{
    currentimg--;
    clearTimeout(timeout);
    updateimg();
    
})

rightbtnel.addEventListener("click",()=>
{
  
    currentimg++;
    clearTimeout(timeout);
    updateimg();
    

})


function updateimg()
{
    
    if(currentimg<1)
    {
        currentimg=imgel.length;
    }
    else if(currentimg>imgel.length)
    {
        currentimg=1;
    }
    sliderel.style.transform=`translateX(-${(currentimg-1)*600}px)`;

     timeout=setTimeout(()=>{
        currentimg++;
        updateimg();
    },5000)
}

updateimg();