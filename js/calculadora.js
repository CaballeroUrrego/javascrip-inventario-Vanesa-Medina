// Función autoinvocada para encapsular la lógica de la calculadora
// Esto se hace para evitar que las variables y funciones entren en el ámbito global.
(function() {
    // Capturar elementos del DOM
    // Seleccionamos el campo de entrada para mostrar el resultado y todos los botones.
    const display = document.getElementById('display');
    const botones = document.querySelectorAll('button');

    // Función anónima para agregar valores al display
    // Esta función devuelve otra función que se ejecutará cuando se llame.
    const agregarValor = (function() {
        return function(valor) {
            // Agrega el valor del botón al contenido del display.
            display.value += valor;
        };
    })();

    // Función anónima para calcular el resultado
    // Evalúa la expresión matemática escrita en el display.
    const calcular = (function() {
        return function() {
            try {
                // Utiliza eval para evaluar la expresión matemática y muestra el resultado.
                display.value = eval(display.value);
            } catch(error) {
                // Si eval genera un error (por ejemplo, por una expresión inválida),
                // muestra "Error" en el display.
                display.value = 'Error';
            }
        };
    })();

    // Función anónima para limpiar el contenido del display
    // Esta función simplemente limpia cualquier contenido presente en el display.
    const limpiar = (function() {
        return function() {
            // Borra el contenido del display.
            display.value = '';
        };
    })();

    // Evento delegado para manejar los clics en los botones
    // Se utiliza un solo evento para toda la sección de botones, lo que mejora el rendimiento.
    document.querySelector('.botones').addEventListener('click', (function() {
        return function(evento) {
            const boton = evento.target; // Obtenemos el botón que fue clicado.

            // Verificar si el botón tiene un atributo data-valor (es un número u operador).
            if (boton.dataset.valor) {
                agregarValor(boton.dataset.valor); // Agrega el valor al display.
            }

            // Verificar si el botón tiene el ID "calcular" para ejecutar la operación.
            if (boton.id === 'calcular') {
                calcular(); // Llama a la función de cálculo.
            }

            // Verificar si el botón tiene el ID "limpiar" para borrar el display.
            if (boton.id === 'limpiar') {
                limpiar(); // Llama a la función de limpieza.
            }
        };
    })());
})(); // Fin de la función autoinvocada.
