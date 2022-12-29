let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let ampm = document.getElementById("ampm");
function updateclock()
{
    let date=new Date();

    hour.innerText=date.getHours();
    minute.innerText=date.getMinutes();
    second.innerText=date.getSeconds();
   
    if(hour.innerText>=12)
    {
        hour.innerText=hour.innerText-12;
        ampm.innerText="PM";
    }
}

setInterval(()=>
{
    updateclock();
},1000)