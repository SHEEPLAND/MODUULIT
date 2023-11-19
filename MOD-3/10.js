document.addEventListener("DOMContentLoaded", function () {

    const formElement = document.getElementById("source");
    const targetParagraph = document.getElementById("target");


    formElement.addEventListener('submit', function (event) {

        event.preventDefault();


        const firstNameInput = document.querySelector('input[name="firstname"]');
        const lastNameInput = document.querySelector('input[name="lastname"]');


        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;


        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    });
});
