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
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 2,
    },
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

// news
if ($(document).width() < 480) {
  $(document).ready(function () {
    $(".news-wrap").slick({
      responsive: [
        {
          breakpoint: 480,
          settings: {
            autoplaySpeed: 2000,
            autoplay: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}

// nav-mb

const navmb = document.querySelector(".nav-mb i");
const menuNav = document.querySelector(
  ".header_nav-selection .header-selection"
);
const overlay = document.querySelector(".overflow");

navmb.onclick = function () {
  menuNav.style.transform = "translateX(0)";
  menuNav.style.opacity = "1";
  overlay.style.display = "block";
};

// close nav

const closenav = document.querySelector(".icon-close");

closenav.onclick = function () {
  menuNav.style.transform = "translateX(100%)";
  menuNav.style.opacity = "0";
  overlay.style.display = "none";
};

overlay.onclick = function () {
  menuNav.style.transform = "translateX(100%)";
  menuNav.style.opacity = "0";
  overlay.style.display = "none";
};

// footer moblie

jQuery.fn.extend({
  setMenu: function () {
    return this.each(function () {
      const containermenu = $(this);

      const itemmenu = containermenu.find(".iconfooter");
      itemmenu.click(function () {
        const isopened = containermenu
          .find(".footer-item-content")
          .css("display");
        if (isopened == "none") {
          const iconitem = containermenu.find(".footer-item-title i");
          iconitem.css("transform", "rotateZ(180deg)");
        }
        if (isopened == "block") {
          const iconitem = containermenu.find(".footer-item-title i");
          iconitem.css("transform", "rotateZ(0deg)");
        }
        const submenuitem = containermenu.find(".footer-item-content");
        submenuitem.slideToggle();
      });
      if ($(document).width() < 767) {
        $(document).click(function (e) {
          if (
            !containermenu.is(e.target) &&
            containermenu.has(e.target).length === 0
          ) {
            const isopened = containermenu
              .find(".footer-item-content")
              .css("display");
            if (isopened == "block") {
              containermenu.find(".footer-item-content").slideToggle();
              const iconitem = containermenu.find(".footer-item-title i");
              iconitem.css("transform", "rotateZ(0deg)");
            }
          }
        });
      }
    });
  },
});

$(".footer-item").setMenu();
