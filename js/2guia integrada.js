// =========================================
// 1. Ejemplo básico de función
// =========================================
function saludar() {
    console.log("¡Hola! Bienvenido al curso de JavaScript");
}

// Invocar la función
saludar();

// =========================================
// 2. Funciones con Parámetros
// =========================================
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}! Bienvenido al curso de JavaScript`);
}

saludarPersona("Juan");

// =========================================
// 3. Funciones con Retorno de Valor
// =========================================
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 3);
console.log("Resultado de la suma:", resultado);

// =========================================
// 4. Funciones con Parámetros Predeterminados
// =========================================
function saludarConIdioma(nombre, idioma = "es") {
    if (idioma === "es") {
        return `¡Hola ${nombre}!`;
    } else if (idioma === "en") {
        return `Hello ${nombre}!`;
    }
}

console.log(saludarConIdioma("María"));         // Usa valor predeterminado "es"
console.log(saludarConIdioma("John", "en"));    // Usa el idioma especificado

// =========================================
// 5. Funciones Anónimas
// =========================================
const multiplicar = function(a, b) {
    return a * b;
};

console.log("Multiplicación:", multiplicar(4, 6));

// =========================================
// 6. Funciones Flecha
// =========================================
const dividir = (a, b) => a / b;

console.log("División:", dividir(10, 2));

// =========================================
// 7. Ejercicio Práctico Integrador
// =========================================

// Función para calcular área de rectángulo
const calcularAreaRectangulo = (ancho, alto) => {
    return ancho * alto;
};

// Función para determinar si un número es par
const esPar = (numero) => {
    return numero % 2 === 0;
};

// Función para concatenar cadenas
const concatenarCadenas = (...cadenas) => {
    return cadenas.join(" ");
};

// Pruebas del ejercicio integrador
console.log("\n=== Pruebas del Ejercicio Integrador ===");
console.log("Área del rectángulo (5x3):", calcularAreaRectangulo(5, 3));
console.log("¿Es par el número 4?:", esPar(4));
console.log("¿Es par el número 7?:", esPar(7));
console.log("Cadenas concatenadas:", concatenarCadenas("Hola", "mundo", "JavaScript"));

// =========================================
// 8. Ejemplos de Alcance de Variables (Scope)
// =========================================

// Ejemplo con var (scope de función)
function ejemploVar() {
    var x = 1;
    if (true) {
        var x = 2;  // Misma variable
        console.log(x);  // Imprime 2
    }
    console.log(x);  // Imprime 2
}

// Ejemplo con let (scope de bloque)
function ejemploLet() {
    let y = 1;
    if (true) {
        let y = 2;  // Variable diferente
        console.log(y);  // Imprime 2
    }
    console.log(y);  // Imprime 1
}

// Ejemplo con const (scope de bloque y valor inmutable)
function ejemploConst() {
    const PI = 3.14159;
    // PI = 3.14; // Esto causaría un error
    
    const usuario = {
        nombre: "Juan"
    };
    usuario.nombre = "Pedro"; // Esto es válido porque modifica la propiedad, no la referencia
    
    console.log(PI);
    console.log(usuario);
}

console.log("\n=== Pruebas de Scope ===");
ejemploVar();
ejemploLet();
ejemploConst();