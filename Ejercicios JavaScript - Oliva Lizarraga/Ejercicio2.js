const nombreAlumna = "Martina";
let entregoTrabajo = true;
let trabajoCompleto = false;
let entregaTarde = true;

if (entregoTrabajo == true && trabajoCompleto == true) {
    console.log(nombreAlumna + " entregó el trabajo completo.");

    if (entregaTarde == true) {
        console.log("La entrega fue fuera de fecha.");
    }

} else if (entregoTrabajo == true && trabajoCompleto == false) {
    console.log(nombreAlumna + " entregó el trabajo, pero tiene que corregirlo.");

    if (entregaTarde == true) {
        console.log("La entrega fue fuera de fecha.");
    }

} else {
    console.log(nombreAlumna + " todavía no entregó el trabajo.");
}
