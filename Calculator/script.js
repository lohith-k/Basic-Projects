let out="";

let buttons=document.querySelectorAll("button");
Array.from(buttons).forEach((element) => {
    
    element.addEventListener('click',(e)=>
    {
        out=document.getElementById("input").value;
    console.log(out);
        if(e.target.innerHTML=='=')
        {
            out=eval(out);
            console.log("jjhj");
        }
        else if(e.target.innerHTML=="AC")
        {
            out="";
        }
        else
        {
            out=out+e.target.innerHTML;
        }
       document.getElementById("input").value=out;
        
    })
});