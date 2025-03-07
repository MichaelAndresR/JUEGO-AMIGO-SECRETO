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

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Crear un elemento <li> por cada amigo en el array
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}