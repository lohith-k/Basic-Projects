
perel=document.querySelector(".percentage");

dynamicel=document.querySelector(".dynamic");

index=0;
function updateloader()
{
    perel.innerText=index+"%";
    dynamicel.style.width=index+"%";
    index++;
    if(index<=100)
    {
        setTimeout(updateloader,100);
    }
}

updateloader();