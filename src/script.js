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




