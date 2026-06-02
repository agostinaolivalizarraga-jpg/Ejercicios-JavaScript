function cambiarContenidoPrincipal() {

    let nuevoTitulo = "Bienvenidas a mi sitio web";
    let nuevaDescripcion = "Este contenido fue modificado con JavaScript.";

    document.getElementById("tituloPrincipal").innerHTML = nuevoTitulo;

    document.getElementById("descripcionPrincipal").innerHTML = nuevaDescripcion;

}

cambiarContenidoPrincipal();