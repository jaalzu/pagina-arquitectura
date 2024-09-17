
//  NAV RESPONSIVE 
document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.getElementById('toggle-menu');
    const navList = document.getElementById('nav-list');
    const closeMenu = document.getElementById('close-menu');
  
   
    toggleMenu.addEventListener('click', function () {
      navList.classList.add('show-menu');
      toggleMenu.style.display = 'none';  
      closeMenu.style.display = 'block';  
    });
  
    closeMenu.addEventListener('click', function () {
      navList.classList.remove('show-menu'); 
      closeMenu.style.display = 'none';  
      toggleMenu.style.display = 'block';
    });
  });
  







// SWIPER JS  


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    spaceBetween:20,

    centeredSlides:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
   
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    initialSlide:1,
  });









function applyScrollRevealForDesktop() {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    function revealElements(selector) {
      ScrollReveal().reveal(selector, {
        duration: 500,
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        scale: 0.85,
        easing: 'ease-in-out',
        reset: false,
        viewFactor: 0.3,
        interval: 200
      });
    }

    revealElements('.about__description');
    revealElements('.services__container');
    revealElements('.work__box');
    revealElements('.swiper-wrapper');
    revealElements('.contact__grid');

    ScrollReveal().reveal('.section__title', {
      delay: 1300,                 
      distance: '50px',           
      origin: 'top',          
      duration: 1600,             
      opacity: 0,                
      scale: 0.85,                
      easing: 'ease-in-out',      
      reset: false,               
      beforeReveal: function (el) {
        
        el.classList.add('animate__animated', 'animate__backInUp');
      }
    });
  }
}

applyScrollRevealForDesktop();

window.addEventListener('resize', function() {
  applyScrollRevealForDesktop();
});













// Función para añadir animaciones solo en pantallas grandes (más de 1025px)
function applyAnimationsForDesktop() {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    document.querySelector('.hero__title').classList.add('animate__animated', 'animate__backInUp');
    document.querySelector('.hero__p').classList.add('animate__animated', 'animate__backInUp');
    document.querySelector('.btn-primary').classList.add('animate__animated', 'animate__fadeInLeft');
  } else {
    document.querySelector('.hero__title').classList.remove('animate__animated', 'animate__backInUp');
    document.querySelector('.hero__p').classList.remove('animate__animated', 'animate__backInUp');
    document.querySelector('.btn-primary').classList.remove('animate__animated', 'animate__fadeInLeft');
  }
}

// Aplica las animaciones para pantallas grandes (más de 1025px)
applyAnimationsForDesktop();

// Actualiza animaciones cuando cambie el tamaño de la ventana
window.addEventListener('resize', function() {
  applyAnimationsForDesktop();
});
