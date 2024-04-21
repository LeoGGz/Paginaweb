// Obtener todos los juegos
const juegos = document.querySelectorAll('.game');

// Función para filtrar los juegos por nombre
function buscarJuego() {
  const input = document.getElementById('busqueda').value.toLowerCase();
  juegos.forEach(juego => {
    const nombre = juego.querySelector('h3').textContent.toLowerCase();
    if (nombre.includes(input)) {
      juego.style.display = 'block';
    } else {
      juego.style.display = 'none';
    }
  });
}

// Agregar un event listener al campo de búsqueda
document.getElementById('busqueda').addEventListener('input', buscarJuego);