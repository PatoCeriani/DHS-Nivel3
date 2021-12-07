var nombreDelMonstruo = "Adria";
var cantidadDeBrazos = 8;
var ataqueSimple = 40;
var ataqueCompleto = cantidadDeBrazos * ataqueSimple;
document.getElementById("tituloNombre").innerHTML = nombreDelMonstruo;
document.getElementById("indicadorBrazos").innerHTML = cantidadDeBrazos;
document.getElementById("indicadorAtaqueSimple").innerHTML = ataqueSimple;
document.getElementById("indicadorAtaqueCompleto").innerHTML = ataqueCompleto;