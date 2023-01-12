// webp 
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
//page animation
const scrollElements = document.querySelectorAll('.js-scroll');
const elementInView = (el, dividend = 1) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
   );
};
const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
   );
};
const displayScrollElement = (element) => {
   element.classList.add('scrolled');
};
const hideScrollElement = (element) => {
   element.classList.remove('scrolled');
};
const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1)) {
         displayScrollElement(el)
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}
window.addEventListener('scroll', () => {
   handleScrollAnimation();
});
window.addEventListener('load', () => {
   handleScrollAnimation();
});
if (document.querySelector('.body__burger')) {
   // burger
   function burgerMenu() {
      const burger = document.querySelector('.burger')
      const menu = document.querySelector('.menu')
      const logo = document.querySelector('.logo')
      const body = document.querySelector('body')
      burger.addEventListener('click', () => {
         if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            logo.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
         } else {
            menu.classList.remove('active')
            logo.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
         }
      })
      window.addEventListener('resize', () => {
         if (window.innerWidth > 767.98) {
            menu.classList.remove('active')
            logo.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
         }
      })
   }
   burgerMenu();
   function fixedNav() {
      const nav = document.querySelector('nav')
      const breakpoint = 1
      if (window.scrollY > breakpoint) {
         nav.classList.add('fixed__nav')
      } else {
         nav.classList.remove('fixed__nav')
      }
   }
   window.addEventListener('scroll', fixedNav)
}
if (document.querySelector('.body__legend')) {
   // swiper
   var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      loop: !0,
      breakpoints: {
         1138: {
            slidesPerView: 6,
         },
         992: {
            slidesPerView: 5,
         },
         768: {
            slidesPerView: 4,
         },
         650: {
            slidesPerView: 3,
         },
         350: {
            slidesPerView: 2,
         },
         0: {
            slidesPerView: 1,
         },
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 20,
      cssMode: true,
      thumbs: {
         swiper: swiper,
      },
   });
   var swiper3 = new Swiper(".mySwiper3", {
      spaceBetween: 30,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      loop: !0,
      breakpoints: {
         1138: {
            slidesPerView: 6,
         },
         992: {
            slidesPerView: 5,
         },
         768: {
            slidesPerView: 4,
         },
         650: {
            slidesPerView: 3,
         },
         350: {
            slidesPerView: 2,
         },
         0: {
            slidesPerView: 1,
         },
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   var swiper4 = new Swiper(".mySwiper4", {
      spaceBetween: 20,
      cssMode: true,
      thumbs: {
         swiper: swiper3,
      },
   });
   var swiper5 = new Swiper(".mySwiper5", {
      spaceBetween: 30,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      loop: !0,
      breakpoints: {
         1138: {
            slidesPerView: 6,
         },
         992: {
            slidesPerView: 5,
         },
         768: {
            slidesPerView: 4,
         },
         650: {
            slidesPerView: 3,
         },
         350: {
            slidesPerView: 2,
         },
         0: {
            slidesPerView: 1,
         },
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   var swiper6 = new Swiper(".mySwiper6", {
      spaceBetween: 20,
      cssMode: true,
      thumbs: {
         swiper: swiper5,
      },
   });
}
if (document.querySelector('.body__pokedex')) {
   // accordion
   function accordion() {
      const items = document.querySelectorAll('.pokedex__accordion-header')
      items.forEach(item => {
         item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('show')) {
               parent.classList.remove('show')
            } else {
               document
                  .querySelectorAll('.pokedex__accordion-item')
                  .forEach(child => child.classList.remove('show'))
               parent.classList.add('show')
            }
         })
      })
   }
   accordion()
   // swiper
   new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: !1,
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 34,
      cssMode: true,
      breakpoints: {
         769: {
            cssMode: true,
         },
         0: {
            cssMode: false,
         },
      },
      keyboard: {
         enabled: !0,
         onlyInViewport: !1
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
   // filter menu
   function burgerMenu1() {
      const burger = document.querySelector('.filter')
      const menu = document.querySelector('.pokedex__accordion')
      const body = document.querySelector('body')
      burger.addEventListener('click', () => {
         if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
         } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
         }
      })
   }
   burgerMenu1();
   // modal
   var modal = document.getElementsByClassName('modal__wrapper');
   var btn = document.getElementsByClassName("slide");
   var span = document.getElementsByClassName("modal__close");
   // slide 1
   btn[0].onclick = function () {
      modal[0].style.display = "flex";
   }
   btn[1].onclick = function () {
      modal[1].style.display = "flex";
   }
   btn[2].onclick = function () {
      modal[2].style.display = "flex";
   }
   btn[3].onclick = function () {
      modal[3].style.display = "flex";
   }
   btn[4].onclick = function () {
      modal[4].style.display = "flex";
   }
   btn[5].onclick = function () {
      modal[5].style.display = "flex";
   }
   btn[6].onclick = function () {
      modal[6].style.display = "flex";
   }
   btn[7].onclick = function () {
      modal[7].style.display = "flex";
   }
   btn[8].onclick = function () {
      modal[8].style.display = "flex";
   }
   // slide 2
   btn[9].onclick = function () {
      modal[0].style.display = "flex";
   }
   btn[10].onclick = function () {
      modal[1].style.display = "flex";
   }
   btn[11].onclick = function () {
      modal[2].style.display = "flex";
   }
   btn[12].onclick = function () {
      modal[3].style.display = "flex";
   }
   btn[13].onclick = function () {
      modal[4].style.display = "flex";
   }
   btn[14].onclick = function () {
      modal[5].style.display = "flex";
   }
   btn[15].onclick = function () {
      modal[6].style.display = "flex";
   }
   btn[16].onclick = function () {
      modal[7].style.display = "flex";
   }
   btn[17].onclick = function () {
      modal[8].style.display = "flex";
   }
   // slide 3
   btn[18].onclick = function () {
      modal[0].style.display = "flex";
   }
   btn[19].onclick = function () {
      modal[1].style.display = "flex";
   }
   btn[20].onclick = function () {
      modal[2].style.display = "flex";
   }
   btn[21].onclick = function () {
      modal[3].style.display = "flex";
   }
   btn[22].onclick = function () {
      modal[4].style.display = "flex";
   }
   btn[23].onclick = function () {
      modal[5].style.display = "flex";
   }
   btn[24].onclick = function () {
      modal[6].style.display = "flex";
   }
   btn[25].onclick = function () {
      modal[7].style.display = "flex";
   }
   btn[26].onclick = function () {
      modal[8].style.display = "flex";
   }

   // all slidea
   span[0].onclick = function () {
      modal[0].style.display = "none";
   }
   span[1].onclick = function () {
      modal[1].style.display = "none";
   }
   span[2].onclick = function () {
      modal[2].style.display = "none";
   }
   span[3].onclick = function () {
      modal[3].style.display = "none";
   }
   span[4].onclick = function () {
      modal[4].style.display = "none";
   }
   span[5].onclick = function () {
      modal[5].style.display = "none";
   }
   span[6].onclick = function () {
      modal[6].style.display = "none";
   }
   span[7].onclick = function () {
      modal[7].style.display = "none";
   }
   span[8].onclick = function () {
      modal[8].style.display = "none";
   }
   // all area click
   window.onclick = function (event) {
      if (event.target == modal[0]) {
         modal[0].style.display = "none";
      }
      if (event.target == modal[1]) {
         modal[1].style.display = "none";
      }
      if (event.target == modal[2]) {
         modal[2].style.display = "none";
      }
      if (event.target == modal[3]) {
         modal[3].style.display = "none";
      }
      if (event.target == modal[4]) {
         modal[4].style.display = "none";
      }
      if (event.target == modal[5]) {
         modal[5].style.display = "none";
      }
      if (event.target == modal[6]) {
         modal[6].style.display = "none";
      }
      if (event.target == modal[7]) {
         modal[7].style.display = "none";
      }
      if (event.target == modal[8]) {
         modal[8].style.display = "none";
      }
   }
}