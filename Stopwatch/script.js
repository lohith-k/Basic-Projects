startel=document.querySelector(".start");
pausel=document.querySelector(".pause");
resetel=document.querySelector(".reset");
timeel=document.querySelector(".container h1");


let time=55;
let timeout;

startel.addEventListener("click",()=>
{
    updatetime();
})

pausel.addEventListener("click",()=>
{
    clearTimeout(timeout);
})

resetel.addEventListener("click",()=>
{
    time=0;
})

function updatetime()
{
    time++;
    update();
    timeout=setTimeout(updatetime,1000);
}

function update()
{
    let h=parseInt(time/3600);
    let m=parseInt((time-(h*3600))/60);
    let s =time%60;
    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;
    setTimeout(update,1000);
}

update();
