
// input animation
const searchInput = document.querySelector('form input')
searchInput.addEventListener('input', (e)=>{
    if(e.target.value !== ""){
        e.target.parentNode.classList.add("active")
    }else {
        e.target.parentNode.classList.remove("active")
    }
})


// جلب البيانات 

let allPokemon = [];
let lastArr = [];

let url= "https://pokeapi.co/api/v2/pokemon?limit=200"
function fetchPoke (){
    fetch(url)
    .then(res => res.json())
    .then((allPoke) =>{
        // console.log(allPoke)
        allPoke.results.forEach((pokemon) => {

            fetchPokeFull(pokemon)
            // console.log(pokemon.url)
        });
       
    })
}
fetchPoke()

function fetchPokeFull(pokemon){

    let urlP           = pokemon.url
    let nameP          = pokemon.name
    let objPokemonFull = {}
    // console.log(urlP);

    fetch(urlP)
    .then( resP => resP.json())
    .then((pokeData) =>{
        // console.log(pokeData)
        objPokemonFull.pic  = pokeData.sprites.front_default   //صورة البوكيمون
        objPokemonFull.type = pokeData.types[0].type.name    //نوع البوكيمون
        objPokemonFull.id   = pokeData.id

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then(re => re.json())
        .then((pokeData) =>{
            // console.log(pokeData)
            objPokemonFull.name = pokeData.names[8].name  //إختيار اللغة الإنجليزية لأسماء البوكيمون (العربية غير متوفرة)
            allPokemon.push(objPokemonFull)

            if (allPokemon.length == 200){
                // console.log(allPokemon);
                lastArr = allPokemon.sort((a,b) =>{
                    return a.id - b.id
                })

                createCard(lastArr)
                const chargement = document.querySelector('.loading')
                chargement.style.display = "none"
            }
        })

    })

}
 
const listPoke = document.querySelector('.list-poke');
const types = {
    grass: '#78c850',
	ground: '#E2BF65',
	dragon: '#6F35FC',
	fire: '#F58271',
	electric: '#F7D02C',
	fairy: '#D685AD',
	poison: '#966DA3',
	bug: '#B3F594',
	water: '#6390F0',
	normal: '#D9D5D8',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6'
}

function createCard(arr){

    for(let i = 0; i < arr.length; i++) {

        const card = document.createElement('li');
        let color = types[arr[i].type];
        card.style.background = color;
        const txtCard = document.createElement('h5');
        txtCard.innerText = arr[i].name;
        const idCard = document.createElement('p');
        idCard.innerText = `ID# ${arr[i].id}`;
        const imgCard = document.createElement('img');
        imgCard.src = arr[i].pic;

        card.appendChild(imgCard);
        card.appendChild(txtCard);
        card.appendChild(idCard);

        listPoke.appendChild(card);

    }

}

// Infinite scroll

// window.addEventListener("scroll", ()=>{

//     const{scrollTop, scrollHeight, clientHeight} = document.documentElement
//     // scrollTop: scroll depuis le top
//     // scrollHeight: scroll total
//     // clientHeight: la partie visible

//     if(clientHeight + scrollTop >= scrollHeight){
//         addPoke(6)
//     }
// })

// let nb = 21
// function addPoke(num){
//     if (nb>200){
//         return;
//     }
//     const arrToAdd = allPokemon.slice(nb,nb+num)
//     createCard(arrToAdd)
//     nb += num
// }

// searching

// searchInput.addEventListener('keyup', searching)
const formSearch = document.querySelector('form')
formSearch.addEventListener('submit', (e)=>{
    e.preventDefault()
    searching()
})

function searching(){
    
    let filter, allLi, titleValue, allTitles;
    // console.log(allTitles);
    filter    = searchInput.value.toUpperCase()
    allLi     = document.querySelectorAll("li")
    allTitles = document.querySelectorAll("li > h5")

    for(i=0; i<allLi.length; i++) {

        titleValue = allTitles[i].innerText
        if(titleValue.toUpperCase().indexOf(filter)>-1){
            allLi[i].style.display = "block"
        }else {
            allLi[i].style.display = "none"
        }

    }


}
// search()