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

window.onscroll = function () {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


// product images thumbnail slider 
let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {

  thumbnails[i].addEventListener('mouseover', function () {
    console.log(activeImages)

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }


    this.classList.add('active')
    document.getElementById('featured').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function () {
  document.getElementById('prod_slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function () {
  document.getElementById('prod_slider').scrollLeft += 180
})


  