let arrVAlue = []
let answers  = ['c','b','a','d']
const btn    = document.querySelector('button')

let boolArr  = []
const note   = document.querySelector('.note p')

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    
    for(let i=1 ; i<5 ; i++){
        arrVAlue.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    boolFunc(arrVAlue)
    // console.log(arrVAlue)
    
    arrVAlue = []
    
})

function boolFunc(tab){
    for(let i=0 ; i<4 ; i++ ){
        if(tab[i] === answers[i]){
            boolArr.push(true)
        } else{
            boolArr.push(false)
        }
    }
    // console.log(boolArr)
    filFunc(boolArr)
    show(boolArr)
    boolArr = []
}

function filFunc(arr){

    let nbFaults = arr.filter( el => el == false ).length

    switch (nbFaults){
        case 0:
            note.innerText = ` Nice Job 

            ✔️ 100% `
            break
        
        case 1:
            note.innerText = ` Good

            ✨ 75%
            `
            break
            
        case 2:
                note.innerText = ` Can do better

                Try another answer in the red box, then re-validate!

                ✨ 50%
                `
            break  

        case 3:
            note.innerText = ` Can do better

            Try another answer in the red box, then re-validate!

            😭 25%
            `
            break
            
        case 4:
            note.innerText = ` 👎👎👎

            Try another answer in the red box, then re-validate!

             00
            `
            break

        default:
            'Wops, There is a problem !!!'   
    }
}

function show(verifArr){
    for (let i=0 ; i<verifArr.length ; i++){
        if (verifArr[i] == true){
            document.querySelectorAll('.global-container')[i].style.backgroundColor = "#A3DA8D"
        }
        else{
            document.querySelectorAll('.global-container')[i].style.backgroundColor = "#FF5959"
        }
    }
}


const globalContainer = document.querySelectorAll('.global-container')
// console.log(globalContainer.length)
// for(let i=0 ; i<globalContainer.length ; i++){
//     globalContainer[i].addEventListener('click', myFunc)

//     function myFunc(){
//         globalContainer[i].style.backgroundColor = "white"
//     }
// }

globalContainer.forEach(item => {
     item.addEventListener('click' , ()=> {
     item.style.backgroundColor = "white"
    })
})

