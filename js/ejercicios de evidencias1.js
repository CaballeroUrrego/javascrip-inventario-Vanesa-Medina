// Ejercicio 1: Operaciones con Arreglos

// Primero creamos un arreglo con 5 frutas
let frutas = ["manzana", "banana", "naranja", "uva", "kiwi"];

// Luego mostramos cuántas frutas hay en el arreglo
console.log("Ejercicio 1: Longitud del arreglo:", frutas.length);

// Ahora agregamos una nueva fruta al final del arreglo
frutas.push("mango");

// Eliminamos la primera fruta del arreglo
frutas.shift();

// Mostramos todas las frutas usando un ciclo for
console.log("Ejercicio 1: Frutas en el arreglo:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Ejercicio 2: Condicionales

// Creamos una variable para la edad y le damos un valor inicial de 20
let edad = 20;

// Usamos un if-else para ver si es mayor de edad
if (edad >= 18) {
    console.log("Ejercicio 2: Es mayor de edad.");
} else {
    console.log("Ejercicio 2: Es menor de edad.");
}

// Ahora usamos un if-else if-else para clasificar por grupos de edad
if (edad < 13) {
    console.log("Ejercicio 2: Es un niño.");
} else if (edad >= 13 && edad <= 17) {
    console.log("Ejercicio 2: Es un adolescente.");
} else {
    console.log("Ejercicio 2: Es un adulto.");
}

// Ejercicio 3: Ciclos y Condicionales

// Creamos un arreglo con números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos un ciclo for para mostrar solo los números pares
console.log("Ejercicio 3: Números pares del arreglo:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}

// Ahora usamos un while para sumar todos los números del arreglo
let suma = 0;
let index = 0;

while (index < numeros.length) {
    suma += numeros[index];
    index++;
}
console.log("Ejercicio 3: La suma de todos los números es:", suma);

// Usamos un do-while para mostrar números hasta encontrar uno mayor que 5
let i = 0;
console.log("Ejercicio 3: Mostrando números hasta encontrar uno mayor a 5:");
do {
    console.log(numeros[i]);
    i++;
} while (i < numeros.length && numeros[i - 1] <= 5);

// Ejercicio 4: Encuentra el mayor número en un arreglo

// Creamos un nuevo arreglo con varios números
let numerosArray = [12, 45, 7, 32, 89, 23];

// Inicializamos maximo con el primer elemento del arreglo
let maximo = numerosArray[0];

// Usamos un for para encontrar el número más grande
for (let i = 1; i < numerosArray.length; i++) {
    if (numerosArray[i] > maximo) {
        maximo = numerosArray[i];
    }
}

// Mostramos el resultado
console.log("Ejercicio 4: El número más grande en el arreglo es:", maximo);

// Ejercicio 5: Calcula el promedio de un arreglo de números

// Creamos otro arreglo con números
let numerosPromedio = [10, 20, 30, 40, 50];

// Inicializamos sumaTotal a 0
let sumaTotal = 0;

// Usamos un for para sumar todos los números
for (let i = 0; i < numerosPromedio.length; i++) {
    sumaTotal += numerosPromedio[i];
}

// Calculamos el promedio dividiendo la suma total por la cantidad de números
let promedio = sumaTotal / numerosPromedio.length;

// Mostramos el resultado
console.log("Ejercicio 5: El promedio de los números en el arreglo es:", promedio);