// Función predefinida
function numeroAzar(limite){
    return Math.trunc(Math.random()*limite)+1
  }
  
function mostrarDados(){
    var valorDado1 = numeroAzar(8);
    var valorDado2 = numeroAzar(20);
    document.getElementById("indicadorDado1").innerHTML = valorDado1;
    document.getElementById("indicadorDado2").innerHTML = valorDado2;
    document.getElementById("indicadorTotal").innerHTML = valorDado1 + valorDado2;
}