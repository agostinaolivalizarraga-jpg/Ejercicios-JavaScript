const perfil = {
    nombre: "Camila",
    bio: "Estudiante de diseño multimedial.",
    interes: "Diseño web interactivo",
};

function mostrarPerfil() {

    document.getElementById("nombrePerfil").innerHTML = perfil.nombre;

    document.getElementById("bioPerfil").innerHTML = perfil.bio;

    document.getElementById("interesPerfil").innerHTML = "Interés principal: " + perfil.interes;

}

mostrarPerfil();