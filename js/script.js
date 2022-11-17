// variabili manipolazione DOM:
let button = document.querySelector("button");
let main = document.querySelector("main");
let container = document.querySelector(".container");

// al click su bottone mi genero la griglia:
button.addEventListener("click",
    function(){
        
        // 1- prendo il div container e lo svuoto ogni volta al click:
        container.innerHTML = "";
        
        // 2- mi servo del ciclo per generarmi 100 boxes tramite la funzione:
        for (let i = 1; i <= 100; i++){

            let cella = newElement();

            // aggancio la variabile cella al suo contenitore e ci inserisco il numero:
            container.append(cella);
            cella.innerHTML = i;

            // devo creare una funzione in cui al click sulla cella, questa si colora:
            // cella.addEventListener("click",
            //     function(){
            //         cella.classList.add("clicked-box");
            //         console.log(i);
            //     }
            // );

           
        }

        let newArray = arrayRandom(16, 1, 100);
        console.log(newArray)
    }
);


