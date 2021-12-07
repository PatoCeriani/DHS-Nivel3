function calcularAreaTriangulo(){
    var trianguloBase = parseInt(document.getElementById("baseT").value);
    var trianguloAltura = parseInt(document.getElementById("alturaT").value);
    var trianguloArea = trianguloBase * trianguloAltura / 2;
    document.getElementById("resultadoAreaTriangulo").innerHTML = trianguloArea + "cm<sup>2</sup>";

}

function calcularAreaCuadrado(){
    var ladoC = parseInt(document.getElementById("ladoC").value);
    var cuadradoArea = ladoC**2;
    document.getElementById("resultadoAreaCuadrado").innerHTML = cuadradoArea + "cm<sup>2</sup>";
}

function calcularAreaRectangulo(){
    var ladoCorto = parseInt(document.getElementById("ladoCorto").value);
    var ladoLargo = parseInt(document.getElementById("ladoLargo").value);
    var rectanguloArea = ladoCorto * ladoLargo;
    document.getElementById("resultadoAreaRectangulo").innerHTML = rectanguloArea + "cm<sup>2</sup>";
}

function calcularAreaCirculo(){
    var radioC = parseInt(document.getElementById("radioC").value);
    var circuloArea = (radioC**2) * Math.PI;
    document.getElementById("resultadoAreaCirculo").innerHTML = circuloArea + "cm<sup>2</sup>";

}

// function calcularCuadrado_click(){
//     var lado = recuperarValorEntero("ladoC");
//     var area = calcularAreaCuadrado2(lado);
//     mostrarTexto("resultadoAreaCuadrado", area.toString() + "cm<sup>2</sup>");
// }

// function recuperarValorEntero(nombreElemento){
//     return parseInt(document.getElementById(nombreElemento).value);
// }

// function mostrarTexto(nombreElemento, texto){
//     document.getElementById(nombreElemento).innerHTML = texto;
// }

// function calcularAreaCuadrado2(lado){
//     return lado**2;
// }
