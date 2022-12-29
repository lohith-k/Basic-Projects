
let songs=[
    {songname:"Inthandam",cover:"../img/Sita-Ramam.jpg",filepath:"../songs/Inthandham.mp3"},
    {songname:"Kaanunna Kalyanam",cover:"../img/Sita-Ramam.jpg",filepath:"../songs/KaanunnaKalyanam.mp3"},
    {songname:"oh sita",cover:"../img/Sita-Ramam.jpg",filepath:"../songs/OhSita.mp3"},
    {songname:"Krishna Trance",cover:"../img/Karthikeya-2.jpg",filepath:"../songs/KrishnaTrance.mp3"},
    {songname:"Megham Karigena",cover:"../img/Thiru.jpg",filepath:"../songs/MeghamKarigena.mp3"},
    {songname:"Kumkumala",cover:"../img/Brahmastra.jpg",filepath:"../songs/Kumkumala.mp3"},

]

let masterplay=document.getElementById('masterplay');
let audioelement=new Audio('../songs/Inthandham.mp3');
let telugusongs=Array.from(document.getElementsByClassName('telugusong'));

Array.from(document.getElementsByClassName('card')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        index=parseInt(e.target.id);
        console.log(e.target);
        cover=songs[index-1].filepath;
        console.log(cover);
        audioelement.src=cover;
        audioelement.currentTime=0;
        audioelement.play();
    })
})

telugusongs.forEach((element,i)=>
{
    

    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByTagName("p")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>
{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        console.log("playing............");
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    }
    else{
        audioelement.pause();
        console.log("paused............");
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
    }
})
