function usuario(legajoUsuario, nombreUsuario,apellidoUsuario, nacimientoUsuario, cargoUsuario){
    this.legajoUsuario = legajoUsuario;
    this.nombreUsuario = nombreUsuario;
    this.apellidoUsuario = apellidoUsuario;
    this.nacimientoUsuario = nacimientoUsuario;
    this.cargoUsuario = cargoUsuario;
}

let listaUsuarios = [];

function enviarInformacion(){
let legajoUsuario = document.getElementById("legajoUsuario").value;
let nombreUsuario = document.getElementById("nombreUsuario").value;
let apellidoUsuario = document.getElementById("apellidoUsuario").value;
let nacimientoUsuario= document.getElementById("nacimientoUsuario").value;
let cargoUsuario= document.getElementById("cargoUsuario").value;

let nuevoUsuario = new usuario(legajoUsuario, nombreUsuario, apellidoUsuario, nacimientoUsuario, cargoUsuario);
listaUsuarios.push(nuevoUsuario);

}

function mostrarEmpleados(){
    let informacion = "";
    for(let i = 0; i < listaUsuarios.length; i++){
        informacion += listaUsuarios[i].legajoUsuario;
        informacion += listaUsuarios[i].nombreUsuario;
        informacion += listaUsuarios[i].apellidoUsuario;
        informacion += listaUsuarios[i].nacimientoUsuario;
        informacion += listaUsuarios[i].cargoUsuario;
    }
    alert(informacion);

}