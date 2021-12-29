// slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

// deals

var swiperDeals = new Swiper(".deals_product-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

// deals count

var fuT = new Date("jan 1,2024 00:00:00").getTime();
setInterval(function () {
  var now = new Date().getTime();
  var D = fuT - now;
  var days = Math.floor(D / (1000 * 60 * 60 * 24));
  var hours = Math.floor(D / (1000 * 60 * 60));
  var minutes = Math.floor(D / (1000 * 60));
  var seconds = Math.floor(D / 1000);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);
