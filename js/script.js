// variabili manipolazione DOM:
let button = document.querySelector("button");
let main = document.querySelector("main");
let container = document.querySelector(".container");
let endGame = document.getElementById("end");
let testoPunteggio = document.querySelector("h3");

let punteggio = [];

// al click su bottone mi genero la griglia:
button.addEventListener("click",
    function(){
        
        // prendo il div container e lo svuoto ogni volta al click:
        container.innerHTML = "";
        endGame.style.display= "none";
        punteggio = [];
        
        // genero 16 numeri casuali servendomi della funzione arrayRandom:
        let newArray = arrayRandom(16, 1, 100);

        // mi servo del ciclo per generarmi 100 boxes tramite la funzione newElement:
        for (let i = 1; i <= 100; i++){

            let cella = newElement();

            // aggancio la variabile cella al suo contenitore e ci inserisco il numero:
            container.append(cella);
            cella.innerHTML = i;

            // devo creare una funzione in cui al click se il numero fa parte dell'array si colora di rosso, altrimenti celeste:
            cella.addEventListener("click",
                function(){
                    

                    if(newArray.includes(i)){
                        cella.classList.add("bomb");
                        endGame.style.display= "block";
                        endGame.innerHTML = `Mi dispiace hai perso!`;
                    }else{
                        cella.classList.add("clicked-box");
                        // creo la condizione per il punteggio: se la i fa già parte dell'array non deve entrarci nuovamente. Cosi non mi prende il punteggio cliccando due volte su stessa cella:
                        if(!punteggio.includes(i)){
                            punteggio.push(i);
                            testoPunteggio.innerHTML = `SCORE: ${punteggio.length}`
                        }
                    }

                }
            );
        }
        
    }
);