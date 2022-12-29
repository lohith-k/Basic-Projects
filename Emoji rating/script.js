starel=document.querySelectorAll(".star");
emojiel=document.querySelector(".emoji");
starel.forEach((star,index) => {
    star.addEventListener("click",()=>
    {
        updaterating(index);
    })
});


function updaterating(index)
{
    
    starel.forEach((star,i)=>
    {
        
        if(i<=index)
        {
            star.classList.add("active");
        }
        else{
            star.classList.remove("active");
        }
    })
    if(index==0)
    {
        emojiel.classList.remove(emojiel.classList[2]);
        emojiel.classList.add("fa-face-sad-cry");
    }
    else if(index==1)
    {
        emojiel.classList.remove(emojiel.classList[2]);
        emojiel.classList.add("fa-face-frown-open");
    }
    else if(index==2)
    {        emojiel.classList.remove(emojiel.classList[2]);
        emojiel.classList.add("fa-face-meh");
    }
    else if(index==3)
    {
        emojiel.classList.remove(emojiel.classList[2]);
        emojiel.classList.add("fa-face-smile");
    }
    else if(index==4)
    {
        emojiel.classList.remove(emojiel.classList[2]);
        emojiel.classList.add("fa-face-laugh");
    }
}