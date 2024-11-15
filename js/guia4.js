// Definimos algunas variables iniciales para un producto
const nombre = "laptop"; // Nombre del producto
let precio = 2000; // Precio del producto
let cantidad = 10; // Cantidad disponible del producto
let descuento = 0.2; // Descuento aplicado (20%)

// Función que calcula el total a pagar por el producto
function calcularTotal(precio, cantidad, descuento) {
    // Se calcula el total multiplicando el precio por la cantidad y aplicando el descuento
    return precio * cantidad * (1 - descuento); // Se usa (1 - descuento) para obtener el precio final
}

// Objeto que representa un producto
const producto = {
    nombre: 'laptop', // Nombre del producto
    precio: 300, // Precio del producto
    cantidad: 15, // Cantidad disponible del producto
    descuento: 0.2, // Descuento aplicado (20%)
    
    // Método para calcular el total del producto
    calcularTotal: function() {
        try {
            // Verificamos que los valores de precio, cantidad y descuento sean números
            if (typeof this.precio !== 'number' || typeof this.cantidad !== 'number' || typeof this.descuento !== 'number') {
                throw new Error("Valores no válidos. Todos deben ser números."); // Lanzamos un error si no son válidos
            }
            // Calculamos y retornamos el total aplicando el descuento
            return this.precio * this.cantidad * (1 - this.descuento); // Se usa (1 - descuento) para obtener el precio final
        } catch (error) {
            // Si ocurre un error, se muestra en la consola y se retorna 0
            console.error(`Error: ${error.message}`);
            return 0;
        }
    },
    
    // Método para mostrar los detalles del producto
    detalles: function() {
        // Retornamos una cadena con la información del producto
        return "Producto: " + this.nombre + ", Precio: $" + this.precio + ", Cantidad: " + this.cantidad + ", Descuento: " + (this.descuento * 100) + "%";
    }
};

// Intentamos asignar un valor no válido a la propiedad precio
producto.precio = "mil"; // El valor es incorrecto porque debería ser un número
// Mostramos el total calculado, aunque habrá un error debido al valor no válido
console.log(`Total con error: ${producto.calcularTotal()}`);

// Función para validar que los datos del producto sean correctos
function validarProducto(producto) {
    try {
        // Verificamos que precio, cantidad y descuento sean números
        if (typeof producto.precio !== 'number' ||
            typeof producto.cantidad !== 'number' ||
            typeof producto.descuento !== 'number') {
            throw new Error("Datos del producto no válidos."); // Lanzamos un error si no son válidos
        }
        // Si todo es válido, mostramos un mensaje de validación
        console.log("Producto válido.");
    } catch (error) {
        // Si ocurre un error, se muestra en la consola
        console.error(error.message);
    }
}

// Llamamos a la función de validación para verificar el producto
validarProducto(producto); // Llamada a la función para validar el producto

// Mostramos los detalles del producto utilizando el método 'detalles'
console.log(producto.detalles());