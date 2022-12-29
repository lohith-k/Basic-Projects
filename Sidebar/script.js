sidebarel=document.querySelector(".sidebar");

closel=document.querySelector(".sidebar i");
menuel=document.querySelector(".menu");

closel.addEventListener("click",()=>
{
    sidebarel.style.display="none";
    menuel.classList.remove("close");
})

menuel.addEventListener("click",()=>
{
    sidebarel.style.display="block";
    menuel.classList.add("close");
})