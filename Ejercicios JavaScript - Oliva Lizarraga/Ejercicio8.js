const publicaciones = [
    {
        titulo: "Nuevo lanzamiento",
        red: "Instagram",
        estado: "aprobada"
    },
    {
        titulo: "Promo de temporada",
        red: "Facebook",
        estado: "pendiente"
    },
    {
        titulo: "Video institucional",
        red: "TikTok",
        estado: "corregir"
    }
];

function mostrarPublicaciones(lista) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].estado == "aprobada") {
            console.log(lista[i].titulo + " - " + lista[i].red + ": lista para publicar.");
        } else if (lista[i].estado == "pendiente") {
            console.log(lista[i].titulo + " - " + lista[i].red + ": falta aprobación.");
        } else {
            console.log(lista[i].titulo + " - " + lista[i].red + ": necesita correcciones.");
        }

    }

}

mostrarPublicaciones(publicaciones);