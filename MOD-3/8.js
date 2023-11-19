document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultParagraph = document.getElementById('result');
    const calculateButton = document.getElementById('start');

    function add(num1, num2) {
        return num1 + num2;
    }


    function subtract(num1, num2) {
        return num1 - num2;
    }


    function multiply(num1, num2) {
        return num1 * num2;
    }


    function divide(num1, num2) {
        // Check if the second number is not zero before division
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    }

    const operations = {
        'add': add,
        'sub': subtract,
        'multi': multiply,
        'div': divide,
    };


    function calculate() {

        const num1 = parseInt(num1Input.value, 10);
        const num2 = parseInt(num2Input.value, 10);


        const operation = operationSelect.value;


        const result = operations[operation] ? operations[operation](num1, num2) : 'Invalid operation';

        resultParagraph.textContent = `Result: ${result}`;
    }


    calculateButton.addEventListener('click', calculate);
});
