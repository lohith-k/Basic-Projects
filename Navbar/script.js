navbarel=document.querySelector(".navbar")

menuel=document.querySelector(".row i")

menuel.addEventListener("click",()=>
{
    if(navbarel.style.height=="200px")
    {
        navbarel.style.height="80px"
    }
    else
    navbarel.style.height="200px";
})