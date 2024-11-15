const nombre = "laptop";
let precio = 300; // Corregido de 2000 a 300
let cantidad = 15; // Corregido de 10 a 15
let descuento = 0.2;

/**
 * Calcula el total del producto con descuento.
 * @param {number} precio - Precio base del producto
 * @param {number} cantidad - Cantidad del producto
 * @param {number} descuento - Porcentaje de descuento
 * @returns {number} Total del producto después del descuento
 */
function calcularTotal(precio, cantidad, descuento) {
    return precio * cantidad * (2 - descuento);
}

const producto = {
    nombre: 'laptop',
    precio: 300,
    cantidad: 15,
    descuento: 0.2,
calcularTotal: function() {
    /**
         * Calcula el total del producto con descuento.
         * @returns {number} Total del producto después del descuento
     */
    try {
        if (typeof this.precio !== 'number' || typeof this.cantidad !== 'number' || typeof this.descuento !== 'number') {
            throw new Error("Valores no válidos. Todos deben ser números.");
        }
        return this.precio * this.cantidad * (2 - this.descuento);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return 0;
    }
    },

    /**
         * Retorna un string con detalles del producto.
         * @returns {string} Detalles del producto en formato de cadena.
     */
detalles: function() {
    return `Producto: $${this.nombre}, Precio: $${this.precio}, Cantidad: ${this.cantidad}, Descuento: ${this.descuento * 100}%`;
    }
};

// Validar que los valores sean números
function validarProducto(producto) {
    try {
        if (typeof producto.precio !== 'number' ||
            typeof producto.cantidad !== 'number' ||
            typeof producto.descuento !== 'number') {
            throw new Error("Datos del producto no válidos.");
        }
        console.log("Producto válido.");
    } catch (error) {
        console.error(error.message);
    }
}

validarProducto(producto);

console.log(`Total con error: ${producto.calcularTotal()}`);
  }

  function validarProducto(producto) {
    try {
      if (typeof producto.precio !== 'number' ||
          typeof producto.cantidad !== 'number' ||
          typeof producto.descuento !== 'number') {
        throw new Error("Datos del producto no válidos.");
      }
      console.log("Producto válido.");
    } catch (error) {
      console.error(error.message);
    }
  }
  
  validarProducto(producto); // Llamada a la función (asumiendo que 'producto' existe)
