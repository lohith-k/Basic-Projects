let expandel=document.querySelectorAll(".card i");

expandel.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        if(e.classList.contains("fa-square-plus"))
        {
            console.log(e.classList[1]);
            e.classList.remove("fa-square-plus")
            e.classList.add("fa-square-minus");
            e.parentElement.parentElement.style.height="160px";
        }   
        else
        {
            e.classList.add("fa-square-plus")
            e.classList.remove("fa-square-minus");
            e.parentElement.parentElement.style.height="80px";
        } 
    })
}
)