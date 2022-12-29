let bgel=document.querySelector(".bg-img");

window.addEventListener("scroll",()=>
{
    bgel.style.opacity=1-(window.pageYOffset/900);
    bgel.style.backgroundSize=160-(window.pageYOffset/12)+"%";
})