// navbar
let menuToggle = document.querySelector('.nav__toggle');
let navigation = document.querySelector('.nav_list');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');

menuToggle.onclick = function () {

    navigation.classList.toggle('active')
    bar1.classList.toggle('change')
    bar2.classList.toggle('change')
    bar3.classList.toggle('change')
}

// product slider new
    