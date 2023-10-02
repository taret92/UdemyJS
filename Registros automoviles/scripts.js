function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let Automovil1 = new Automovil("Ford", "Fiesta", "Rojo", 2019, "Juan");
let Automovil2 = new Automovil("Chevrolet", "Spark", "blanco", 2010, "pedro");
let Automovil3 = new Automovil("Nissan", "Versa", "Azul", 2015, "Maria");
let lista = [Automovil1, Automovil2, Automovil3];

Automovil.prototype.venderAutomovil = function (nuevoTitular){
    this.titular = nuevoTitular;
};

Automovil.prototype.verAuto= function(){
    return `Marca: ${this.marca} Modelo: ${this.modelo} Color: ${this.color} Año: ${this.anio} Titular: ${this.titular}`;
};

Automovil.prototype.encender= function(){
    console.log("El automovil esta en marcha");
}

function mostrarAuto(){

    let listaUl = document.getElementById("listaAutomoviles");
    for(automovil of lista){
        let li = document.createElement("li");
        li.innerHTML = automovil.verAuto();
        listaUl.appendChild(li);
    }

}
