
numbersel=document.querySelectorAll(".number");

one=0,two=0,three=0;

onel=15,twoel=260,threel=27;



function updatenumbers()
{
    numbersel[0].innerText=one;
    numbersel[1].innerText=two;
    numbersel[2].innerText=three;
    one+=1;
    two+=parseInt(twoel/onel);
    three+=parseInt(threel/onel);
    console.log(one,two,three);
    if(one<=onel)
    {
    setTimeout(()=>
    {
        updatenumbers();
    },50);
   
    }
    

}

updatenumbers();

