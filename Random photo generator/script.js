let imgel=document.querySelector(".imgcontainer");

let bel=document.querySelector(".btn");

bel.addEventListener("click",()=>
{
    for(let i=0;i<10;i++)
    {
        addimages();
    }
})

function addimages()
{
    console.log("fdvdv");
    let newimg=document.createElement("img");

    newimg.setAttribute("src",`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`);

    imgel.appendChild(newimg);
}