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
// Función para aplicar ScrollReveal solo en pantallas grandes (más de 1025px)
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
      delay: 1300,                 // Espera 0.3 segundos antes de revelar
      distance: '50px',           // El contenido aparece desde 50px abajo
      origin: 'top',           // Aparece desde arriba
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
  }
}

// Aplica las animaciones ScrollReveal para pantallas grandes (más de 1025px)
applyScrollRevealForDesktop();

// Opcional: Actualiza ScrollReveal cuando cambie el tamaño de la ventana
window.addEventListener('resize', function() {
  applyScrollRevealForDesktop();
});









// Suponiendo que tienes una función que determina la sección activa
function setActiveNavLink() {
  // Obtén todos los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav__links a'); // Asegúrate de seleccionar los enlaces dentro de .nav__links

  // Recorre cada enlace y quita el atributo aria-current
  navLinks.forEach(link => link.removeAttribute('aria-current'));

  // Determina cuál enlace debe ser el activo
  const currentSection = document.querySelector('.current'); // Asegúrate de que la clase 'current' esté en la sección activa
  if (currentSection) {
    const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
    if (activeLink) {
      activeLink.setAttribute('aria-current', 'page');
    }
  }
}

// Llama a esta función en el momento adecuado, por ejemplo, cuando se carga la página o se navega a una nueva sección
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// También puedes llamar a la función en eventos de desplazamiento si tu navegación es dinámica
window.addEventListener('scroll', setActiveNavLink);








function loadCSS(href, callback) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = callback;
  document.head.appendChild(link);
}

// Cargar Boxicons después de un retraso o bajo demanda
setTimeout(function() {
  loadCSS('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css', function() {
    console.log('Boxicons CSS cargado');
    // Aquí puedes realizar cualquier acción adicional si es necesario
  });
}, 3000); // Retraso de 3 segundos, ajusta según tus necesidades