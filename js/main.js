const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween:27,
    navigation: {
    nextEl: '.slider__arrow',
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 480px
      730: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  const burger = document.querySelector('.menu-burger');
  const closeMenu = document.querySelector('.header__menu-close');
  const menu = document.querySelector('.header');

  burger.addEventListener('click', ()=> {
    menu.style.display = 'block';
    closeMenu.style.display = 'block';
    burger.style.display = 'none';

  })

  closeMenu.addEventListener('click', ()=> {
    menu.style.display = 'none';
    burger.style.display = 'block';
  })

  const modalWindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.promo__button-play');

  buttonModal.addEventListener('click', (e)=> {
    modalWindow.classList.add('active')
  })
  modalWindow.addEventListener('click', (e)=> {
      const isModal = e.target.closest('.modal__wrap')
      if (!isModal) {
        modalWindow.classList.remove('active')
      }
  })

