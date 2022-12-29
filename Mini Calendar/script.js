date=new Date();

monthel=document.querySelector(".header p");
dayel=document.querySelector(".day");
datel=document.querySelector(".date");
yearel=document.querySelector(".container p");
months=["January","February","March","April","May","June","July","August","September","October","November","December"];

days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function updatedate()
{
    monthel.innerText=months[date.getMonth()];
    dayel.innerText=days[date.getDay()];
     datel.innerText=date.getDate();
    yearel.innerText=date.getYear();
    setTimeout(updatedate,10000)
}

updatedate();

