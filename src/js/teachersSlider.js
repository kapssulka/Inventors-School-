import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const teachersSlider = document.querySelector(".teachers-slider");

if (teachersSlider) {
  const cta = document.querySelector("[data-teacher-cta]");

  const swiper = new Swiper(teachersSlider, {
    modules: [Navigation, Autoplay],

    slidesPerView: 1,
    spaceBetween: 16,

    speed: 500,

    loop: true,

    grabCursor: true,

    navigation: {
      nextEl: ".teachers__arrow--next",
      prevEl: ".teachers__arrow--prev",
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },

    on: {
      init(swiper) {
        updateTeacherButton(swiper);
      },

      slideChange(swiper) {
        updateTeacherButton(swiper);
      },
    },
  });

  function updateTeacherButton(swiper) {
    const currentSlide = swiper.slides[swiper.activeIndex];

    if (!currentSlide || !cta) {
      return;
    }

    const teacherName = currentSlide.dataset.teacherName;
    const whatsappMessage = currentSlide.dataset.whatsappMessage;

    if (teacherName) {
      cta.textContent = `Записаться к ${teacherName}`;
    }

    if (whatsappMessage) {
      const phone = "996555027869";

      cta.href = `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;
    }
  }
}
