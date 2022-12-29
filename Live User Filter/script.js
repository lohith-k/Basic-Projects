filterel=document.querySelector(".filter");
contentel=document.querySelector(".content");

loadusers();

async function loadusers()
{
    const res=await fetch("https://randomuser.me/api/?results=50")

    const data=await res.json();
    console.log(data.results);

    contentel.innerHTML='';
    data.results.forEach((user)=>
    {
        userel=document.createElement("div");
        userel.classList.add("user");
    
        userel.innerHTML=` 
        <img src="${user.picture.large}">
        <div class="user-info">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city},${user.location.country}.</p>
        </div>`

        contentel.appendChild(userel)
    })


}

filterel.addEventListener("input",(e)=>
{
    filterusers(e.target.value);
})

function filterusers(key)
{
    usersel=document.querySelectorAll(".user");

    usersel.forEach((eachuser)=>
    {
        if(eachuser.innerText.toLowerCase().includes(key))
        {
            eachuser.classList.remove("hide");
        }
        else
        {
            eachuser.classList.add("hide");
        }
    })
}