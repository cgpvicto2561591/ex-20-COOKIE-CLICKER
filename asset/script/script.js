const plus = document.getElementById('incrementBtn');
const moins = document.getElementById('decrementBtn');
const Counter = document.getElementById('countLabel');
const clear = document.getElementById('resetBtn');

let variableX = 1;
let count = 0;

function augmenter() {
    count += variableX;
    if(count<0) {
        document.getElementById("countLabel").classList.add("estrouge");
        document.getElementById("countLabel").classList.remove("estnoire");
    } else {
        document.getElementById("countLabel").classList.remove("estrouge");
        document.getElementById("countLabel").classList.add("estnoire");
    }
    document.getElementById("countLabel").innerHTML = count;
}


function diminuer() {
    count--;
    if(count<0) {
        document.getElementById("countLabel").classList.add("estrouge");
        document.getElementById("countLabel").classList.remove("estnoire");
    } else {
        document.getElementById("countLabel").classList.remove("estrouge");
        document.getElementById("countLabel").classList.add("estnoire");
    }
    document.getElementById("countLabel").innerHTML = count;
}

function clearConsole() {
    count = 0;
    variableX = 1;
      if(count<0) {
        document.getElementById("countLabel").classList.add("estrouge");
        document.getElementById("countLabel").classList.remove("estnoire");
    } else {
        document.getElementById("countLabel").classList.remove("estrouge");
        document.getElementById("countLabel").classList.add("estnoire");
    }
    document.getElementById("countLabel").innerHTML = count;
};

// if(count<0)
// {
//     document.getElementById(countLabel).style.color = red;
// }
clear.addEventListener("click", clearConsole);

moins.addEventListener("click", multiplierX);

// plus.onclick = augmenter();
plus.addEventListener("click", augmenter);



/* plus rapide utiliser ceci pcq chu cool dememe!
   if(count<0) {
        document.getElementById("countLabel").style.color = "red";
    } else {
        document.getElementById("countLabel").style.color = "black";
    }
        */



// Cookie clicker
const batonnet = document.getElementById('thuglife');
let nombreAutoclickers = 0;

//function
function animationA(){
batonnet.classList.add("classAnimation");

}
function animationB(){
batonnet.classList.remove("classAnimation");

}
function multiplierX(){
    variableX +=1;
}
//action
batonnet.addEventListener("click", augmenter);
batonnet.addEventListener("mouseup", animationA);
batonnet.addEventListener("mousedown", animationB);

//Achat : Lorsque vous achetez un autoclicker dans le jeu, cela incrémente un compteur interne (par exemple, nombreAutoclickers).
// Mécanisme interne : Le jeu exécute une boucle de jeu principale ou un intervalle de temps qui vérifie combien d'autoclickers sont actifs.
// Simulation de clics : À chaque intervalle (par exemple, toutes les secondes), le jeu ajoute automatiquement au score les points générés par les autoclickers possédés. C'est l'équivalent de simuler un clic sur le bouton principal, mais sans interaction réelle de la souris. 
// Implémentation en JavaScript
// Pour créer un système d'autoclicker simple en JavaScript, vous auriez besoin de variables pour suivre le nombre de clics, le nombre d'autoclickers, et une fonction pour déclencher des clics automatiques à l'aide de setInterval().

// let clics = 0;
// let autoclickers = 0;
// const coutAutoclicker = 10;
// const boutonPrincipal = document.getElementById('boutonPrincipal');
// const acheterAutoclickerBtn = document.getElementById('acheterAutoclicker');
// const compteurClicsEl = document.getElementById('compteurClics');
// const compteurAutoclickersEl = document.getElementById('compteurAutoclickers');

// // Fonction pour mettre à jour l'affichage
// function mettreAJourAffichage() {
//     compteurClicsEl.textContent = clics;
//     compteurAutoclickersEl.textContent = autoclickers;
// }

// // 1. Clic manuel
// boutonPrincipal.addEventListener('click', function() {
//     clics++;
//     mettreAJourAffichage();
// });

// // 2. Achat d'autoclicker
// acheterAutoclickerBtn.addEventListener('click', function() {
//     if (clics >= coutAutoclicker) {
//         clics -= coutAutoclicker;
//         autoclickers++;
//         mettreAJourAffichage();
//     } else {
//         alert("Pas assez de clics pour acheter un autoclicker !");
//     }
// });

// // 3. Boucle automatique (le fonctionnement de l'autoclicker)
// // Cette fonction simule les clics toutes les secondes
// setInterval(function() {
//     clics += autoclickers; // Ajoute 1 clic pour chaque autoclicker possédé
//     mettreAJourAffichage();
// }, 1000); // 1000 millisecondes = 1 seconde

// // Initialisation de l'affichage au chargement de la page
// mettreAJourAffichage();
