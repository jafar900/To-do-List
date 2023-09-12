const collectitem = document.querySelector('#AddItem')
const additem = document.querySelector('#to-do-list')
const btn =document.querySelector('#btn')

btn.addEventListener('click', 
function(){
    addTodo(collectitem.value);
    collectitem.value=""
}


)
// collectitem.addEventListener("keyup",(e)=>{
//       if(e.key == 'Enter'){
//         console.log(btn)
//         console.log(collectitem.value)
//         addTodo(collectitem.value)
//         collectitem.value=""
//       }
// })


const addTodo = (item)=>{

    const listitem = document.createElement('li')
    listitem.innerHTML = `
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `;

    listitem.addEventListener('click', 
       function(){
        this.classList.toggle('done');
       } 
    )

    listitem.querySelector('i').addEventListener('click' , 
    function(){
        listitem.remove();
    }
    )
    additem.appendChild(listitem)
    console.log(additem)
}

