cellsel=document.querySelectorAll(".cell");
statusel=document.querySelector(".status");
restartel=document.querySelector(".restart");

winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
options=["","","","","","","","","",]
currentplayer="X";

initializegame();
function initializegame()
{
    cellsel.forEach((cell)=>{cell.addEventListener("click",cellclicked)});
    statusel.innerText=currentplayer+"'s turn";
    restartel.addEventListener("click",restartgame);
}

function cellclicked()
{
    cellindex=this.getAttribute("cellIndex");

    if(options[cellindex]=="")
    {
        updatecell(this,cellindex);  
        checkWinner();
    }
}

function updatecell(cell,cellindex)
{
    options[cellindex]=currentplayer;
    cell.innerText=currentplayer;
}
function changeplayer()
{
    if(currentplayer=="X")
    currentplayer="O";
    else
    currentplayer="X";

    statusel.innerText=currentplayer+"'s turn";
}
function checkWinner()
{
    roundwon=false;
    for(let i=0;i<winconditions.length;i++)
    {
        a=winconditions[i][0];
        b=winconditions[i][1];
        c=winconditions[i][2];

        if(options[a]!="" && options[a]==options[b] && options[b]==options[c])
        {
            roundwon=true;
            break;
        }
    }
    if(roundwon)
    {
        statusel.innerText=currentplayer+" Won";
    }
    else if(!options.includes(""))
    {
        statusel.innerText="DRAW";
    }
    else
    {
        changeplayer();
    }
}

function restartgame()
{
    options=["","","","","","","","","",]
    currentplayer="X";
    cellsel.forEach((cell)=>{cell.innerText=""});
    statusel.innerText=currentplayer+"'s turn";
}