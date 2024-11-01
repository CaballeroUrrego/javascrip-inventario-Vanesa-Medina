// Variable numérica (edad)
let edad1 = 25;

// Variable de texto (nombre)
let nombre = "Sebastian Urrego";

// Variable booleana (esEstudiante)
let esEstudiante = true;

// Variable de arreglo (materias)
let materias = ["Matemáticas", "Ciencias", "Historia", "Lengua"];

// Mostrar los valores de las variables
console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("Es estudiante:", esEstudiante ? "Sí" : "No");
console.log("Materias:", materias);

// Ejemplo de uso de estas variables
if (esEstudiante && edad >= 18) {
    console.log(`${nombre} es mayor de edad y está cursando ${materias.length} materias.`);
}

// Operadores aritméticos en JavaScript

// Variables para almacenar los operandos
let num1 = 10;
let num2 = 3;

// Operación de suma
let suma = num1 + num2;

// Operación de resta
let resta = num1 - num2;

// Operación de multiplicación
let multiplicacion = num1 * num2;

// Operación de división
let division = num1 / num2;

// Mostrar los resultados en la consola
console.log(`Suma: ${num1} + ${num2} = ${suma}`);
console.log(`Resta: ${num1} - ${num2} = ${resta}`);
console.log(`Multiplicación: ${num1} × ${num2} = ${multiplicacion}`);
console.log(`División: ${num1} ÷ ${num2} = ${division}`);

// Ejemplo de uso de template literals para formatear el output
console.log(`
Resultados:
1. Suma: ${suma}
2. Resta: ${resta}
3. Multiplicación: ${multiplicacion}
4. División: ${division}
`);



// Definir la edad y el estado de estudiante
let edad = 20; // Puedes cambiar este valor para probar diferentes edades
let esEstudiante1 = true; // Cambia a false para ver cómo afecta el resultado

// Crear la variable mayorEdad que evalúa si la edad es mayor o igual a 18
let mayorEdad = edad >= 18;

// Crear la variable puedeEstudiar que será verdadera si es mayor de edad y es estudiante
let puedeEstudiar = mayorEdad && esEstudiante1;

// Mostrar en consola si puedeEstudiar es verdadero o falso
console.log("¿Puede estudiar?:", puedeEstudiar);



// Definir valores para comparar
let valor1 = 10;
let valor2 = "10"; // Misma cantidad pero tipo diferente (string)
let numero1 = 5;
let numero2 = 8;

// Comparación de igualdad (==) - no compara el tipo de dato
let esIgual = valor1 == valor2;
console.log("¿valor1 es igual a valor2 con == ?:", esIgual); // Devuelve true

// Comparación estricta de igualdad (===) - compara el valor y el tipo de dato
let esEstrictamenteIgual = valor1 === valor2;
console.log("¿valor1 es estrictamente igual a valor2 con === ?:", esEstrictamenteIgual); // Devuelve false

// Comparación mayor que (>)
let esMayor = numero1 > numero2;
console.log("¿numero1 es mayor que numero2?:", esMayor); // Devuelve false

// Comparación menor que (<)
let esMenor = numero1 < numero2;
console.log("¿numero1 es menor que numero2?:", esMenor); // Devuelve true
