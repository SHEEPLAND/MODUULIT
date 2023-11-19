'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  }
];

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const targetElement = document.getElementById('target');


    const fragment = document.createDocumentFragment();

    for (let i = 0; i < students.length; i++) {

        const optionElement = document.createElement('option');

        optionElement.value = students[i].id;
        optionElement.textContent = students[i].name;


        fragment.appendChild(optionElement);
    }


    targetElement.appendChild(fragment);
});
