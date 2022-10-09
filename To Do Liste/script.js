const form   = document.querySelector('form')
const input  = document.querySelector('form input')
const list   = document.querySelector('ul')
let allTasks = []

form.addEventListener('submit', e =>{

    e.preventDefault()
    let text = input.value.trim()
    // console.log(text);
    if(text !== ""){
        addTask(text)
        input.value = ''
    }

})

function addTask(text){

    const todo = {
        text,
        id : Date.now()  //return the number of ms since 1/1/1970
    }
    showList(todo)

}

function showList(todo){

    const item = document.createElement('li')
    item.setAttribute('data-key',todo.id)
    // console.log(item)
    const input = document.createElement('input')
    input.setAttribute('type','checkbox')
    // console.log(input)
    input.addEventListener('click',taskDone)
    item.appendChild(input)
    
    const txt = document.createElement('span')
    txt.innerText = todo.text
    item.appendChild(txt)
    // console.log(txt);

    const btn = document.createElement('button')
    btn.addEventListener('click',deleteTask)
    const img = document.createElement('img')
    img.setAttribute('src','imgs/close.svg')
    btn.appendChild(img)
    item.appendChild(btn)

    list.appendChild(item)
    allTasks.push(item)

}

function taskDone(e){
    e.target.parentNode.classList.toggle('finDeTache')
}

function deleteTask(e) {

    allTasks.forEach(el =>{
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove()
            allTasks = allTasks.filter(li =>{
                li.dataset.key !== el.dataset.key
            })
        }
    })
    
}