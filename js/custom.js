$(function () {

$(".mopen").on("click", function () {
  $(".header_bottom .gnb").toggleClass("on");
  $(this).find(".hamburger").toggleClass("is-active");
});

  var titArray = []; //슬라이드 타이틀
  $('.main_slide .slide_tit > li').each(function (index, item) {
    var txt = $(this).text();
    titArray.push(txt);
  })

  const firstSwiper = new Swiper(".main_slide .first-swiper", {
    effect: "fade",
    // fadeEffect: {
    //   crossFade: true
    // },

    loop: true,
    speed: 1000,
    delay: 3000,

    navigation: {
      nextEl: ".first-swiper .swiper-button-n",
      prevEl: ".first-swiper .swiper-button-p",
    },

    pagination: {
      el: '.main_slide .slide_tit',
      clickable: 'true',
      type: 'bullets',
      renderBullet: (index, className) => {
        return `<li class=${className}><span class="bar"></span><span class="txt">${titArray[index]}</span></li>`;
      },
    },

    // pagination: {
    //   el: ".first-swiper .swiper-pagination",
    //   clickable: "true",
    //   type: "bullets",
    // },

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
    spaceBetween: 38,

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

    // pagination: {
    //   el: ".third-swiper .swiper-pagination",
    //   clickable: "true",
    //   type: "bullets",
    // },
    // navigation: {
    //   prevEl: ".swiper-button-nn",
    //   nextEl: ".swiper-button-pp",
    // },
    slideActiveClass: "on",
  });
});
