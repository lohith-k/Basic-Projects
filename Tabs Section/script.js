let bel=document.querySelectorAll(".btn");
let tel=document.querySelectorAll(".text");

let livenowb=document.querySelector(".btn.live");

let livenowt=document.querySelector(".text.live");

bel.forEach(buttonel => {
    buttonel.addEventListener("click",()=>
    {
        console.log(livenowb.target);
        livenowb.classList.remove("live");
        livenowt.classList.remove("live");
        console.log(buttonel);
        buttonel.classList.add("live");
            tel.forEach(text=>
                {
                    
                    if(text.id[text.id.length-1]==buttonel.id[buttonel.id.length-1])
                    {
                        console.log(text);
                        text.classList.add("live");
                        livenowt=text;
                    }
                })
            
                livenowb=buttonel;
            
    })
});