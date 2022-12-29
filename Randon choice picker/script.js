
textel=document.querySelector("textarea");
valuel=document.getElementById("textinput");
containerel=document.querySelector(".container");
choicesel=document.querySelector(".choices");
textel.addEventListener("input",()=>
{
    updatechoices();
})

choices=[]
function updatechoices()
{
    let temp="";
    choices=[]
    for(let i=0;i<valuel.value.length;i++)
    {
        if(valuel.value[i]===",")
        {
            
            choices.push(temp);
            temp="";
        }
        else
        {
            
            temp+=valuel.value[i];
        }
    }
    choices.push(temp);
    choicesel.innerHTML=`  <div class="choices">
            
    </div>`;
    choices.forEach((i)=>
    {
        rrel=document.createElement("div");
        rrel.classList.add("choice");
        rrel.innerText=i;
        choicesel.appendChild(rrel);
    })
   
}

textel.addEventListener("keypress",(key) =>
{
    if(key.key=="Enter")
    {
        event.preventDefault();
        randomchoice();
    }
})

k=0;
function randomchoice()
{
   
    const interval=setInterval(()=>
    {
     
        noof=choicesel.children.length;
        randnum=Math.floor(Math.random()*noof);
        highlight(choicesel.children[randnum]);
        k++;
        if(k>30)
        {
            clearInterval(interval)
            return;
        }
        setTimeout(()=>
        {
            unhighlight(choicesel.children[randnum]);
        },100)
        console.log(randnum);
    },300)
   
 
}

function highlight(tag)
{
    tag.style.backgroundColor="green";
}
function unhighlight(tag)
{
    tag.style.backgroundColor="orange";
}