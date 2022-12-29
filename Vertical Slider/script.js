left=[
    {
        title:"Leaves",
        tag:"leads to heaven",
        color:"#c97007"
    },
    {
        title:"peace",
        tag:"wanna be there",
        color:"lavender"
    },
    {
        title:"miracle",
        tag:"Experience is unique",
        color:"#527a53"
    },
    {
        title:"Visions",
        tag:"By seeing",
        color:"#cbe2e7"
    }
]

right=["waterfall.jpg","sky.jpg","lake.jpg","autumn.jpg"]

now=0;
leftel=document.querySelector(".left");
rightel=document.querySelector(".right");
downel=document.querySelector(".lbut");
upel=document.querySelector(".rbut");
contentel=document.querySelector(".content");

downel.addEventListener("click",()=>
{
    now++;
    if(now>3)
    {
        now=0;
    }
    if(now<0)
    {
        now=3;
    }
    contentel.children[0].innerText=left[now].title;
    contentel.children[1].innerText=left[now].tag;
    rightel.children[0].src=right[3-now];
    leftel.style.backgroundColor=left[now].color;
})

upel.addEventListener("click",()=>
{
    now--;
    if(now>3)
    {
        now=0;
    }
    if(now<0)
    {
        now=3;
    }
    contentel.children[0].innerText=left[now].title;
    contentel.children[1].innerText=left[now].tag;
    rightel.children[0].src=right[3-now];
    leftel.style.backgroundColor=left[now].color;
})