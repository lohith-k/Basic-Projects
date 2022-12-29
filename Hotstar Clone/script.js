let slide=0;

let nextbel=document.querySelector(".slidenext");
let prevbel=document.querySelector(".slideprev");
let noofslides=document.querySelectorAll(".eachslide").length;

let timeout;
nextbel.addEventListener("click",()=>
{
    slide++;
    clearTimeout(timeout);
    updateslider();
    
})

prevbel.addEventListener("click",()=>
{
    slide--;
    clearTimeout(timeout);
    updateslider();
})

function updateslider()
{
    if(slide<0)
    {
        slide=noofslides-1;
    }
    if(slide>=noofslides)
    {
        slide=0;
    }
    let imgcontainerel=document.querySelector(".imgcontainer");

    imgcontainerel.style.transform=`translateX(-${1496*slide}px)`;

    timeout=setTimeout(()=>
    {
        slide++;
        updateslider();
    },3000);
}


updateslider();


let traynextel=document.querySelectorAll(".nexttray");
let trayprevel=document.querySelectorAll(".prevtray");
traynextel.forEach((traynext)=>
{
    traynext.addEventListener("click",()=>
    {
        let tray;
        let trayitemsel=traynext.parentElement.children[0];
        let transform=trayitemsel.style.transform;
        console.log(transform);
        if(transform=="")
        {
            tray=1;
        }
        else
        {
            console.log(transform[11]=='0');
            if(transform[11]=='0')
            {
                tray=1;
            }
            else{
            tray=(parseInt(transform[12]+transform[13]+transform[14]+transform[15])/1440);
            tray++;
            }
        }
        
        updatetrayslider(traynext,tray);
        
    })

})

trayprevel.forEach((trayprev)=>
{
   
    trayprev.addEventListener("click",()=>
    {
        let tray;
        let trayitemsel=trayprev.parentElement.children[0];
        let transform=trayitemsel.style.transform;
        if(transform=="")
        {
            tray=1;
        }
        else
        {
            
            tray=(parseInt(transform[12]+transform[13]+transform[14]+transform[15])/1440);
            tray--;
        }
        
        updatetrayslider(trayprev,tray);
    })

})



function updatetrayslider(traytask,tray)
{
    console.log(tray);
    let trayitemsel=traytask.parentElement.children[0];
    let transform=trayitemsel.style.transform;
    let nooftrays=trayitemsel.children.length/8;

    if(tray<0)
    {
        tray=nooftrays-1;
    }
    console.log(tray,nooftrays)
    if(tray>=nooftrays)
    {
        tray=0;
        return;
    }
  


    trayitemsel.style.transform=`translateX(-${1440*(tray)}px)`;

  
}

trayitemel=document.querySelectorAll(".trayitem");
trayitemel.forEach((trayitem)=>
{
    trayitem.addEventListener("mouseover",()=>
    {
        let detail=document.createElement("div");
        detail.classList.add("trayitemdetails");
        let pel=document.createElement("p");
        pel.innerText="Title";
        detail.appendChild(pel);
        let pel1=document.createElement("p");
        pel1.innerText="Metadata";
        detail.appendChild(pel1);
        let pel2=document.createElement("p");
        pel2.innerText="Description";
        detail.appendChild(pel2);

        let divel=document.createElement("div");
        divel.classList.add("onbutton");
        divel.innerText="Watch Movie";
        detail.appendChild(divel);
        let divel1=document.createElement("div");
        divel1.classList.add("onbutton");
        divel1.innerText="Add to watchlist";
        detail.appendChild(divel1);

        
        trayitem.appendChild(detail);
    })
    trayitem.addEventListener("mouseout",()=>
    {
        trayitem.removeChild(trayitem.children[1]);
    })
})