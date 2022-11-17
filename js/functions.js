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
function arrayRandom(quantita, numMinimo, numMassimo){

    //creo il mio array vuoto nel quale devo inserire i numeri random:
    let myArray = [];

    // attraverso il ciclo while dico quanti numeri voglio:
    while(myArray.length < quantita){
        // mi salvo in una variabile la funzione per generare numeri random:
        let newNum = numRandom(numMinimo, numMassimo); 
        
        // però devo dirgli che se newNum fa già parte dell'array non deve entrarci nuovamente:
        if(!myArray.includes(newNum)){
            myArray.push(newNum);
        }

        // infine ritorno l'array:
        return myArray;
    }
}