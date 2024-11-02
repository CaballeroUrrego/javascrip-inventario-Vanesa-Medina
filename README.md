Tecnologias utilizadas 
- Libreria de bootstrap
-libreria de fontawesome


Seleccionar elementos del DOM:

    productInput, addButton, y productList seleccionan los elementos HTML que se necesitan para interactuar: el campo de entrada, el botón de agregar, y la lista donde se mostrarán los productos.

Función addProduct:

    Toma el valor del campo de entrada (productInput.value), lo recorta para quitar espacios extra y verifica si no está vacío.
    Si el nombre es válido, crea un elemento <li> que representa un producto en la lista:
        Le añade clases de estilo para usar diseño de Bootstrap (list-group-item, d-flex, etc.).
        Crea y añade un botón Editar:
            Este botón abre un prompt para editar el nombre del producto.
            Si el usuario ingresa un nuevo nombre, el código actualiza el texto del <li> al nuevo nombre.
        Crea y añade un botón Eliminar:
            Este botón elimina el elemento <li> completo de la lista al hacer clic.
    Limpia el campo de entrada para que esté listo para un nuevo producto.

Eventos:

    addButton usa un evento click para llamar a addProduct cuando se hace clic.
    productInput detecta la tecla Enter con keypress y agrega el producto cuando el usuario presiona Enter, simulando el clic del botón de agregar.
    
