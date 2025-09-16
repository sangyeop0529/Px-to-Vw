export const codeExamples = {
  Sample: {
    "1": {
      title: "기본형",
      type: "HTML",
      code: `<div class="top01">
  <img src="./images/top01.jpg" alt="" />
</div>`,
    },
    "2": {
      title: "버튼형",
      type: "HTML",
      code: `<div class="sec03">
  <img src="./images/sec03_1.jpg" alt="" />
  <img src="./images/sec03_2.jpg" class="kioskDel" />
  <a href="#" id="link1" data-order="0" class="link-btn kioskDel">
    <img src="./images/sec03_3.jpg" />
  </a>
  <img src="./images/sec03_4.jpg" />
</div>`,
    },
    "3": {
      title: "Swiper 기본형",
      type: "HTML",
      code: `<div class="tab02 tabBox">
  <img src="./images/tab1/tab01_2.jpg" alt="" />
  <div class="swiper-mask swiper1">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/tab2/slide/1/1.png" /></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</div>`,
    },
    "4": {
      title: "기본 Swiper JS",
      type: "JS",
      code: `// swiper 반복문 [S]
let swiperObj1 = {};
for (let index = 1; index <= $(".tabBox .swiper-mask").length; index++) {
  swiperObj1[\`swiper\${index}\`] = new Swiper(
    \`.tabBox .swiper\${index} .swiper\`,
    {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: parseInt($(window).width() * 0.0),

      pagination: {
        el: \`.tabBox .swiper\${index} .swiper-pagination\`,
      },
      navigation: {
        nextEl: \`.tabBox .swiper\${index} .swiper-button-next\`,
        prevEl: \`.tabBox .swiper\${index} .swiper-button-prev\`,
      },
      scrollbar: {
        el: \`.tabBox .swiper\${index} .swiper-scrollbar\`,
      },
    }
  );
}
// swiper 반복문 [E]`,
    },
    "5": {
      title: "기본 Swiper CSS",
      type: "CSS",
      code: `.swiper-mask .swiper {
  padding: 0 8vw;
}
.swiper-mask .swiper-pagination {
  margin-top: 8vw;
}
.swiper-pagination-bullet {
  background-color: #efe4e4;
}
.swiper-pagination-bullet-active {
  background-color: #ba0c2f;
}
.swiper-mask .swiper-button-prev,
.swiper-mask .swiper-button-next {
  width: 8vw;
  height: 8vw;
  top: 25%;
}
.swiper-mask .swiper-button-prev {
  left: 8vw;
}
.swiper-mask .swiper-button-next {
  right: 8vw;
}`,
    },
    "6": {
      title: "Fade Effect",
      type: "JS",
      code: `// swiper 반복문 [S]
let swiperObj1 = {};
for (let index = 1; index <= $(".fade .swiper-mask").length; index++) {
  swiperObj1[\`swiper\${index}\`] = new Swiper(
    \`.fade .swiper\${index} .swiper\`,
    {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 2000,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
    }
  );
}
// swiper 반복문 [E]`,
    },
    // END
  },
} as const;
