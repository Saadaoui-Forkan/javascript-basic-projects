let showHideBtn = document.querySelector('.showHideBtn')
let showHideDiv = document.querySelector('.showHideDiv')
showHideDiv.style.display = 'none'

showHideBtn.addEventListener('click',()=>{
    if(showHideDiv.style.display === 'none'){
        showHideDiv.style.display = 'block'
        showHideBtn.textContent = 'Hide'
    }else{
        showHideDiv.style.display = 'none' 
        showHideBtn.textContent = 'Show'
    }
})


// -------------------------------------------------------
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
  ];

  let citation = document.getElementById('citation')
  let auteur   = document.getElementById('auteur')
  let nouveau  = document.getElementById('nouveau')
  let index    = 0
  nouveau.addEventListener('click',()=>{
      if(index<citations.length-1){
          index ++
          citation.innerText = citations[index][0]
          auteur.innerText = citations[index][1]
      }
      else{
          index = 0
          citation.innerText = citations[0][0]
          auteur.innerText = citations[0][1]
      }

  })

//   ---------------------------------
//   ---------- Projet 4 -------------

let input = document.querySelector('#prix')
let error = document.querySelector('small')
let form  = document.querySelector('#formulaire')

// cacher l'erreur
error.style.display = 'none'

// generer un nombre aleatoire
let numAleatoire = Math.floor(Math.random()*1001)

// verifier si l'utulisateur donne un nombre
let coups = 0
let numChoisi
input.addEventListener('keyup',()=>{
    if(isNaN(input.value)){
        error.style.display = 'block'
    }
    else{
        error.style.display = 'none'
    }
})
// la fonction qui s'affiche
function verifier(num){
    let instruction = document.createElement('div')
    if(num < numAleatoire){
        instruction.textContent = coups + ': ' + num + ' encore plus'
        instruction.classList.add('instruction' , 'plus')
    }
    else if( num > numAleatoire){
        instruction.textContent = coups + ': ' + num + ' encore moins'
        instruction.classList.add('instruction' , 'moins')
    }
    else{
        instruction.textContent = coups + ': ' + num + ' Felicitations! Vous avez trouver le nombre'
        instruction.classList.add('instruction' , 'fini')
    }
    document.querySelector('#instructions').prepend(instruction)
}

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(isNaN(input.value) || input.value == ''){
        input.style.borderColor = '#f7383b'
       
    }
    else{
        coups ++
        input.style.borderColor = '#ff7315'
        numChoisi = input.value
        input.value = ''
        console.log(coups)
        console.log(numChoisi)
        verifier(numChoisi)
       
    }
})

// ----------------------------------------------
// ----------- /* Projet n:4 */ -----------------

class Personnage{

    constructor(pseudo,classe,sante,attaque){
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }

    get information(){
        return this.pseudo + ':( ' + this.classe +' ) a' + this.sante +' points de vie et est au niveau ' + this.niveau
    }

    evoluer(){
        this.niveau ++ ;
        console.log(this.pseudo +': passe au niveau' + this.niveau + ' !')
    }

    verifierSante(){
        if(this.sante <= 0){
            this.sante == 0;
            console.log(this.sante + ':  a perdu !')
        }
    }

}

