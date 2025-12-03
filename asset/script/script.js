const plus = document.getElementById('incrementBtn');
const moins = document.getElementById('decrementBtn');
const Counter = document.getElementById('countLabel');
const clear = document.getElementById('resetBtn');
const flexrow = document.querySelectorAll(".flex-row");
let variableX = 1;
let count = 0;

const sauvegarder = document.getElementById('Sauvegarder');
const batonnet = document.getElementById('thuglife');
const multiplier = document.getElementById('Multiplier');
const auto_clicker = document.getElementById('auto-clicker');
const reset = document.getElementById('Reset');
let nombreAutoclickers = 0;
let multipliercompteur = 0;
let prixmultiplier = 5;
let auto_clicker_compter = 0;
let prix_auto_clicker = 5;
window.onload = loadGame;

//function
function augmenter() {
    count += variableX;
    
    document.getElementById("countLabel").innerHTML = count;
  if(count >= prix_auto_clicker)
    {
        flexrow[0].style.backgroundColor = "#ecb556";
    }

   if(count < prix_auto_clicker) {
        flexrow[0].style.backgroundColor = "#838080ff";
    }

      if(count >= prixmultiplier)
    {
        flexrow[1].style.backgroundColor = "#ecb556";
    }

   if(count < prixmultiplier) {
        flexrow[1].style.backgroundColor = "#838080ff";
    }


};


function animationA(){
batonnet.classList.add("classAnimation");
};
function animationB(){
batonnet.classList.remove("classAnimation");
};
function multiplierX(){
    if(count >= prixmultiplier)
      {
        variableX +=1;
        count -= prixmultiplier;
        prixmultiplier = CalculerPrixMultiplier();
        multipliercompteur++;
       document.getElementById("countLabel").innerHTML = count;
       document.getElementById("NBFclick").innerHTML = multipliercompteur +1;
        document.getElementById("upgrader").innerHTML = multipliercompteur +1;
        console.log(multipliercompteur);
         // autoclicker
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";

    //upgradepatte
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";
      }  
};


function auto_clickerMarket(){
    if(count >= prix_auto_clicker){
        count -= prix_auto_clicker;
        prix_auto_clicker = CalculerPrixAutoClicker();
        document.getElementById("countLabel").innerHTML = count;
    auto_clicker_compter++;
    document.getElementById('auto-clicker').innerHTML = auto_clicker_compter;
    document.getElementById('NBFauto').innerHTML = auto_clicker_compter;
    

       // autoclicker
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";

    //upgradepatte
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";
    }
}

//set time function
setInterval(function() {
    count += auto_clicker_compter; // Ajoute 1 clic pour chaque autoclicker possédé
    document.getElementById("countLabel").innerHTML = count;

    // autoclicker
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";

    //upgradepatte
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";

    //update boutton click on/off
      if(count >= prix_auto_clicker)
    {
        flexrow[0].style.backgroundColor = "#ecb556";
        flexrow[0].style.cursor = "pointer";
    }

   if(count < prix_auto_clicker) {
        flexrow[0].style.backgroundColor = "#838080ff";
         flexrow[0].style.cursor = "not-allowed";
    }

      if(count >= prixmultiplier)
    {
        flexrow[1].style.backgroundColor = "#ecb556";
        flexrow[1].style.cursor = "pointer";
    }

   if(count < prixmultiplier) {
        flexrow[1].style.backgroundColor = "#838080ff";
        flexrow[1].style.cursor = "not-allowed";
    }

}, 1000);

// courbe de prix function
function CalculerPrixAutoClicker(){

    let base = 5;
    let alpha = 0.25;
    let beta = 1.05;
    let prix = base += Math.pow(1 + alpha, Math.pow(auto_clicker_compter, beta));
    return Math.round(prix);
}

function CalculerPrixMultiplier(){
   
    let base = 5;
    let alpha = 0.25;
    let beta = 1.05;
    let prix = base += Math.pow(1 + alpha, Math.pow(multipliercompteur, beta));
    return Math.round(prix);
}
//function localStorage
function storagePowa(){
    if(count >0 ){
        localStorage.setItem('NB_de_Friandise',count);
    }
    if(auto_clicker_compter >0){
    localStorage.setItem('NB_de_auto_Patte',auto_clicker_compter);
    }
    if(multipliercompteur > 0){
    localStorage.setItem('NB_de_Patte-upgrade',multipliercompteur);
    }
    console.log("test hello worlds!");
}
function loadGame() {
    auto_clicker_compter = parseInt(localStorage.getItem('NB_de_auto_Patte')) || 0;
    count = parseInt(localStorage.getItem('NB_de_Friandise')) || 0;
    multipliercompteur = parseInt(localStorage.getItem('NB_de_Patte-upgrade')) || 0;

    document.getElementById("NBFclick").innerHTML = multipliercompteur +1;
    document.getElementById("upgrader").innerHTML = multipliercompteur +1;
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";
    document.getElementById("countLabel").innerHTML = count;
    document.getElementById('auto-clicker').innerHTML = auto_clicker_compter;
    document.getElementById('NBFauto').innerHTML = auto_clicker_compter;
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";
    document.getElementById("countLabel").innerHTML = count;
    document.getElementById('autocost').innerHTML = prix_auto_clicker + " Friandise cost";
    document.getElementById('upgradecost').innerHTML = prixmultiplier + " Friandise cost";
    prix_auto_clicker = CalculerPrixAutoClicker();
    prixmultiplier = CalculerPrixMultiplier();
    localStorage.clear();
}

//action
batonnet.addEventListener("click", augmenter);
batonnet.addEventListener("mouseup", animationA);
batonnet.addEventListener("mousedown", animationB);


moins.addEventListener("click", multiplierX);


plus.addEventListener("click", auto_clickerMarket);

plus.addEventListener("click", CalculerPrixAutoClicker);

sauvegarder.addEventListener("click", storagePowa);