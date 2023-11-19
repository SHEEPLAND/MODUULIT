document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const calculationInput = document.getElementById("calculation");
    const resultParagraph = document.getElementById("result");
    const calculateButton = document.getElementById("start");

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
        return num2 !== 0 ? Math.floor(num1 / num2) : 'Cannot divide by zero';
    }

    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };

    function performCustomCalculation() {
        const userInput = calculationInput.value;

        if (userInput.includes('+') || userInput.includes('-') || userInput.includes('*') || userInput.includes('/')) {

            const [num1, operator, num2] = userInput.split(/\+|\-|\*|\//);

            const trimmedOperator = operator.trim();


            const parsedNum1 = parseInt(num1, 10);
            const parsedNum2 = parseInt(num2, 10);

            if (operations.hasOwnProperty(trimmedOperator)) {
                const result = operations[trimmedOperator](parsedNum1, parsedNum2);

                resultParagraph.textContent = `Result: ${result}`;
            } else {
                resultParagraph.textContent = 'Invalid operator';
            }
        } else {
            resultParagraph.textContent = 'Invalid input';
        }
    }

    calculateButton.addEventListener('click', performCustomCalculation);
});
