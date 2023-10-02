let calificaciones = [4.1,4.5,3.1,4.2,2.1];

function mostrarCalificaciones(){
    let elementoTexto= document.getElementById("espacioParaCalificaciones");
    for(contador of calificaciones){
        let itemLista = document.createElement("li");

        itemLista.innerText = contador;

        elementoTexto.appendChild(itemLista);

    }
}

function Promedio(){
    let contador = 0;
    for(let i=0; i<calificaciones.length; i++){
        contador = contador + calificaciones[i];
    }
    let promedio = +(contador/calificaciones.length);
    document.getElementById("elementoMuestraTexto").innerText = promedio;

}

function NotaMasAlta(){
    let notaalta=0;
    let i=0;
    while(i < calificaciones.length){
        if(calificaciones[i] > notaalta){
            notaalta=calificaciones[i];
        }
        i++;
        document.getElementById("elementoMuestraTexto").innerText = notaalta;
    }
}


function Aplazo(){
    do {
        for(let i=0; i<calificaciones.length; i++){
            if(calificaciones[i] < 4){
                let elementoTexto= document.getElementById("elementoMuestraTexto");
                elementoTexto.innerText = "aplazo por calificacion " + calificaciones[i];
            }
        }
    } while (calificaciones[i] <= 4);
}
