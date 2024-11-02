// Seleccionar elementos del DOM
const productInput = document.getElementById('productInput'); // Input donde se escribe el nombre del producto.
const addButton = document.getElementById('addButton'); // Botón para agregar el producto.
const productList = document.getElementById('productList'); // Lista que mostrará los productos agregados.

// Función para agregar un producto
function addProduct() {
    const productName = productInput.value.trim(); // Obtiene el valor del input y elimina espacios adicionales.
    
    if (productName) { // Verifica si el nombre del producto no está vacío.
        // Crear elemento li para el nuevo producto
        const li = document.createElement('li'); // Crea un elemento de lista para el producto.
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'); // Agrega clases para estilizar el elemento.
        li.textContent = productName; // Establece el nombre del producto como texto del elemento de lista.

        // Crear elemento span para mostrar la fecha actual
        const dateSpan = document.createElement('span'); // Crea un span para la fecha de vencimiento.
        dateSpan.className = 'date'; // Añade una clase al span.
        dateSpan.textContent = "Fecha de vencimiento: No especificada"; // Texto inicial para la fecha de vencimiento.

        // Crear botón para editar el producto
        const editButton = document.createElement('button'); // Crea un botón de edición.
        editButton.innerHTML = 'Editar'; // Texto del botón.
        editButton.classList.add('btn', 'btn-warning', 'btn-sm'); // Añade clases para el estilo.
        editButton.addEventListener('click', function() { // Evento click para editar el producto.
            const newProductName = prompt("Edita el nombre del producto:", productName); // Prompt para el nuevo nombre.
            if (newProductName) {
                li.firstChild.textContent = newProductName; // Actualiza el nombre del producto en el elemento li.
            }
        });

        // Crear botón para eliminar el producto
        const deleteButton = document.createElement('button'); // Crea un botón de eliminación.
        deleteButton.textContent = 'Eliminar'; // Texto del botón.
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2'); // Añade clases de estilo.
        deleteButton.addEventListener('click', function() { // Evento click para eliminar el producto.
            li.remove(); // Elimina el elemento li de la lista.
        });

        // Crear botón para editar la fecha de vencimiento
        const editDateButton = document.createElement('button'); // Crea un botón para editar la fecha de vencimiento.
        editDateButton.textContent = 'Editar Fecha'; // Texto del botón.
        editDateButton.classList.add('btn', 'btn-info', 'btn-sm', 'ml-2'); // Añade clases para el estilo.
        editDateButton.addEventListener('click', function() { // Evento click para editar la fecha de vencimiento.
            const newDate = prompt("Introduce la nueva fecha de vencimiento (formato: YYYY-MM-DD):", ""); // Prompt para ingresar nueva fecha.
            if (newDate) {
                dateSpan.textContent = `Fecha de vencimiento: ${newDate}`; // Actualiza el texto con la nueva fecha.
                checkExpirationDate(newDate, dateSpan); // Llama a la función para verificar la fecha de vencimiento.
            }
        });

        // Agregar los elementos al producto
        li.appendChild(editButton); // Añade el botón de editar al elemento li.
        li.appendChild(deleteButton); // Añade el botón de eliminar al elemento li.
        li.appendChild(editDateButton); // Añade el botón para editar la fecha al elemento li.
        li.appendChild(dateSpan); // Añade el span de la fecha al elemento li.
        productList.appendChild(li); // Añade el elemento li completo a la lista de productos.
        productInput.value = ''; // Limpia el campo de entrada.
        
        console.log(`Producto agregado: ${productName}`); // Imprime en la consola que se ha agregado el producto.
    }
}

// Función para verificar la fecha de vencimiento
function checkExpirationDate(expirationDate, dateSpan) {
    const currentDate = new Date(); // Obtiene la fecha actual.
    const expiration = new Date(expirationDate); // Convierte la fecha de vencimiento en un objeto Date.
    
    // Comprobar si la fecha de vencimiento es dentro de los próximos 7 días
    const differenceInDays = (expiration - currentDate) / (1000 * 60 * 60 * 24); // Calcula la diferencia en días.
    if (differenceInDays <= 7 && differenceInDays >= 0) { // Si está entre 0 y 7 días...
        dateSpan.style.color = 'red'; // Cambia el color del texto de la fecha a rojo.
        alert(`El producto vencerá pronto: ${dateSpan.parentElement.textContent.trim()}`); // Alerta al usuario.
    } else {
        dateSpan.style.color = 'black'; // Mantiene el color negro si no está próximo a vencer.
    }
}

// Agregar evento click al botón de agregar
addButton.addEventListener('click', addProduct); // Llama a la función addProduct cuando se hace clic en el botón "Agregar".

// Agregar evento enter al input de productos
productInput.addEventListener('keypress', function(e) { // Detecta cuando se presiona una tecla en el input.
    if (e.key === 'Enter') { // Si la tecla presionada es Enter...
        addProduct(); // Llama a la función addProduct.
    }
});
