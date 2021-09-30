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

// navbar change color on scroll down
var navbar = document.querySelector('header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}