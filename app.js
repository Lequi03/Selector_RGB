// Selecciona los elementos del DOM.
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo} ${verde} ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener("input", (e) => {
  //Con la palabra input actualizamos en vivo, en cambio con change se actualiza al soltar
  rojo = e.target.value; //Esta linea actualiza el color del fondo
  textoRojo.textContent = rojo; //Actualiza el color del texto
  actualizarColor(rojo, verde, azul); //Llama a la función para actualizar el color
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener("input", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener("input", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
