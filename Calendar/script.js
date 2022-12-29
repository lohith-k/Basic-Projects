let date=new Date();
let headerel=document.querySelector(".header");

getdatedetails();

function getdatedetails()
{
    month=monthconvert(date.getMonth());
    day=dayconvert(date.getDay());
    dat=date.getDate();
    year=date.getFullYear();
    headerel.firstElementChild.innerText=month;
    headerel.lastElementChild.innerText=day+" "+month+" "+dat+" "+year;
}


function dayconvert(num)
{
    if(num==0)
    return "Sun";
    else if(num==1)
    return "Mon";
    else if(num==2)
    return "Tue";
    else if(num==3)
    return "Wed";
    else if(num==4)
    return "Thu";
    else if(num==5)
    return "Fri";
    else if(num==6)
    return "Sat";
}

function monthconvert(num)
{
    if(num==0)
    return "Jan";
    else if(num==1)
    return "Feb";
    else if(num==2)
    return "Mar";
    else if(num==3)
    return "Apr";
    else if(num==4)
    return "May";
    else if(num==5)
    return "Jun";
    else if(num==6)
    return "Jul";
    else if(num==7)
    return "Aug";
    else if(num==8)
    return "Sep";
    else if(num==9)
    return "Oct";
    else if(num==10)
    return "Nov";
    else if(num==11)
    return "Dec";
   
}


daysel=document.querySelector(".days");

firstday=new Date(new Date().getFullYear(),new Date().getMonth(),1).getDay()-1;
lastday=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
console.log(lastday);
let days="";
for(let i=0;i<firstday;i++)
{
    console.log("empty");
    days+=`<div class="empty"></div>`;
}

for(let i=1;i<lastday;i++)
{
    if(i==new Date().getDate())
    days+=`<div class="today">${i}</div>`
    else
    days+=`<div>${i}</div>`
}

daysel.innerHTML=days;