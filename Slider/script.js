const imgs    = document.querySelectorAll(".cont-slides img")
const precedent    = document.querySelector(".left")
const suivant   = document.querySelector(".right")
const cercles = document.querySelectorAll(".cercle")
let index     = 0

suivant.addEventListener("click", imgSuivante)
function imgSuivante() {
    if (index < 5) {
        
        imgs[index].classList.remove("active")
        index ++
        imgs[index].classList.add("active")

    } else if(index == 5){

        imgs[index].classList.remove("active")
        index = 0
        imgs[index].classList.add("active")

    }

    for (let i = 0; i < cercles.length; i++) {
        
        if (cercles[i].getAttribute('data-clic')-1 === index) {
            cercles[i].classList.add("active-cercle")
        } else{
            cercles[i].classList.remove("active-cercle") 
        }
        
    }

}

precedent.addEventListener("click", imgPrecedente)
function imgPrecedente() {
    if (index > 0) {
        
        imgs[index].classList.remove("active")
        index --
        imgs[index].classList.add("active")

    } else if(index == 0){

        imgs[index].classList.remove("active")
        index = 5
        imgs[index].classList.add("active")

    }

    for (let i = 0; i < cercles.length; i++) {
        
        if (cercles[i].getAttribute('data-clic')-1 === index) {
            cercles[i].classList.add("active-cercle")
        } else{
            cercles[i].classList.remove("active-cercle") 
        }
        
    }

}

cercles.forEach((item, i) => {

  
    item.addEventListener('click', () => {
      
    
  
      cercles.forEach(option => {
        
        option.classList.remove('active-cercle');
  
      })

      imgs.forEach(img => {
        
        img.classList.remove('active');
  
      })
      
      item.classList.add('active-cercle');
      imgs[i].classList.add("active")
      
    });
  
  });