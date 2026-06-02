const marca = {
    nombre: "Estudio Creativo Aurora",
    descripcion: "Diseñamos soluciones visuales para marcas que quieren crecer."
};

const servicios2 = [
    {
        nombre: "Diseño web",
        disponible: true
    },
    {
        nombre: "Identidad visual",
        disponible: true
    },
    {
        nombre: "Gestión de redes",
        disponible: false
    },
    {
        nombre: "Edición de video",
        disponible: true
    }
];

function mostrarMarca() {

    document.getElementById("tituloLanding").innerHTML = marca.nombre;

    document.getElementById("subtituloLanding").innerHTML = marca.descripcion;

}

function mostrarServiciosDisponibles() {

    let texto = "";

    for (let i = 0; i < servicios2.length; i++) {

        if (servicios2[i].disponible == true) {
            texto = texto + "Servicio: " + servicios2[i].nombre + ".";
        }

    }

    document.getElementById("serviciosLanding").innerHTML = texto;

}

mostrarMarca();
mostrarServiciosDisponibles();