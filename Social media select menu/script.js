arrowel = document.querySelector(".menu i");
menuel = document.querySelector(".menu");
listel = document.querySelector(".list");
socialel = document.querySelectorAll("li")
headel=document.querySelector(".menu p");

arrowel.addEventListener("click", () => {
    menuel.classList.toggle("rotate");
    listel.classList.toggle("hide");
})
socialel.forEach((element) => {
    console.log(element)
    element.addEventListener("click", () => {
        headel.innerHTML=element.innerHTML;
    }
    )
});