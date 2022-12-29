

trailer=[
    {name:"adipurush",videopath:"adipurush.mp4",imagepath:"adipurush.webp"},
    {name:"brahmastra",videopath:"brahmastra.mp4",imagepath:"brahmastra.webp"},
    {name:"Pushpa",videopath:"pushpa.mp4",imagepath:"pushpa.jpg"},
    {name:"RRR",videopath:"rrr.mp4",imagepath:"rrr.jpg"},
]
let moviesel=document.querySelector("main");
function movies()
{
    for(let i=0;i<trailer.length;i++)
    {

        let divs=document.createElement("div");
        divs.classList.add("container");
       
        let imgel=document.createElement("img");
       imgel.setAttribute("src",trailer[i].imagepath);
       divs.appendChild(imgel);

       let titlel=document.createElement("h2");
       titlel.innerText=trailer[i].name;
       divs.appendChild(titlel);

       let pel=document.createElement("p");
       pel.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum quia iste facilis, illum ipsum id illo debitis vel inventore est dolorum cum ullam unde alias repellat nam. Est, id?";
       divs.appendChild(pel);

       let buttonel=document.createElement("button");
       buttonel.setAttribute("id",i);
       buttonel.classList.add("watchnow");
       buttonel.innerText="Watch Now";
divs.appendChild(buttonel);
        moviesel.appendChild(divs);
    }

}
movies();

watchel=document.querySelectorAll(".watchnow");
console.log(watchel);
closeel=document.querySelector(".close");
trailerel=document.querySelector(".trailer");
videoel=document.querySelector("video");
for(let i=0;i<watchel.length;i++)
{
    watchel[i].addEventListener("click",(event)=>
    {
        videoel.setAttribute("src",trailer[event.target.id].videopath);
        trailerel.classList.remove("active");
    })
}

closeel.addEventListener("click",()=>
{
    trailerel.classList.add("active");
    videoel.pause();
    videoel.currentTime=0;
    console.log(videoel.currentTime);
})
