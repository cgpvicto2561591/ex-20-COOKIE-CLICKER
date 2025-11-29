const plus = document.getElementById('incrementBtn');
const moins = document.getElementById('decrementBtn');
const Counter = document.getElementById('countLabel');
const clear = document.getElementById('resetBtn');

let variableX = 1;
let count = 0;


const batonnet = document.getElementById('thuglife');
const multiplier = document.getElementById('Multiplier');
const auto_clicker = document.getElementById('auto-clicker');
const reset = document.getElementById('Reset');
let nombreAutoclickers = 0;
let multipliercompteur = 0;
let prixmultiplier = 5;
let auto_clicker_compter = 0;
let prix_auto_clicker = 5;


//function
function augmenter() {
    count += variableX;
    
    document.getElementById("countLabel").innerHTML = count;
};

function clearConsole() {
    count = 0;
    variableX = 1;
    document.getElementById("countLabel").innerHTML = count;
    multipliercompteur = 0;
     document.getElementById('Multiplier').innerHTML = multipliercompteur;
    auto_clicker_compter =0;
     document.getElementById('auto-clicker').innerHTML = auto_clicker_compter
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
        document.getElementById('NBcookieclick').innerHTML = multipliercompteur +1;
       document.getElementById('Multiplier').innerHTML = multipliercompteur +1;
       document.getElementById("countLabel").innerHTML = count;
      }  
};


function auto_clickerMarket(){
    if(count >= prix_auto_clicker){
        count -= prix_auto_clicker;
        prix_auto_clicker = CalculerPrixAutoClicker();
        document.getElementById("countLabel").innerHTML = count;
    auto_clicker_compter++;
    document.getElementById('auto-clicker').innerHTML = auto_clicker_compter;
     document.getElementById("NBcookieauto").innerHTML = auto_clicker_compter;
    }
}

//set time function
setInterval(function() {
    count += auto_clicker_compter; // Ajoute 1 clic pour chaque autoclicker possédé
    document.getElementById("countLabel").innerHTML = count;
}, 1000);

// courbe de prix function
function CalculerPrixAutoClicker(){

    let base = 5;
    let alpha = 0.25;
    let beta = 1.05;
    let prix = base += Math.pow(1 + alpha, Math.pow(auto_clicker_compter, beta));
     console.log(prix + "autoclicker");
     console.log(auto_clicker_compter);
    return Math.round(prix);
}

function CalculerPrixMultiplier(){
   
    let base = 5;
    let alpha = 0.25;
    let beta = 1.05;
    let prix = base += Math.pow(1 + alpha, Math.pow(multipliercompteur, beta));
     console.log(Math.round(prix) + "multiplier");
      console.log(prixmultiplier);
    return Math.round(prix);
}



//action
batonnet.addEventListener("click", augmenter);
batonnet.addEventListener("mouseup", animationA);
batonnet.addEventListener("mousedown", animationB);


clear.addEventListener("click", clearConsole);

moins.addEventListener("click", multiplierX);


plus.addEventListener("click", auto_clickerMarket);

plus.addEventListener("click", CalculerPrixAutoClicker);

