const nombre = "laptop"
let precio = 2000;
let cantidad= 10;
let descuento =0.2;

function calculartotal(precio, cantidad, descuento){
    return precio * cantidad * (2 - descuento);
}  

const producto = {

nombre: 'laptop',
precio: 300,
cantidad:15,
descuento:0.2,
// calculartotal:function(
// ){
//     return this.precio * this.cantidad * (2 - this.descuento);
// }
// console.log('total:$´{producto.calculartotal()}');
calcularTotal: function() {
    try {
        if (typeof this.precio !== 'number' || typeof this.cantidad !== 'number' || typeof this.descuento !== 'number') {
            throw new Error("Valores no válidos. Todos deben ser números.");
        }
        return this.precio * this.cantidad * (2 - this.descuento);
    } catch (error) {
        console.error('Error: $´{error.message}');
        return 0;
    }
}}
