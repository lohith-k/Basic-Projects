let containerel=document.querySelector(".container");


function colorelements()
{
    for(let i=0;i<30;i++)
    {
        let containercolor=document.createElement("div");
        containercolor.classList.add("colorelement");

        containerel.appendChild(containercolor);
    }
}

function generatecolorcode()
{
    let chars="0123456789abcdef";
    let colorcode="";

    for(let i=0;i<6;i++)
    {

        colorcode+=chars[Math.floor(Math.random()*chars.length)];
        
    }
    return colorcode;
}


colorelements();

let colordivs=document.querySelectorAll(".colorelement");
function generatecolors()
{
    colordivs.forEach((colordiv)=>
    {
            colorcode=generatecolorcode();
            colordiv.innerText="#"+colorcode;
            colordiv.style.backgroundColor="#"+colorcode;
    })

}

generatecolors();