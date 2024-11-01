function saludar() {
    console.log("Hola, bienvenido a JavaScript te desea Sebastian Urrego ");
}

saludar(); // Llama a la función y muestra el saludo

function saludar(nombre) 
{
console.log("Hola " + nombre + "!");
}
saludar("Sebastian "); // Llama a la función y muestra el saludo

//Ejemplo mio de funciones de retorno 
// Ejemplo completo de funciones con retorno de valor en JavaScript

// Función para sumar dos números
function sum(a, b) {
    return a + b;
}

// Función para multiplicar dos números
function multiply(x, y) {
    return x * y;
}

// Función para generar un saludo personalizado
function greet(name) {
    return `Hola, ${name}!`;
}

// Función para calcular el promedio de una lista de números
function calculateAverage(numbers) {
    if (!numbers.length) {
        return 0;
    }
    const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
    return sumOfNumbers / numbers.length;
}

// Función principal
function main() {
    console.log("programa de cálculos.");

    // Pedir entrada al usuario
    const num1 = Number(prompt("Ingrese el primer número: "));
    const num2 = Number(prompt("Ingrese el segundo número: "));

    // Calcular y mostrar la suma
    const resultSum = sum(num1, num2);
    console.log(`${num1} + ${num2} = ${resultSum}`);

    // Calcular y mostrar el producto
    const resultMultiply = multiply(num1, num2);
    console.log(`${num1} × ${num2} = ${resultMultiply}`);

    // Pedir nombre al usuario
    const name = prompt("Ingrese su nombre: ");

    // Mostrar saludo personalizado
    const greeting = greet(name);
    console.log(greeting);

    // Pedir números para calcular el promedio
    const moreNumbers = prompt("Desea ingresar más números? (yes/no): ").toLowerCase();
    if (moreNumbers === 'yes') {
        const numbers = [];
        while (true) {
            const num = Number(prompt("Ingrese un número: "));
            numbers.push(num);
            const cont = prompt("Desea ingresar otro número? (yes/no): ").toLowerCase();
            if (cont !== 'yes') {
                break;
            }
        }
        const avg = calculateAverage(numbers);
        console.log(`El promedio de los números ingresados es: ${avg}`);
    }
}

// Ejecutar la función principal
main();

// Ejemplo de uso de funciones con retorno de valor
console.log("Uso de funciones con retorno de valor:");
console.log(sum(5, 3));  // Muestra: 8
console.log(multiply(4, 5));  // Muestra: 20
console.log(greet("Urrego"));  // Muestra: Hola, Urrego!
console.log(calculateAverage([1, 2, 3, 4, 5]));  // Muestra: 



// funciones anónimas y funciones flecha

// Función anónima
const anonymousFunction = function(parametro) {
    return parametro * 2;
};

// Función flecha
const arrowFunction = (parametro) => parametro * 2;

// Función anónima con múltiples parámetros
const sumMultipleParams = function(a, b, c) {
    return a + b + c;
};

// Función flecha con múltiples parámetros
const sumMultipleParamsArrow = (a, b, c) => a + b + c;

// Función anónima con objeto como parámetro
const processObject = function(objeto) {
    return objeto.name.toUpperCase();
};

// Función flecha con objeto como parámetro
const processObjectArrow = obj => obj.name.toUpperCase();

// Función anónima con destructuring
const sumTwoNumbers = function({a, b}) {
    return a + b;
};

// Función flecha con destructuring
const sumTwoNumbersArrow = ({a, b}) => a + b;

// Función anónima con parámetros predeterminados
const defaultParamFunction = function(parametro = "valor predeterminado") {
    return parametro;
};

// Función flecha con parámetros predeterminados
const defaultParamArrow = (parametro = "valor predeterminado") => parametro;

// Ejecución de las funciones
console.log(anonymousFunction(5));  // Muestra: 10
console.log(arrowFunction(5));  // Muestra: 10
console.log(sumMultipleParams(1, 2, 3));  // Muestra: 6
console.log(sumMultipleParamsArrow(1, 2, 3));  // Muestra: 6
console.log(processObject({name: "John"}));  // Muestra: JOHN
console.log(processObjectArrow({name: "Jane"}));  // Muestra: JANE
console.log(sumTwoNumbers({a: 1, b: 2}));  // Muestra: 3
console.log(sumTwoNumbersArrow({a: 1, b: 2}));  // Muestra: 3
console.log(defaultParamFunction());  // Muestra: valor predeterminado
console.log(defaultParamArrow());  // Muestra: valor predeterminado


// El ejercicio practico calcularAreaRectangulo(ancho, alto): Calcula y devuelve el área de un rectángulo. 
//esPar(numero): Devuelve true si el número es par y false si es impar. 
// concatenarCadenas(...cadenas): Recibe un número variable de cadenas y las une en una sola.


// calcular área de rectángulos, verificar números pares e unir cadenas

// Función para calcular el área de un rectángulo
const calcularAreaRectangulo = (ancho, alto) => {
    return ancho * alto;
};

// Función para verificar si un número es par
const esPar = (numero) => {
    return numero % 2 === 0;
};

// Función para unir cadenas (concatenarCadenas)
const concatenarCadenas = (...cadenas) => {
    return cadenas.join(' ');
};

// Función principal
const main = () => {
    console.log("Programa de cálculos y manipulaciones de strings");

    // Ejemplo de uso de calcularAreaRectangulo
    const areaRectangulo = calcularAreaRectangulo(5, 3);
    console.log(`Área de un rectángulo de 5x3: ${areaRectangulo}`);

    // Ejemplo de uso de esPar
    console.log("Pruebas de números pares e impares:");
    console.log(`2 es ${esPar(2) ? 'par' : 'impar'}`);
    console.log(`3 es ${esPar(3) ? 'par' : 'impar'}`);

    // Ejemplo de uso de concatenarCadenas
    const palabras = ["Hola", "mundo", "¡cómo", "estás?"];
    console.log("Palabras concatenadas:", concatenarCadenas(...palabras));
};

// Ejecutar la función principal
main();



/*
 *
 * En JavaScript, el alcance (scope) de una variable determina dónde está disponible esa variable.
 * Hay dos tipos principales de scope: global y local.
 *
 * Scope Global:
 * Variables declaradas fuera de cualquier función tienen scope global.
 * Están disponibles en todo el script.
 *
 * Scope Local:
 * Variables declaradas dentro de una función tienen scope local.
 * Sólo están disponibles dentro de esa función.
 *
 * Var:
 * - Tiene hoisting (se eleva al inicio del scope).
 * - Puede ser redeclarada.
 * - No tiene bloque scope (funciona con function scope).
 * Ejemplo:
 * var x = 10;
 * if (true) {
 *   var x = 20; // Afecta a la variable global
 * }
 * console.log(x); // Muestra 20
 *
 * Let:
 * - También tiene hoisting, pero no inicialización.
 * - No puede ser redeclarada en el mismo scope.
 * - Tiene bloque scope.
 * Ejemplo:
 * let y = 10;
 * if (true) {
 *   let y = 20; // No afecta a la variable externa
 * }
 * console.log(y); // Muestra 10
 *
 * Const:
 * - Similar a let, pero el valor asignado no puede cambiar.
 * - Debe ser inicializada al momento de su declaración.
 * Ejemplo:
 * const z = 10;
 * z = 20; // Error de asignación
 *
 * En resumen:
 * - Var es más flexible pero puede causar problemas de scope.
 * - Let es más seguro y tiene un scope más predecible.
 * - Const es ideal para valores que no deben cambiar.
 *
 * En la práctica moderna, se recomienda usar let y const en lugar de var.
 */