counterel=document.querySelector(".counter");
minusel=document.querySelector(".minus");
resetel=document.querySelector(".reset");
plusel=document.querySelector(".plus");

count=0;

minusel.addEventListener("click",()=>
{
    count--;
    counterel.innerText=count;
})

resetel.addEventListener("click",()=>
{
    count=0;
    counterel.innerText=count;
})


plusel.addEventListener("click",()=>
{
    count++;
    console.log(count);
    counterel.innerText=count;
})

