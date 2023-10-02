function multiplicar(){
    //Obtenemos el valor del campo numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtenemos la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Mostrar resultados
    for(x=1; x<=10; x++){
        //calcular el resultado
        let numeroResultado = numeroTabla * x;

        //Armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " = " + numeroResultado;
        
        //Crear elemento li
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}