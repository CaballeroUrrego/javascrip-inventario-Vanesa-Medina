Tecnologias utilizadas 
- Libreria de bootstrap
-libreria de fontawesome


 Seleccionar elementos del DOM
productInput, addButton, y productList son variables que hacen referencia a elementos en el HTML.
productInput es el campo donde el usuario escribe el nombre del producto.
addButton es el botón que, al hacer clic, añadirá el producto.
productList es la lista donde aparecerán los productos añadidos.
Función para agregar un producto
Función addProduct: Esta función recoge el texto del campo de entrada, lo procesa y lo usa para crear un nuevo producto que se mostrará en la lista.
productName recoge el valor ingresado por el usuario y elimina espacios extra.
Si productName no está vacío, se procede a agregar el producto.
Se crea un elemento <li> (elemento de lista) y se le añaden clases de estilo. Este <li> será el contenedor de un solo producto.
dateSpan: Se crea un span para la fecha de vencimiento del producto con texto inicial "Fecha de vencimiento: No especificada".
Botón de editar producto
Se crea un botón editButton que permite modificar el nombre del producto. Al hacer clic en este botón, se abre un cuadro de diálogo (prompt) para escribir un nuevo nombre. Si se introduce un nombre, se actualiza el texto del <li>.
 Botón de eliminar producto
deleteButton: Este botón permite eliminar el producto de la lista. Al hacer clic, se elimina el elemento <li> correspondiente.
Botón para editar la fecha de vencimiento
editDateButton: Crea un botón que permite cambiar la fecha de vencimiento del producto. Al hacer clic, se abre un cuadro de diálogo donde el usuario introduce una nueva fecha en formato YYYY-MM-DD.
Después de actualizar la fecha en el dateSpan, la función checkExpirationDate verifica si la nueva fecha de vencimiento es cercana.
Agregar elementos al producto
Después de crear los botones y el span, estos elementos se añaden al <li>.```javascript
