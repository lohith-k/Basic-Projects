let num1=Math.ceil(Math.random()*10);
let num2=Math.ceil(Math.random()*10);


let question=document.getElementById("question");

question.innerText=`What is ${num1} multiply by ${num2} ?`;

let correctans=num1*num2;


let formelement=document.getElementById("form");

let scoreel=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if(!score)
{
    console.log("ergr");
    score=0;
}

scoreel.innerText=`Your Score : ${score}`;
formelement.addEventListener('submit',()=>
{
    let userans=document.getElementById("answer").value;

    console.log(userans)
    if(correctans == userans)
    {
        score++;
        updatelocalstorage();
    }
    else
    {

        score--;
        updatelocalstorage();
    }
    
    
})

function updatelocalstorage()
{
    console.log()
    window.localStorage.setItem("score",JSON.stringify(score));
}