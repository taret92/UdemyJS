function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular() {
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extraerNumeroDesdeElemento("ventastienda1");
    ventas2 = extraerNumeroDesdeElemento("ventastienda2");
    ventas3 = extraerNumeroDesdeElemento("ventastienda3");
    ventas4 = extraerNumeroDesdeElemento("ventastienda4");
    ventas5 = extraerNumeroDesdeElemento("ventastienda5");
    ventas6 = extraerNumeroDesdeElemento("ventastienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "Total ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafosalida");

    elementoSalida.innerHTML = mensajeSalida;
}

