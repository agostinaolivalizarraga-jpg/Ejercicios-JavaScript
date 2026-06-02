const frases = [
    "La práctica hace que el código salga mejor.",
    "Programar también es aprender a equivocarse.",
    "Una línea de código a la vez.",
    "No hace falta entender todo hoy, pero sí intentarlo.",
    "El error también es parte del proceso."
];

function mostrarFrase() {

    document.getElementById("fraseDelDia").innerHTML = frases[0];

}

mostrarFrase();