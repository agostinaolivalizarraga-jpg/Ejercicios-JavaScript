const peliculas = [
    {
        titulo: "Coco",
        genero: "animación",
        recomendada: true
    },
    {
        titulo: "Interestelar",
        genero: "ciencia ficción",
        recomendada: true
    },
    {
        titulo: "Una película aburrida",
        genero: "drama",
        recomendada: false
    }
];

function mostrarPeliculasRecomendadas() {

    let texto = "";

    for (let i = 0; i < peliculas.length; i++) {

        if (peliculas[i].recomendada == true) {
            texto = texto + peliculas[i].titulo + " - " + peliculas[i].genero + ".";
        }

    }

    document.getElementById("resultadoPeliculas").innerHTML = texto;

}

mostrarPeliculasRecomendadas();