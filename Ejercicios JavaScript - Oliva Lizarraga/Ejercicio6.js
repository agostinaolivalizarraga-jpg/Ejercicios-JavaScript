const producto = {
    nombre: "Agenda creativa",
    categoria: "Papelería",
    color: "Lila",
    disponible: true,
    destacado: true
};

function mostrarProducto(producto) {

    console.log("Producto: " + producto.nombre);
    console.log("Categoría: " + producto.categoria);
    console.log("Color: " + producto.color);

    if (producto.disponible == true) {
        console.log("Disponible: Sí");
    } else {
        console.log("Disponible: No");
    }

    if (producto.destacado == true) {
        console.log("Este producto aparece en la página principal.");
    }

}

mostrarProducto(producto);