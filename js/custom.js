$(function () {
  const firstSwiper = new Swiper(".main_slide .first-swiper", {
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".first-swiper .swiper-button-n",
      prevEl: ".first-swiper .swiper-button-p",
    },

    pagination: {
      el: ".first-swiper .swiper-pagination",
      clickable: "true",
      type: "bullets",
    },

    slideActiveClass: "on",

    autoplay: {
      // delay: 1000,
      disableOnInteraction: false,
    },
  });

  $(".main_tab li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".tab_content .second-swiper")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  var secondSwiper = new Swiper(".main_visual .second-swiper", {
    slidesPerView: 5,
    spaceBetween: 22,

    loop: true,

    pagination: {
      el: ".second-swiper .swiper-pagination",
      clickable: "true",
      type: "bullets",
    },
    navigation: {
      prevEl: ".swiper-button-nn",
      nextEl: ".swiper-button-pp",
    },
    slideActiveClass: "on",
  });

  var thirdSwiper = new Swiper(".right_box_slide .third-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    pagination: {
      el: ".third-swiper .swiper-pagination",
      clickable: "true",
      type: "bullets",
    },
    // navigation: {
    //   prevEl: ".swiper-button-nn",
    //   nextEl: ".swiper-button-pp",
    // },
    slideActiveClass: "on",
  });
});
