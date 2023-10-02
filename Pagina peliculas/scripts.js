function enviarDatos(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("elementoMuestraPelicula");
    switch(genero){
        case "Drama":
            if (edad <13){
                genero = document.getElementById("botongenero").value;
                recomendacion.textContent = "Casablanca";
            } else {
                if (edad < 16){
                recomendacion.textContent = "The Shawshank Redemption";
                }
                else{
                    recomendacion.textContent = "Taxi Driver";
            }
        }
        break;
        case "Comedia":
            if (edad <13){
                genero = document.getElementById("botongenero").value;
                recomendacion.textContent = "Back to the Future";
            } else {
                if (edad < 16){
                recomendacion.textContent = "The Truman Show";
                }
                else{
                    recomendacion.textContent = "The Wolf of Wall Street";
            }
        }
        break;
        case "Musical":
            if (edad <13){
                genero = document.getElementById("botongenero").value;
                recomendacion.textContent = "La La Land";
            } else {
                if (edad < 16){
                recomendacion.textContent = "Les Miserables";
                }
                else{
                    recomendacion.textContent = "The Rocky Horror Picture Show";
            }
        }
        break;
        case "Crimen":
            if (edad <13){
                genero = document.getElementById("botongenero").value;
                recomendacion.textContent = "No hay peliculas";
            } else {
                if (edad < 16){
                recomendacion.textContent = "El secreto de sus ojos";
                }
                else{
                    recomendacion.textContent = "The Godfather";
            }
        }
        break;
    }
}