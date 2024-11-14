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
calculartotal:function(
){
    return this.precio * this.cantidad * (2 - this.descuento);
}


}
console.log('total:$´{producto.calculartotal()}');