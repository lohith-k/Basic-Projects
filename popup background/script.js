joinel=document.querySelector(".joining");
containerel=document.querySelector(".container")
popupel=document.querySelector(".popup");

closel=document.querySelector(".close");
console.log(closel);
joinel.addEventListener("click",()=>
{
    
    popupel.classList.remove("active");
    containerel.classList.add("blur");
})

closel.addEventListener("click",()=>
{
    console.log(popupel);
    popupel.classList.add("active");
    containerel.classList.remove("blur");
})