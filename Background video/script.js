videoel=document.querySelector("video");

btnel=document.querySelector("i");

clickel=document.querySelector("button");

preloaderel=document.querySelector(".preloader");

play=true;

clickel.addEventListener("click",()=>
{
    if(play)
    {
        btnel.classList.remove("fa-pause");
        btnel.classList.add("fa-play");
        videoel.pause();
        play=false;
    }
    else
    {
        
        btnel.classList.add("fa-pause");
        btnel.classList.remove("fa-play");
        videoel.play();
        play=true;
    }
})

window.addEventListener("load",()=>
{
    preloaderel.style.zIndex="-2";
})