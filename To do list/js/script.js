
tasks=[
    
]


function deletee(ind)
{
    console.log(ind);
}

function addnewtask()
{
    let title=document.getElementById("tasktitle").value;
    let description=document.getElementById("taskdescription").value
    if(title=='' || description=='')
    {
        if(title=='')
            alert("Please enter title!!");
        if(description=='')
        alert("please enter description !!");
    }
    else
    {
    tasks.push({tasktitle:title,taskdescription:description})
    }
    let displaytasks=document.getElementById('tasks');
    let str="";
tasks.forEach((element,index) => {
    str+=`
    <div class="task">
    <h3>${index})${element.tasktitle}</h3>
    <p>${element.taskdescription}</p>
    <i class="fa-solid fa-trash " id="deleted" onClick=deletee(${index})></i>
</div>`

});
displaytasks.innerHTML=str;
}

function update()
{
   
    let displaytasks=document.getElementById('tasks');
    let str="";
tasks.forEach((element,index) => {
    str+=`
    <div class="task">
    <h3>${index})${element.tasktitle}</h3>
    <p>${element.taskdescription}</p>
    <i class="fa-solid fa-trash " id="deleted" onClick=deletee(${index})></i>
</div>`

});
displaytasks.innerHTML=str;


}
function deletee(ind)
{
    tasks.splice(ind,1);
    update();
    console.log(tasks);
}


