document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes del carrusel
    var imagenes = document.querySelectorAll("#banner a img");
    var posicionActual1 = 0;
    var time = setInterval(siguienteImagen, 5000); // Cambia la imagen cada 5 segundos

    // Función para mostrar la siguiente imagen
    function siguienteImagen() {
        imagenes[posicionActual1].style.display = "none"; // Oculta la imagen actual
        posicionActual1 = (posicionActual1 + 1) % imagenes.length; // Calcula el índice de la siguiente imagen
        imagenes[posicionActual1].style.display = "block"; // Muestra la siguiente imagen
    }
});
