function crearParrafoTienda(textoLabel, valorMin){
    //crear etiqueta parrafo
    let elementoParrafo = document.createElement("p");

    //crear etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";
    //conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //crear input
    let elementoInput = document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver parrafo
    return elementoParrafo;

}

function crearTiendas(contenedorID, min, cantidadTiendas){
    //encontrar contenedor por id
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tiendas
    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function extraerNumeroDesdeElemento(elemento){

    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular() {
    let ventas=[];

    let posicionVentas = 0;

    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);

    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){

        item.children[1].className = "inputNormal";

        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        if (valorVenta == ventaMayor){
            item.children[1].className = "inputMayor";
        }
        if (valorVenta == ventaMenor){
            item.children[1].className="inputMenor";
        }
    }
    

    let mensajeSalida = "Total ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafosalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array){
    let total = 0;

    for (let venta of array) {
        total = total + venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if (venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if (venta < minimo){
            minimmo = venta;
        }
    }
    return minimo;
}




