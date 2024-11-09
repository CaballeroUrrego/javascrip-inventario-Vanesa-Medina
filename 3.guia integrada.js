// Ejercicio 1: Clase y Métodos Básicos
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Sebastián", 25);
persona1.saludar(); // Salida: Hola, me llamo Sebastián y tengo 25 años.


// Ejercicio 2: Herencia
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad); // Llama al constructor de la clase padre
        this.puesto = puesto;
    }

    mostrarPuesto() {
        console.log(`Trabajo como ${this.puesto}.`);
    }
}

// Crear una instancia de la clase Empleado
const empleado1 = new Empleado("María", 30, "Desarrolladora");
empleado1.saludar();       // Salida: Hola, me llamo María y tengo 30 años.
empleado1.mostrarPuesto(); // Salida: Trabajo como Desarrolladora.


// Ejercicio 3: Encapsulamiento
class CuentaBancaria {
    #saldo; // Propiedad privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
        console.log(`Depositaste $${cantidad}. Saldo actual: $${this.#saldo}`);
    }

    retirar(cantidad) {
        if (cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Retiraste $${cantidad}. Saldo actual: $${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes.");
        }
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);  // Salida: Depositaste $500. Saldo actual: $1500
cuenta.retirar(200);    // Salida: Retiraste $200. Saldo actual: $1300
cuenta.retirar(1500);   // Salida: Fondos insuficientes.


// Ejercicio 4: Polimorfismo
class Animal {
    hacerSonido() {
        console.log("Este animal hace un sonido.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("El perro dice: ¡Guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("El gato dice: ¡Miau!");
    }
}

const perro = new Perro();
const gato = new Gato();

perro.hacerSonido(); // Salida: El perro dice: ¡Guau!
gato.hacerSonido();  // Salida: El gato dice: ¡Miau!


// Ejercicio 5: Composición
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }

    encender() {
        console.log(`El motor ${this.tipo} está encendido.`);
    }
}

class Auto {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor; // El motor es una composición de la clase Auto
    }

    encenderAuto() {
        console.log(`El auto ${this.marca} está encendiendo.`);
        this.motor.encender();
    }
}

const motorV8 = new Motor("V8");
const miAuto = new Auto("Ford", motorV8);
miAuto.encenderAuto(); // Salida: El auto Ford está encendiendo. El motor V8 está encendido.


// Ejercicio 6: Manejo de Colecciones (Array de Objetos)
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto("Laptop", 1200),
    new Producto("Teléfono", 700),
    new Producto("Monitor", 300),
    new Producto("Teclado", 50)
];

const precioMinimo = 100;
console.log(`Productos con precio mayor a $${precioMinimo}:`);
productos.forEach(producto => {
    if (producto.precio > precioMinimo) {
        console.log(`- ${producto.nombre}: $${producto.precio}`);
    }
});
