let ele=document.querySelector(".container");

ele.addEventListener("mouseover",(event)=>
{
    console.log("sv");
    let x=event.pageX-ele.offsetLeft;
    let y=event.pageY-ele.offsetTop;
    console.log(x,y)
    ele.style.setProperty("--xpos",x+"px");
    ele.style.setProperty("--ypos",y+"px");
})