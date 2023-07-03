// is return you number of scrollY of page  :
// window.addEventListener("scroll" , ()=> {
//     console.log(window.pageYOffset)
// })

let navbar = document.querySelector(".nav-bar");
let home = document.querySelector(".home-car");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let navheight = navbar.getBoundingClientRect().height;
  if (scroll > navheight) {
    navbar.classList.add("box-shadow");
  } else {
    navbar.classList.remove("box-shadow");
  }
});



/* **********************************************************0 */

// burger menu :

let burger = document.querySelector(".burger");
let link = document.querySelector(".link-nav-cont");
let nav = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
  burger.classList.toggle("show");
  link.classList.toggle("show");
  link.style.transition = "0.8s";
  nav.classList.toggle("nav-blur");
  nav.style.transition = " all 0.8s ease";
});

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let navheight = home.getBoundingClientRect().height;
  if (scroll > navheight) {
    // link.classList.add("box-shadow");
    link.style.transition = " all 0.8s";
  } else {
    // link.classList.remove("box-shadow");
    link.style.transition = " all 0.8s";
  }
});


/* **********************************************************0 */
// scroll to top 


let scrollbtn = document.querySelector(".scroll") ;
let btn = document.querySelector(".btn") ;
  window.addEventListener ("scroll" , ()=> {
    let scrollY = window.pageYOffset;
    let navheight = navbar.getBoundingClientRect().height;
    if ( scrollY > navheight) {
      scrollbtn.classList.add("show-scroll")
    }else {
      scrollbtn.classList.remove("show-scroll")
    }
  })

  btn.addEventListener("click" , ()=> {
    window.scrollTo({
      top : 0 ,
      left : 0 ,
      behavior: "smooth",
    }) ;
  })









































