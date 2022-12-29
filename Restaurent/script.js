let tables=[
    {
        name:"Table-1",
        amount:0,
        items:0,
        orders:[]
    },
    {
        name:"Table-2",
        amount:0,
        items:0,
        orders:[]
    },
    {
        name:"Table-3",
        amount:0,
        items:0,
        orders:[]
    },
    {
        name:"Table-4",
        amount:0,
        items:0,
        orders:[]
    }
]

let courseitems=[
    {
        name:"Panner Tikka",
        amount:250,
        type:"starter"
    },
    {
        name:"Chicken Tikka",
        amount:300,
        type:"starter"
    },
    {
        name:"Gobi Manchurian",
        amount:200,
        type:"starter"
    },
    {
        name:"Chicken Biryani",
        amount:300,
        type:"main course"
    }, 
    {
        name:"Panner Biryani",
        amount:270,
        type:"main course"
    },
    {
        name:"Mutton Biryani",
        amount:350,
        type:"main course"
    },
    {
        name:"Gulab Jamun",
        amount:100,
        type:"dessert"
    },
    {
        name:"Butterscotch",
        amount:120,
        type:"dessert"
    },
    {
        name:"Malai",
        amount:100,
        type:"dessert"
    },
    {
        name:"Arabica white",
        amount:250,
        type:"appetizers"
    },
    {
        name:"cocacola light",
        amount:150,
        type:"appetizers"
    },
    {
        name:"French fries",
        amount:180,
        type:"appetizers"
    },
    {
        name:"Lemonade",
        amount:120,
        type:"beverages"
    },
    {
        name:"Iced Coffee",
        amount:90,
        type:"beverages"
    },
    {
        name:"Apple Punch",
        amount:140,
        type:"beverages"
    }

]

mainel=document.querySelector(".main");
let selectedtable;
courseitems.forEach((item)=>
{
    let itemel=document.createElement("div");
    itemel.classList.add("item");
    itemel.draggable="true";

    let namel=document.createElement("h1");
    namel.innerText=item.name;

    let amountel=document.createElement("p");
    amountel.innerText=item.amount+".00";

    let typel=document.createElement("p");
    typel.innerText=item.type;
    typel.style.display="none";


    itemel.appendChild(namel);
    itemel.appendChild(amountel);
    itemel.appendChild(typel);
    mainel.appendChild(itemel);
})

sidel=document.querySelector(".sidebar");

tables.forEach((item)=>
{
    let itemel=document.createElement("div");
    itemel.classList.add("table");

    let namel=document.createElement("h1");
    namel.innerText=item.name;

    let amountel=document.createElement("p");
    amountel.innerText="Rs."+item.amount+".00 | Total items:"+item.items;

    itemel.appendChild(namel);
    itemel.appendChild(amountel);
    sidel.appendChild(itemel);
})

searchtablel=document.querySelector(".searchtable");

searchtablel.addEventListener("input",()=>
{
    namel=searchtablel.value.toLowerCase();
    let tablesel=document.querySelectorAll(".table");
    if(namel=="")
    {
        tablesel.forEach((tab)=>
        {
            tab.style.display="block";
        })
    }
    else
    {
        tablesel.forEach((tab)=>
        {
            temp=tab.children[0].innerText.toLowerCase();
            if(temp.includes(namel))
            {
                
                tab.style.display="block";
            }
            else
            {
                tab.style.display="none";
            }
        })
    }
})


searchmainel=document.querySelector(".searchmain");

searchmainel.addEventListener("input",()=>
{
    namel=searchmainel.value.toLowerCase();
    itemsel=document.querySelectorAll(".item");
    if(namel=="")
    {
        itemsel.forEach((it)=>
        {
            it.style.display="block";
        })
    }
    else if(foodsearchtype(namel)==true)
    {
       
        itemsel.forEach((it)=>
        {
            temp=it.children[2].innerText.toLowerCase();
            
            if(temp==namel)
            {
                
                it.style.display="block";
            }
            else
            {
                it.style.display="none";
            }
        })
    }
    else
    {
        itemsel.forEach((it)=>
        {
            temp=it.children[0].innerText.toLowerCase();
            
            if(temp.includes(namel))
            {
                
                it.style.display="block";
            }
            else
            {
                it.style.display="none";
            }
        })
    }
})


function foodsearchtype(coursetype)
{
    flag=0;
    courseitems.forEach((food)=>
    {
        if(coursetype.toLowerCase()==food.type.toLowerCase())
        {
            flag=1;
        }
    })
    if(flag==1)
    return true;
    else
    return false;

}

