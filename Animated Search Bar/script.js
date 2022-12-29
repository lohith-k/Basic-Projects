searchel=document.querySelector(".search");

el=document.querySelector(".search-bar");

searchel.addEventListener("click",()=>
{
    console.log(el.classList);
    el.classList.toggle("active");   
})