playerel=document.querySelector(".player");
computerel=document.querySelector(".computer");
resultel=document.querySelector(".result");
buttonel=document.querySelectorAll("button");

choices=["Rock","Paper","Scissor","Rock"];

let result="";
buttonel.forEach((eachbutton)=>
{
    eachbutton.addEventListener("click",()=>
    {
        let userchoice=choices.lastIndexOf(eachbutton.innerText);
        let computerchoice=Math.floor(Math.random()*3);
        console.log(computerchoice,userchoice)
        updateresult(userchoice,computerchoice);
    })
})



function updateresult(userchoice,computerchoice)
{
    if(choices[userchoice]==choices[computerchoice])
    {
        result="Draw";
    }
    else if(userchoice-computerchoice==1)
    {
        result="You Won";
    }
    else
    {
        result="You Lose"
    }
    playerel.innerText="Player : "+choices[userchoice];
    computerel.innerText="Computer : "+choices[computerchoice];
    resultel.innerText="Result:"+result;

}