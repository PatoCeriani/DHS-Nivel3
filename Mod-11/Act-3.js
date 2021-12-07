function enviarMensaje(){
    var textoIngresado = document.getElementById("inputMensaje").value;
    document.getElementById("parrafoMensaje").innerHTML = textoIngresado;
}