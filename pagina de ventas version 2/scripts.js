function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular() {
    let ventas=[];

    ventas[0] = extraerNumeroDesdeElemento("ventastienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventastienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventastienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventastienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventastienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventastienda6");

    let totalVentas = sumarTotal(ventas);

    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total ventas: " + totalVentas + "<br>" + "Venta mayor: " + ventaMayor + "<br>" + "Venta menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafosalida");

    elementoSalida.innerHTML = mensajeSalida;
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




