class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        return `Nombre: ${this.nombre} - Peso: ${this.peso} Kg - Edad: ${this.edad} años`;
    }
}


class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
}

let perro1 = new Perro("Bosco", 18, 10, "Pastor Aleman");
let perro2 = new Perro("Mia", 20, 10, "Labrador");
let gato1 = new Gato("Mishu", 5, 5, "Macho");
let gato2 = new Gato("Mishiro", 5, 5, "Hembra");
let conejo1 = new Conejo("Conejo", 2, 1, "Blanco");
let conejo2 = new Conejo("Coneja", 2, 1, "Blanco");
let listaAnimales = [perro1, perro2, gato1, gato2, conejo1, conejo2]

function mostrarAnimales(){
    let listaUl = document.getElementById("listaDeAnimales");
    for(let mascota of listaAnimales){
        let li = document.createElement("li");
        li.innerText = mascota.informacion();
        listaUl.appendChild(li);
    }
    
}