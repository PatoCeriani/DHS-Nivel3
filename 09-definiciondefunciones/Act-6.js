function iniciarSesion(){
    var nombre = prompt("Ingresa tu nombre");
    document.getElementById("mensaje").innerHTML = "¡Hola " + nombre + "!";
}
function cerrarSesion(){
    document.getElementById("mensaje").innerHTML = "Inicia sesión por favor";
}