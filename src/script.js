document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.getElementById('toggle-menu');
    const navList = document.getElementById('nav-list');
    const closeMenu = document.getElementById('close-menu');
  
    // Abrir el menú cuando se hace clic en el ícono del menú
    toggleMenu.addEventListener('click', function () {
      navList.classList.add('show-menu'); // Agrega la clase 'show-menu'
      toggleMenu.style.display = 'none'; // Oculta el ícono del menú
      closeMenu.style.display = 'block'; // Muestra el ícono de cerrar
    });
  
    // Cerrar el menú cuando se hace clic en el ícono de cerrar
    closeMenu.addEventListener('click', function () {
      navList.classList.remove('show-menu'); // Remueve la clase 'show-menu'
      closeMenu.style.display = 'none'; // Oculta el ícono de cerrar
      toggleMenu.style.display = 'block'; // Muestra el ícono del menú
    });
  });
  


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
    delay: 1300,                 // Espera 0.3 segundos antes de revelar
    distance: '50px',           // El contenido aparece desde 50px abajo
    origin: 'top',           // Aparece desde abajo
    duration: 1600,              // La duración de la animación ScrollReveal
    opacity: 0,                 // Cambia la opacidad para que el elemento "se desvanezca" al aparecer
    scale: 0.85,                // Escala inicial para el elemento
    easing: 'ease-in-out',      // Transición suave
    reset: false,               // No repite la animación al hacer scroll
    beforeReveal: function (el) {
      // Agrega la clase de Animate.css cuando se revele el elemento
      el.classList.add('animate__animated', 'animate__backInUp');
    }
  });



