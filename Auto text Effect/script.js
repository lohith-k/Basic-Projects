
let hel=document.querySelector("h1");

occup=["Coder","Web Developer","Director","Actor","Employee"];

let index=0;
let wordindex=0;


function updatetext()
{
    if(index>4)
    {
        index=0;
    }
    let word=occup[index];

    if(wordindex>word.length)
    {
        index++;
        wordindex=0;
    }
    hel.innerText=`I am a ${word.slice(0,wordindex)}`;
     
    
    wordindex++;
    setTimeout(updatetext,300);
}

updatetext();