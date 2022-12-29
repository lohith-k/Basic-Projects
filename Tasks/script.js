inputel=document.querySelector("input");
let tasksel=document.querySelector(".tasks");
addel=document.querySelector(".add")

addel.addEventListener("click",()=>
{
    if(inputel.value=="")
    {
        window.alert("Enter valid task");
    }
    else{

        let taskel=document.createElement("div");
        taskel.classList.add("task");
        
        let pel=document.createElement("p");
        pel.innerText=inputel.value;
        taskel.appendChild(pel);
        
        let cel=document.createElement("button");
        cel.classList.add("completed")
        cel.innerText="completed";
        taskel.appendChild(cel);
        
        let del=document.createElement("button");
        del.classList.add("delete");
        del.innerText="delete";
        taskel.appendChild(del);
        
        tasksel.appendChild(taskel);
        inputel.value="";
        cel.addEventListener("click",()=>
        {
            let tas=cel.previousSibling;
            tas.style.textDecoration="line-through";
        })
        del.addEventListener("click",()=>
        {
            let das=cel.parentElement;
            das.remove();
        })
    }

})