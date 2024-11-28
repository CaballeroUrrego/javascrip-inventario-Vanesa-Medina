document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM
    const num1Input = document.querySelector('#num1');
    const num2Input = document.querySelector('#num2');
    const operationSelect = document.querySelector('#operation');
    const calculateButton = document.querySelector('#calculateButton');
    const resultParagraph = document.querySelector('#result');

    // Añadir evento al botón de calcular
    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value); // Obtener y convertir el valor de num1
        const num2 = parseFloat(num2Input.value); // Obtener y convertir el valor de num2
        let result;

        // Validar los números
        if (isNaN(num1) || isNaN(num2)) {
            resultParagraph.textContent = 'Por favor, ingresa números válidos.';
            return;
        }

        // Determinar la operación seleccionada
        switch (operationSelect.value) {
            case 'sumar':
                result = num1 + num2;
                break;
            case 'restar':
                result = num1 - num2;
                break;
            case 'multiplicar':
                result = num1 * num2;
                break;
            case 'dividir':
                result = (num2 !== 0) ? num1 / num2 : 'Error: División por cero';
                break;
            default:
                result = 'Operación no válida';
                break;
        }

        // Mostrar el resultado
        resultParagraph.textContent = `Resultado: ${result}`;
    });
});
