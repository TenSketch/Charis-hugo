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

// navbar appear on scroll up 
const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    // console.log("current: ", currentScroll);
    // console.log("last: ", lastScroll);

    if (currentScroll - lastScroll > 0) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else {
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
    // console.log("last: ", lastScroll);

})


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


// let buttonRight = document.getElementById('slideRight');
// let buttonLeft = document.getElementById('slideLeft');

// buttonLeft.addEventListener('click', function () {
//   document.getElementById('prod_slider').scrollLeft -= 180
// })

// buttonRight.addEventListener('click', function () {
//   document.getElementById('prod_slider').scrollLeft += 180
// })


  