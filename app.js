// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    // Validación de entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}