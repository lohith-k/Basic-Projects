navbarel=document.querySelector(".navbar");

content2el=document.querySelector(".content2");

window.addEventListener("scroll",()=>
{
    if(content2el.offsetTop-navbarel.offsetTop<window.scrollY)
    {
        navbarel.classList.add("active");
    }
    else{
        navbarel.classList.remove("active");
    }
})