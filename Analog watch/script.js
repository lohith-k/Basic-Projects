
let hourel=document.getElementById("hour");
let minuteel=document.getElementById("minute");
let secondel=document.getElementById("second");

function updatetime()
{
    let date=new Date();
    let hour=date.getHours();
    if(hour>12)
    hour=hour-12;
    let minute=date.getMinutes();
    let second=date.getSeconds();
    secondel.style.transform=`rotate(${second*6}deg)`;
    minuteel.style.transform=`rotate(${minute*6}deg)`;
    hourel.style.transform=`rotate(${hour*30 + minute/2}deg)`
    console.log(hour,minute,second);

}

setInterval(updatetime,1000)