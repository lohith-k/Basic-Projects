rightel=document.querySelector(".right");
leftel=document.querySelector(".left");
itemel=document.querySelectorAll(".item");
frontel=document.querySelector(".frontline");
blel=document.querySelector(".left");
brel=document.querySelector(".right");

index=0;
rightel.addEventListener("click",()=>
{
    console.log(index)
    index++;
    console.log(index);
    if(index<=4)
    {
        frontel.style.width=index*25+"%";
        if(index>0)
        {
            blel.disabled=false;
        }
        if(index==4)
        {
            brel.disabled=true;
        }
        itemel.forEach((element,i) => {
            if(i<=index)
            {
                if(i==0)
                {
                    element.classList.add("active");
                element.innerHTML=`<i class="fa-solid fa-check"></i>
                <small>Start</small>`;
                }
                else if(i==4)
                {
                    element.classList.add("active");
                element.innerHTML=`<i class="fa-solid fa-check"></i>
                <small>Final</small>`;
                }
                else
                {
                    element.classList.add("active");
                element.innerHTML=`<i class="fa-solid fa-check"></i>
                <small>Step-${i}</small>`;

                }
                

            }
        });
    }
    else{
        index=4;
    }
})
leftel.addEventListener("click",()=>
{
    index--;
    console.log(index)
    if(index>=0)
    {
        frontel.style.width=index*25+"%";
        if(index<=0)
        {
            blel.disabled=true;
        }
        if(index<4)
        {
            brel.disabled=false;
        }
        itemel.forEach((element,i) => {
            if(i>index)
            {
                element.classList.remove("active");
                element.innerHTML=`<i class="fa-solid fa-xmark"></i>
                <small></small>`;
            }
        });
    }
    else{
        index=0;
    }

})

