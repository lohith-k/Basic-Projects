loaderel=document.querySelector(".loader");
bodyel=document.querySelector(".bg");
let load=-1;

updatepage()

function updatepage()
{
    load++;
    if(load>100)
    return;
    loaderel.children[0].innerText=load+"%";
    bodyel.style.filter=`blur(${blurpx(load)}px)`;
    loaderel.style.opacity=`${(1-load/100)}`;
    
    setTimeout(updatepage,40)
}

function blurpx(load)
{
    return 30-(load*30/100);
}