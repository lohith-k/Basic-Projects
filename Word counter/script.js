textareael=document.getElementById("inputtext");

currentword=document.getElementById("cwc");

remainingword=document.getElementById("rwc");

textareael.addEventListener("keyup",()=>
{
    updatecounter();
})

function updatecounter()
{
    let wordcount=textareael.value.length;

    let sentence=textareael.value;

    let c=0;
    for(let i=0;i<wordcount;i++)
    {
        if(sentence[i]==' ')
        c++;
    }

    currentword.innerText=`Current Word Count : ${c}`;
    if(150-c>=0)
    {
        remainingword.innerText=`Remaining Word Count : ${150-c}`;
    }
    else
    {
        remainingword.innerText=`Remaining Word Count : ${0}`
    }

}