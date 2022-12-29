generatel=document.querySelector("button")
inputel=document.querySelector("input");
characters=['!','@','#','$','%','^','&','*','(',')','{','}','[',']','Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','l','k','j','h','g','f','d','s','a','z','x','c','v','b','n','m',]

popul=document.querySelector(".popup p");
copyel=document.querySelector("i");
let out;
generatel.addEventListener("click",()=>
{

   out="";

   for( i=0;i<14;i++)
   {
        out+=characters[Math.floor(Math.random()*66)]
   }

   inputel.value=out;
   
   console.log(out);

   

})


copyel.addEventListener("click",()=>
{
    if(inputel.value!="")
    {
    inputel.select();
    popul.innerText=inputel.value+"  Copied!";
    navigator.clipboard.writeText(inputel.value)
    popup();
    }
})
pop=document.querySelector(".popup");
function popup()
{
   
        pop.classList.remove("active");
    

    setTimeout(()=>
    {
        pop.classList.add("active");

    },2000)


}