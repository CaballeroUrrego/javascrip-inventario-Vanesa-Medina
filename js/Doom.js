// Ejercicio 1: Selección y modificación de elementos
function cambiarTexto() {
    // Cambiamos el texto de un párrafo al hacer clic en el botón
    document.getElementById('texto-ejemplo').textContent = "El texto ha sido cambiado!";
}

// Ejercicio 2: Modificar estilos de un elemento
function cambiarEstilo() {
    // Modificamos el color, tamaño de fuente y borde del texto
    const elemento = document.getElementById('estilo-ejemplo');
    elemento.style.color = 'blue';
    elemento.style.fontSize = '20px';
    elemento.style.border = '1px solid black';
    elemento.style.padding = '5px';
}

// Ejercicio 3: Eventos de teclado
function mostrarTexto(event) {
    // Mostramos en tiempo real lo que el usuario escribe en un input
    document.getElementById('texto-dinamico').textContent = event.target.value;
}

// Ejercicio 4: Lista interactiva
function agregarElemento() {
    // Obtenemos el valor del input
    const nuevoItem = document.getElementById('nuevo-item').value;
    if (nuevoItem) {
        // Creamos un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = nuevoItem;

        // Creamos un botón para eliminar el elemento
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            // Eliminamos el elemento de la lista cuando se hace clic en el botón
            li.remove();
        };
        
        // Añadimos el botón al elemento de lista y el elemento a la lista
        li.appendChild(botonEliminar);
        document.getElementById('lista-interactiva').appendChild(li);

        // Limpiamos el input después de agregar el elemento
        document.getElementById('nuevo-item').value = "";
    }
}
