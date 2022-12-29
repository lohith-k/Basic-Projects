leftel=document.querySelector(".left");

rightel=document.querySelector(".right");


leftel.addEventListener("mouseover",()=>
{
    leftel.style.width="80%";
    rightel.style.width="20%";
})



rightel.addEventListener("mouseover",()=>
{
    rightel.style.width="80%";
    leftel.style.width="20%";
})