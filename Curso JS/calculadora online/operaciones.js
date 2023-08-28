

function sumar(){
    let a = +document.getElementById("primerNumero").value;
    let b = +document.getElementById("segundoNumero").value;
    let operacion = (a + b);
    mostrarResultado(operacion);
}

function restar(){
    let a = +document.getElementById("primerNumero").value;
    let b = +document.getElementById("segundoNumero").value;
    let operacion = (a - b);
    mostrarResultado(operacion);
}

function multiplicar(){
    let a = +document.getElementById("primerNumero").value;
    let b = +document.getElementById("segundoNumero").value;
    let operacion = (a * +b);
    mostrarResultado(operacion);
}

function dividir(){
    let a = +document.getElementById("primerNumero").value;
    let b = +document.getElementById("segundoNumero").value;
    let operacion = (a / +b);
    mostrarResultado(operacion);
}

function potenciar(){
    let a = +document.getElementById("primerNumero").value;
    let b = +document.getElementById("segundoNumero").value;
    mostrarResultado(Math.pow(a, b));
}

function raiz(){
    let b = +document.getElementById("segundoNumero").value;
    mostrarResultado(Math.sqrt(b));
}

function valorAbsoluto(){
    let b = +document.getElementById("segundoNumero").value;
    mostrarResultado(Math.abs(b));
}

function redondear(){
    let resultado = +document.getElementById("textoResultado").value;
    mostrarResultado(Math.round(resultado));
}

function floor(){
    let b = +document.getElementById("segundoNumero").value;
    mostrarResultado(Math.floor(b));
}

function ceil(){
    let b = +document.getElementById("segundoNumero").value;
    mostrarResultado(Math.ceil(b));
}

function random(){
    let minimo = +document.getElementById("primerNumero").value;
    let maximo = +document.getElementById("segundoNumero").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
    
}

function mostrarResultado(resultado){
    document.getElementById("textoResultado").value = resultado;
}