
let newyeartime=new Date(new Date().getFullYear()+1,0,1).getTime();


let numberel=document.querySelectorAll(".value");

function updatetime()
{
    let presenttime=new Date().getTime();

    let diff=(newyeartime-presenttime)/1000;
    days=Math.floor(diff/(24*60*60));
    hours=Math.floor((diff%(24*60*60))/3600);
    minutes=Math.floor((diff%(60*60))/(60));
    seconds=Math.floor(diff%(60));
    document.querySelectorAll(".value")[0].innerText=days
    document.querySelectorAll(".value")[1].innerTexthours
    document.querySelectorAll(".value")[2].innerText=minutes
    document.querySelectorAll(".value")[3].innerText=seconds

    setTimeout(()=>
    {
        updatetime();
    },1000)
}

updatetime();