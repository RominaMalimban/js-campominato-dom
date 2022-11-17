// variabili manipolazione DOM:
let button = document.querySelector("button");
let main = document.querySelector("main");
let container = document.querySelector(".container");

// al click su bottone mi genero la griglia:
button.addEventListener("click",
    function(){
        
        // prendo il div container e lo svuoto ogni volta al click:
        container.innerHTML = "";
        
        // genero 16 numeri casuali servendomi della funzione arrayRandom:
        let newArray = arrayRandom(16, 1, 100);
        console.log(newArray);
        // console.log(newArray[i]);

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
                        cella.classList.add("bomb")
                    }else{
                        cella.classList.add("clicked-box")
                    }

                }
            );

           
        }
        
    }
);


