document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.testimonials__swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.testimonials__swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3, // вот тут можно задать максимум
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });

  new Swiper('.our-experts__swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.our-experts__swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3, // вот тут можно задать максимум
    },
    breakpoints: {
      490: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
    }
  });

});


// mobileNavButton.addEventListener('click', function (e) {
//   e.preventDefault();
//   mobileNav.classList.toggle('open');
//   mobileNavButton.classList.toggle('open');
//   documentBody.classList.toggle('open');
// });


const mobileNavButton = document.querySelector('.mobile-nav__btn');
const mobileNavButtonIcon = document.querySelector('.mobile-nav__btn-icon');
const mobileNav = document.querySelector('.mobile-nav');
const documentBody = document.querySelector('.body');

document.addEventListener('click', function (e) {

  const btn = e.target.closest('.mobile-nav__btn');
  if (btn) {
    e.preventDefault();
    mobileNav.classList.toggle('open');
    btn.classList.toggle('open');
    documentBody.classList.toggle('open');
  } else return;



});



// document.getElementById('consultationForm').addEventListener('submit', function (e) {
//   const form = e.target;
//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const error = document.getElementById('formError');

//   error.style.display = 'none';
//   error.textContent = '';

//   if (name.length < 2) {
//     e.preventDefault();
//     error.textContent = 'Please enter a valid name (at least 2 characters)';
//     error.style.display = 'block';
//     return;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     e.preventDefault();
//     error.textContent = 'Please enter a valid email address';
//     error.style.display = 'block';
//     return;
//   }

//   // Если всё ок — форма отправится
// });
