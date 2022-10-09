//  Date d'expiration
const today = new Date()
const nextWeek = new Date(today.getTime() + 7*24*60*60*1000)
// console.log(nextWeek);
let day = ('0' + nextWeek).slice(9,11)
// console.log(day);
let month = ('0' + (today.getMonth() + 1)).slice(-2)
// console.log(month);
let year = today.getFullYear()
// console.log(year);
// console.log(('0'+nextWeek).slice(12,16))
let inputDate = document.querySelector('#date')
inputDate.value = `${year}-${month}-${day}`

const affichage = document.querySelector(".affichage")
const btns      = document.querySelectorAll("button")
const inputs    = document.querySelectorAll("input")
const infoTxt   =document.querySelector(".info-txt")

btns.forEach(btn =>{
    btn.addEventListener('click',btnAction)
})

function btnAction(e) {

    let nvObj = {}

    inputs.forEach(input =>{

        let attrName = input.getAttribute('name')
        let attrValeur = attrName !== "cookieExpire" ? input.value : input.valueAsDate
        nvObj[attrName] = attrValeur
        
    })
    
    let description = e.target.getAttribute("data-cookie")
    // console.log(description);

    if (description === "creer"){
        creerCoockie(nvObj.cookieName, nvObj.cookieValue, nvObj.cookieExpire)
    }else if(description === "toutAfficher"){
        listeCookie()
    }
    
}

let dejaFait = false

function creerCoockie(name, value, exp){

    infoTxt.innerText = ""

    affichage.innerHTML = "";

    // si le cookie a le meme nom
    let cookies = document.cookie.split(";")
    // console.log(cookies)
    cookies.forEach(cookie =>{
        cookie.trim()
        // console.log(cookie)
        let formatCookie = cookie.split('=')
        // console.log(formatCookie);
        if(formatCookie[0] === encodeURIComponent(name)){
            dejaFait = true
        }
    })
    if(dejaFait){
        infoTxt.innerText = `Un cookie possède déja ce nom`
        dejaFait = false
        return
    }

    // si le cookie n'a pas de nom
    if(name.length === 0){
        infoTxt.innerText = `Impossible de définir un cookie sans nom.`
        return
    }

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${exp.toUTCString()}`;
    let info = document.createElement('li')
    info.innerText = `Le cookie ${name} est bien crée`
    affichage.appendChild(info)
    setTimeout(()=>{
        info.remove()
    },2000)

}

function listeCookie(){

    let cookies = document.cookie.split(";")
    if(cookies.join === ""){
        infoTxt.innerText = `Pas de coockie à afficher.`
        return
    }

    cookies.forEach(cookie =>{

        cookie = cookie.trim();
        let formatCookie = cookie.split('=');

        // console.log(formatCookie);
        let item = document.createElement('li');
        
        infoTxt.innerText = 'Cliquez sur un cookie dans la liste pour le supprimer.'
        item.innerText = `Nom : ${decodeURIComponent(formatCookie[0])}, Valeur : ${decodeURIComponent(formatCookie[1])}`;
        affichage.appendChild(item);

        // Suppression cookie
        item.addEventListener('click', () => {

            document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`
            item.innerText = `Cookie ${formatCookie[0]} supprimé`;
            setTimeout(() => {
                item.remove();
            }, 1000);

        })
    })

}
