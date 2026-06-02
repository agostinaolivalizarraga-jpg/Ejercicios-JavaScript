const secciones1 = ["Inicio", "Sobre mí", "Portfolio", "Servicios", "Contacto"];

function buscarSeccion(lista, seccionBuscada) {

    let encontrada = false;

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] == seccionBuscada) {
            encontrada = true;
        }

    }

    if (encontrada == true) {
        console.log("La sección " + seccionBuscada + " existe en el sitio.");
    } else {
        console.log("La sección " + seccionBuscada + " no existe en el sitio.");
    }

}

buscarSeccion(secciones1, "Portfolio"); 
buscarSeccion(secciones1, "Blog"); 
