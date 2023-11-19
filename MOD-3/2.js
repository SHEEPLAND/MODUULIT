document.addEventListener('DOMContentLoaded', function () {

    let targetElement = document.getElementById('target');


    let listItem1 = document.createElement('li');
    listItem1.textContent = 'First item';

    let listItem2 = document.createElement('li');
    listItem2.textContent = 'Second item';

    let listItem3 = document.createElement('li');
    listItem3.textContent = 'Third item';


    targetElement.appendChild(listItem1);
    targetElement.appendChild(listItem2);
    targetElement.appendChild(listItem3);
});