let tablesel=document.querySelectorAll(".table");
let orderel=document.querySelector(".order");
let containerel=document.querySelector(".container");
tablesel.forEach((tab,i)=>
{
    tab.addEventListener("click",(event)=>
    {      
        orderel.style.display="block";
        selectedtable=i;
        orderdisplay(tab);
        containerel.style.opacity="0.2";
    })
})

closeorderel=document.querySelector(".row1 i");

closeorderel.addEventListener("click",()=>
{
    orderel.style.display="none";
    containerel.style.opacity="1";
})

function orderdisplay(tab)
{
        
    tables.forEach((item)=>
    {
        
        if(item.name==tab.children[0].innerText)
        {
            orderel.children[0].children[0].innerText=`${item.name} |Order Details`;

            totorders=item.orders;
            while(orderel.children.length>2)
            {
                orderel.removeChild(orderel.children[orderel.children.length-1]);
            }
            let money=0;
            totorders.forEach((eachorder,i)=>
            {
                let neworder=document.createElement("div");
                neworder.classList.add("row");
    
                pel1=document.createElement("p");
                pel2=document.createElement("p");
                pel3=document.createElement("p");
                inputel=document.createElement("input");
                inputel.type="number";
                iel=document.createElement("i");
                iel.classList.add("fa-solid");
                iel.classList.add("fa-trash");
                iel.classList.add("fa-2x");
                
                pel1.innerText=i+1;
                pel2.innerText=courseitems[eachorder].name;
                pel3.innerText=courseitems[eachorder].amount;
                money+=courseitems[eachorder].amount;
                neworder.appendChild(pel1);
                neworder.appendChild(pel2);
                neworder.appendChild(pel3);
                neworder.appendChild(inputel);
                neworder.appendChild(iel);
                orderel.appendChild(neworder);
            })
            totalel=document.querySelector(".total");
            totalel.innerText="TOTAL Amount : "+money+".00";
        }
    })
}

additemsel=document.querySelectorAll(".item");

additemsel.forEach((eachitem,i)=>
{
    eachitem.addEventListener("dragstart",(event)=>
    {
        event.dataTransfer.setData("Text",i);
    })
})

droptablesel=document.querySelectorAll(".table");

droptablesel.forEach((eachtable,i)=>
{
    eachtable.addEventListener("dragover",(event)=>
    {
        event.preventDefault();
        
    })
    eachtable.addEventListener("drop",(event)=>
    {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        tables[i].orders.push(data);
        tables[i].items++;
        tables[i].amount+=courseitems[data].amount;
        updatetables();
    })
})


function updatetables()
{
    
    tables.forEach((item,i)=>
    {
        sidel.children[i+2].children[0].innerText=item.name;
        sidel.children[i+2].children[1].innerText="Rs."+item.amount+".00 | Total items:"+item.items;
    })

}

function  updateorders(x)
{
    tables.forEach((item)=>
    {
        if(item.name==tables[x].name)
        {
            orderel.children[0].children[0].innerText=`${item.name} |Order Details`;

            totorders=item.orders;
            while(orderel.children.length>2)
            {
                orderel.removeChild(orderel.children[orderel.children.length-1]);
            }
            let money=0;
            totorders.forEach((eachorder,i)=>
            {
                let neworder=document.createElement("div");
                neworder.classList.add("row");
    
                pel1=document.createElement("p");
                pel2=document.createElement("p");
                pel3=document.createElement("p");
                inputel=document.createElement("input");
                inputel.type="number";
                iel=document.createElement("i");
                iel.classList.add("fa-solid");
                iel.classList.add("fa-trash");
                iel.classList.add("fa-2x");
                
                pel1.innerText=i+1;
                pel2.innerText=courseitems[eachorder].name;
                pel3.innerText=courseitems[eachorder].amount;
                money+=courseitems[eachorder].amount;
                neworder.appendChild(pel1);
                neworder.appendChild(pel2);
                neworder.appendChild(pel3);
                neworder.appendChild(inputel);
                neworder.appendChild(iel);
                orderel.appendChild(neworder);
            })
            totalel=document.querySelector(".total");
            totalel.innerText="TOTAL Amount : "+money+".00";
        }
    })
}

sessionel=document.querySelector(".session");

sessionel.addEventListener("click",()=>
{
    tables[selectedtable].amount=0;
    tables[selectedtable].items=0;
    tables[selectedtable].orders=[];
    updatetables();
    updateorders(selectedtable);
})

deletel=document.querySelectorAll(".fa-trash");
console.log(deletel)
deletel.forEach((eachitem)=>
{
    console.log(eachitem)
    eachitem.addEventListener("click",()=>
    {
        console.log("fdvdf");
    })
})