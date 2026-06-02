const personaje = {
    nombre: "Luna",
    rol: "Exploradora",
    energia: "alta",
    tieneMapa: true
};

function presentarPersonaje(personaje) {

    console.log(personaje.nombre + " es una " + personaje.rol + ".");

    if (personaje.energia == "alta") {
        console.log("Está lista para comenzar la aventura.");
    } else if (personaje.energia == "media") {
        console.log("Puede avanzar, pero debería descansar pronto.");
    } else {
        console.log("Necesita recuperar energía antes de seguir.");
    }

    if (personaje.tieneMapa == true) {
        console.log("Tiene un mapa para orientarse.");
    } else {
        console.log("No tiene mapa. Puede perderse.");
    }

}

presentarPersonaje(personaje);