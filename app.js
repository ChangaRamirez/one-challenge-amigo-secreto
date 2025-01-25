//Inicializando elementos del DOM
const inputAmigo = document.getElementById("amigo");

//Inicializando variables
const nombres = [];

//Definiendo funciones
function agregarAmigo(){
  if (!inputAmigo.value) { //Aquí revisamos si el campo de input está vacío
    alert("Por favor, inserte un nombre");
    return; //De ser así, una alerta se muestra al usuario y terminamos la función
  } else {
    nombres.push(inputAmigo.value);
    inputAmigo.value = "";
    console.log(nombres); //Test de que los strings se almacenan correctamente en nombres
  }
}