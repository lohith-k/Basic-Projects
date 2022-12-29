let sounds=["alligator","amazonmacaw","AustralianFrogmouth","bee","bison","Bluthund_jault","chipmunk","cobra","coyotes","cricket","crickets","crow","donkey","Elefant","elk","Ente_quackt","filenames","finch","fox","frogs","Gaense","geier","Gorilla","grasshopper","hahn_kikeriki","huehner","kanarienvogel","Kapuzineraffe","Katze_miaut","lapwing","Leopard","LAwe","mockingbird","moewe","mosquito","nachtigal","ochse","osprey","owl","peacock","pferd_whinnert","pigeons","Pony","Puma","rabe","rattlesnake","RedParot","Rhinozerus","Rinder_muh","rotlori","schaf","schafe","Schimpanse","schwalbe","schwein","spatz","specht","squirrel","Steller_Jay","Tiger","truthahn","wolf","yellowrumpedwarbler","Ziege",]

let containerel=document.querySelector(".container");
let previousel;

sounds.forEach(sound => {
    let buttonel=document.createElement("button");
    buttonel.classList.add("btn");
    buttonel.innerText=sound;
    buttonel.style.background=`url(images/${sound}.jpg)`;
    let soundel=document.createElement("audio");
    soundel.setAttribute("src","Sounds/"+sound+".mp3");
    buttonel.appendChild(soundel);
    containerel.appendChild(buttonel);

    buttonel.addEventListener("click",()=>
    {
        if(previousel)
        stopplaying(previousel);
        soundel.play();
        previousel=soundel;
    })
});

function stopplaying(previousel)
{
    console.log(previousel);
    previousel.pause();
    previousel.currentTime = 0;
}