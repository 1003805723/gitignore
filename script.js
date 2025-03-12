// Selecciona el botón y el body
const boton = document.getElementById('cambiarColor');
const body = document.body;

// Lista de colores para el fondo
const colores = ['#ffcccc', '#ccffcc', '#ccccff', '#ffcc99', '#99ccff'];

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    // Selecciona un color aleatorio de la lista
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    // Cambia el color de fondo del body
    body.style.backgroundColor = colorAleatorio;
}

// Asigna la función al evento click del botón
boton.addEventListener('click', cambiarColorFondo);