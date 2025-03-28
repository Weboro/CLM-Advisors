(function() {

  'use strict';

  // preloader
  $(window).on('load', function() {
    $('.loader').fadeOut('slow');
  });

  // smooth scroll
  $("a").on("click", function(event) {

      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate({

              scrollTop: $(hash).offset().top - 50

          }, 850);

      }

  });

  // product filterizr
  $('.filtr-container').imagesLoaded( function() {
      var filterizr = $('.filtr-container').filterizr();
  });

  // product filter
  $('.product-filter-menu li').on('click', function() {
      $('.product-filter-menu li').removeClass('active');
      $(this).addClass('active');
  });

  // product magnific popup
  $('.product').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: '.product-popup', // the selector for portfolio item
          type: 'image',
          gallery: {
              enabled: true
          }
      });
  });


  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        780: {
          slidesPerView: 1,
        }
      }
    });
  });

  // navbar toggler icon
  $(document).on("click",".navbar-toggler",function(e){
      $(this).parent().siblings().find('i').removeClass('la-remove')
    $(this).find('i').toggleClass('la-remove')
  });

  // navbar on scroll
  $(window).on("scroll", function() {

      var onScroll = $(this).scrollTop();

      if( onScroll > 50) {
          $(".navbar").addClass("navbar-fixed");
      }
      else {
          $(".navbar").removeClass("navbar-fixed");
      }

  });

  // counter
  $('.number-counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})();

// contact form
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get form values
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   // Simple validation (you can extend this)
//   if (name && email && message) {
//     // Simulate successful form submission
//     document.getElementById('responseMessage').innerHTML = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
//     document.getElementById('responseMessage').style.color = 'green';
    
//     // Reset form fields
//     document.getElementById('contactForm').reset();
//   } else {
//     // Show error message
//     document.getElementById('responseMessage').innerHTML = 'Please fill out all fields.';
//     document.getElementById('responseMessage').style.color = 'red';
//   }
// });

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  const hCaptchaResponse = form.querySelector(
    "textarea[name=h-captcha-response]"
  );

  const errorMessage = document.getElementById("captchaError");

  if (!hCaptchaResponse || !hCaptchaResponse.value) {
    e.preventDefault();
    errorMessage.textContent =
      "Hey, can you confirm you’re a real person? Thanks!";
    errorMessage.style.display = "block";
    return;
  }

  // Hide error message if captcha is filled
  errorMessage.style.display = "none";
});