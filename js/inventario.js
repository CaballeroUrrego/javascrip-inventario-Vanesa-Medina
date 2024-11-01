// Seleccionar elementos del DOM
const productInput = document.getElementById('productInput');
const addButton = document.getElementById('addButton');
const productList = document.getElementById('productList');

// Función para agregar un producto
function addProduct() {
    const productName = productInput.value.trim();
    
    if (productName) {
        // Crear elemento li para el nuevo producto
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.textContent = productName;

        // Crear botón para editar el producto
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Editar';
        editButton.classList.add('btn', 'btn-warning', 'btn-sm');
        editButton.addEventListener('click', function() {
            const newProductName = prompt("Edita el nombre del producto:", productName);
            if (newProductName) {
                li.firstChild.textContent = newProductName; // Actualiza el nombre del producto
            }
        });

        // Crear botón para eliminar el producto
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        deleteButton.addEventListener('click', function() {
            this.parentNode.remove(); // Elimina el elemento li completo
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        productList.appendChild(li);
        productInput.value = ''; // Limpiar el campo de entrada
        
        console.log(`Producto agregado: ${productName}`);
    }
}

// Agregar evento click al botón de agregar
addButton.addEventListener('click', addProduct);

// Agregar evento enter al input de productos
productInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addProduct();
    }
});
