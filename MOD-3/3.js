document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    const targetElement = document.getElementById("target");
    const names = ['John', 'Paul', 'Jones'];
    let html = "";

    for (let i = 0; i < names.length; i++) {
        html += '<li>' + names[i] + '</li>';
    }

    targetElement.innerHTML = html;
});


