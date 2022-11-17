// FUNCTIONS:

// Funzione per creare la cella:
function newElement(){
    let element = document.createElement("div");

    element.classList.add("box");
    return element;
}

// Funzione per creare numeri randomici con min e max:
function numRandom (min, max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

// Funzione per creare array di 16 numeri randomici: 
