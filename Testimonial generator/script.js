let testimonials=[
    {
        img:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"I'm good to go. I STRONGLY recommend website to EVERYONE interested in running a successful online business!",
        name:"- Wolf G."
    },
    {
        img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"I will let my mum know about this, she could really make use of website! Thanks guys, keep up the good work! Website is the most valuable business resource we have EVER purchased.",
        name:"- Bab N."
    },
    {
        img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"Website was worth a fortune to my company. I am so pleased with this product. Buy this now. Dude, your stuff is the bomb!",
        name:"Raquel R."
    },
    {
        img:"https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text:"I don't always clop, but when I do, it's because of website. Website is the most valuable business resource we have EVER purchased. This is simply unbelievable!",
        name:"- Melony V."
    },
    {
        img:"https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text:"Your company is truly upstanding and is behind its product 100%. Website has got everything I need. We've seen amazing results already. The very best.",
        name:"- Clemmie G."
    }
]

index=0;

let imgel=document.querySelector("img");
let textel=document.querySelector(".text");
let namel=document.querySelector(".username");

function updatetestimonial()
{
    let {img,text,name}=testimonials[index];
    imgel.src=img;
    textel.innerText=text;
    namel.innerText=name;

    index++;

    if(index==testimonials.length)
    index=0;

    setTimeout(()=>
    {
        updatetestimonial();
    },2000)


}

updatetestimonial();