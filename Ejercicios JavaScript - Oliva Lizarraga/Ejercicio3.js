const secciones = ["Inicio", "Sobre mí", "Portfolio", "Servicios", "Contacto"];

function mostrarSecciones(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log("Sección disponible: " + lista[i]);
    }
}

mostrarSecciones(secciones);