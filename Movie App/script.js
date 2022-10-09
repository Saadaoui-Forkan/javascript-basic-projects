
// header animation
const inp = document.querySelector("header input")
inp.addEventListener('input', (e)=>{
    if (e.target.value !== ''){
        e.target.parentNode.classList.add('active')
    }
    else{
        e.target.parentNode.classList.remove('active')
    }
})

// 