// Función predefinida
function numeroAzar (){
    return Math.trunc(Math.random()*6)+1
  }
  
  function mostrarDado(){
  var valorObtenido = numeroAzar();
  document.getElementById("indicadorValor").innerHTML = valorObtenido;
  }
   