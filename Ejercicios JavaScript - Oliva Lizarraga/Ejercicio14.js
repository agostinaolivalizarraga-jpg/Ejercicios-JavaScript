const banda = {
    nombre: "Las Cósmicas",
    descripcion: "Banda indie pop formada en Buenos Aires.",
    canciones: ["Luces de neón", "Verano lunar", "Planeta azul", "Nada que perder"],
};

function mostrarBanda() {

    document.getElementById("nombreBanda").innerHTML = banda.nombre;

    document.getElementById("descripcionBanda").innerHTML = banda.descripcion;

    let textoCanciones = "Canciones:";

    for (let i = 0; i < banda.canciones.length; i++) {
        textoCanciones = textoCanciones + "- " + banda.canciones[i] + ".";
    }

    document.getElementById("listaCanciones").innerHTML = textoCanciones;

}

mostrarBanda();