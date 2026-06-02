const servicios = ["Diseño web", "Branding", "Community management", "Edición de video"];

function generarMensajeServicio(servicio) {
    return "Servicio disponible: " + servicio + ". Consultanos para más información.";
}

function generarMensajesServicios(listaServicios) {

    for (let i = 0; i < listaServicios.length; i++) {
        console.log(generarMensajeServicio(listaServicios[i]));
    }

}

generarMensajesServicios(servicios);