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
//     var lado = recuperarLadoCuadrado();
//     var area = calcularAreaCuadrado2(lado);
//     mostrarAreaCuadrado(area);
// }

// function recuperarLadoCuadrado(){
//     return parseInt(document.getElementById("ladoC").value);
// }

// function mostrarAreaCuadrado(area){
//     document.getElementById("resultadoAreaCuadrado").innerHTML = area.toString() + "cm<sup>2</sup>";
// }

// function calcularAreaCuadrado2(lado){
//     return lado**2;
// }
