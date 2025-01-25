//Inicializando elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");

//Inicializando variables
const nombres = [];

//Definiendo funciones
function agregarAmigo(){
  //Aquí revisamos si el campo de input está vacío
  if (!inputAmigo.value) {
    //De ser así, una alerta se muestra al usuario y terminamos la función
    alert("Por favor, inserte un nombre");
    return;
  } else {
    //Agregamos el string al final del array nombres
    nombres.push(inputAmigo.value);
    //Borramos el campo de input para que quede vacío, listo para añadir otro nombre ;)
    inputAmigo.value = "";
    //Agrregando los nombres al elemento <ul>
    actualizarLista(nombres);
  }
}

//Aquí voy a usar una función de flecha para agregar los nombres del array en el DOM, es un proceso simple:
const actualizarLista = listaDeNombres => {
  //Borramos todos los elementos dentro del <ul> e inicializamos una variable que va a guardar el nuevo HTML
  listaAmigos.innerHTML = "";
  let nuevoHTML = "";

  //Una función de loop que itera por todos los elementos que existen en [nombres]
  listaDeNombres.forEach(element => {
    //Por cada elemento del array, voy a crear una línea de HTML con el elemento como su contenido, estas se van encadenando
    nuevoHTML += `<li>${element}</li>`
  });

  //Inyectamos esta cadena de <li> en el interior del elemento <ul>
  listaAmigos.innerHTML = nuevoHTML;
};