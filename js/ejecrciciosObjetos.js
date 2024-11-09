// ==========================================
// Ejercicios de Objetos en JavaScript
// ==========================================

// Ejercicio 1: Crear un Objeto "Coche" con Propiedades y Método
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    arrancar() {
        console.log("El coche está en marcha");
    },
    // Añadiendo más funcionalidad al objeto
    detener() {
        console.log("El coche se ha detenido");
    },
    info() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
};

// Demostración del Ejercicio 1
console.log("Ejercicio 1: Objeto Coche");
console.log(`Marca: ${coche.marca}`);
console.log(`Modelo: ${coche.modelo}`);
console.log(`Año: ${coche.año}`);
console.log(`Información completa: ${coche.info()}`);
coche.arrancar();
coche.detener();
console.log("\n");

// Ejercicio 2: Objeto Persona con Diferentes Tipos de Propiedades
const persona = {
    nombre: "Ana",
    edad: 25,
    direccion: "Calle Sebas 123",
    contacto: {
        email: "ana@ejemplo.com",
        telefono: "123-456-789"
    },
    hobbies: ["lectura", "viajes", "fotografía"]
};

// Demostración del Ejercicio 2
console.log("Ejercicio 2: Acceso a Propiedades de Objeto");
console.log(`Dirección: ${persona.direccion}`);
console.log(`Email: ${persona.contacto.email}`);
console.log(`Primer hobby: ${persona.hobbies[0]}`);
console.log("\n");

// Ejercicio 3: Función para Obtener Claves con Valores de Tipo String
function obtenerClavesString(objeto) {
    let clavesString = [];
    for (let clave in objeto) {
        if (typeof objeto[clave] === 'string') {
            clavesString.push(clave);
        }
    }
    return clavesString;
}

// Objeto de prueba para el Ejercicio 3
const ejemploObjeto = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Ingeniero",
    ciudad: "Madrid",
    activo: true,
    salario: 50000
};

// Demostración del Ejercicio 3
console.log("Ejercicio 3: Claves con Valores Tipo String");
console.log("Claves string:", obtenerClavesString(ejemploObjeto));
console.log("\n");

// Ejercicio 4: Propiedades Dinámicas en Objetos
const crearUsuario = (nombre, propiedad, valor) => {
    return {
        nombre,
        [propiedad]: valor,
        obtenerInfo() {
            return `Usuario: ${this.nombre}, ${propiedad}: ${this[propiedad]}`;
        }
    };
};

// Demostración del Ejercicio 4
const usuario1 = crearUsuario("Sebastian", "hobby", "Leer libros");
const usuario2 = crearUsuario("María", "profesion", "Doctora");

console.log("Ejercicio 4: Propiedades Dinámicas");
console.log(usuario1.obtenerInfo());
console.log(usuario2.obtenerInfo());
console.log("\n");

// Ejercicio 5: Comparación entre Objeto y Array de Clave-Valor
// Objeto tradicional
const mascota = {
    tipo: "Perro",
    raza: "Labrador",
    edad: 3,
    caracteristicas: {
        color: "dorado",
        peso: "30kg"
    }
};

// Array de clave-valor
const mascotaArray = [
    ["tipo", "Perro"],
    ["raza", "Labrador"],
    ["edad", 3]
];

// Función para convertir objeto a array de clave-valor
function objetoAArray(obj) {
    return Object.entries(obj);
}

// Función para convertir array de clave-valor a objeto
function arrayAObjeto(arr) {
    return Object.fromEntries(arr);
}

// Demostración del Ejercicio 5
console.log("Ejercicio 5: Comparación de Estructuras de Datos");
console.log("Objeto Original:", mascota);
console.log("Array de Clave-Valor:", mascotaArray);
console.log("Objeto convertido a Array:", objetoAArray(mascota));
console.log("Array convertido a Objeto:", arrayAObjeto(mascotaArray));

// Bonus: Métodos Útiles para Trabajar con Objetos
console.log("\nBonus: Métodos de Objetos");
console.log("Claves del objeto mascota:", Object.keys(mascota));
console.log("Valores del objeto mascota:", Object.values(mascota));
console.log("¿Tiene la propiedad 'tipo'?", mascota.hasOwnProperty('tipo'));

// Ejemplo de desestructuración de objetos
const { tipo, raza, edad } = mascota;
console.log("\nDesestructuración:");
console.log(`Tipo: ${tipo}, Raza: ${raza}, Edad: ${edad}`);