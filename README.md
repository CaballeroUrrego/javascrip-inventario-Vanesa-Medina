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
Después de crear los botones y el span, estos elementos se añaden al <li>.
Luego, el <li> se añade a productList, y el campo de entrada se limpia para permitir agregar otro producto.
Se imprime un mensaje en la consola que confirma el agregado del producto.
Función para verificar la fecha de vencimiento
Función checkExpirationDate: Verifica si la fecha de vencimiento está próxima (dentro de los próximos 7 días).
currentDate es la fecha actual, y expiration es la fecha de vencimiento proporcionada por el usuario.
Se calcula la diferencia en días entre ambas fechas.
Si la diferencia es de 0 a 7 días, el texto de dateSpan cambia a color rojo, y se muestra una alerta advirtiendo que el producto vencerá pronto. En caso contrario, el color de texto permanece en negro.
 Eventos de clic y tecla
addButton.addEventListener('click', addProduct): Este evento asocia el clic del botón "Agregar" con la función addProduct.
productInput.addEventListener('keypress', function(e) {...}): Este evento detecta cuando el usuario presiona la tecla Enter mientras está en el campo de entrada. Si es Enter, también llama a addProduct para añadir el producto.

