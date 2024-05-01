document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let menu = document.getElementById('menu');
    let openMenuBtn = document.getElementById('openMenuBtn');
    let closeMenuBtn = document.getElementById('closeMenuBtn');

    openMenuBtn.addEventListener("click", function () {
        menu.style.display = 'flex';
    })
    menu.addEventListener("click", function () {
        menu.style.display = 'none';
    })
})