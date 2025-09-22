export const codeExamples = {
  Sample: [
    [
      {
        id: "super-week-1",
        title: "노르디스크 수퍼위크 (기간한정)",
        type: "HTML",
        code: `<div class="img-box">
  <img src="./images/top_img.jpg" alt="노르디스크 수퍼위크" />
  <div class="top-banner-swiper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/slide/top/1.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/slide/top/2.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/slide/top/3.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/slide/top/1.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/slide/top/2.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/slide/top/3.png" />
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        id: "super-week-2",
        title: "",
        type: "JS",
        code: `const collectionSwiper = new Swiper(".top-banner-swiper .swiper", {
  observer: true,
  observeParents: true,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  spaceBetween: parseInt($(window).width() * 0),
  centeredSlides: true,
  slidesPerView: 1.5,
});`,
      },
    ],
    [
      {
        id: "basic-1",
        title: "기본형",
        type: "HTML",
        code: `<div class="">
  <img src="./images/" alt="입력해주세요." />
</div>`,
      },
    ],
    [
      {
        id: "button-1",
        title: "버튼형",
        type: "HTML",
        code: `<div class="sec01">
  <img src="./images/" alt="입력해주세요" />
  <img src="./images/.jpg" class="kioskDel" />
  <a href="#" id="link0" data-order="0" class="link-btn kioskDel">
    <img src="./images/" />
  </a>
  <img src="./images/" />
</div>`,
      },
    ],
    [
      {
        id: "swiper-basic-1",
        title: "Swiper 기본형",
        type: "HTML",
        code: `<div class="basic">
  <img src="./images/" alt="입력해주세요" />
  <div class="swiper-mask swiper1">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</div>`,
      },
      {
        id: "swiper-basic-2",
        title: "",
        type: "JS",
        code: `// swiper 반복문 [S]
const swiperObj1 = {};
const swiperMasks = document.querySelectorAll(".basic .swiper-mask");

swiperMasks.forEach((mask, index) => {
  const swiperIndex = index + 1;
  swiperObj1[\`swiper\${swiperIndex}\`] = new Swiper(
    \`.basic .swiper\${swiperIndex} .swiper\`,
    {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: Math.floor(window.innerWidth * 0.0),

      pagination: {
        el: \`.basic .swiper\${swiperIndex} .swiper-pagination\`,
      },
      navigation: {
        nextEl: \`.basic .swiper\${swiperIndex} .swiper-button-next\`,
        prevEl: \`.basic .swiper\${swiperIndex} .swiper-button-prev\`,
      },
      scrollbar: {
        el: \`.basic .swiper\${swiperIndex} .swiper-scrollbar\`,
      },
    }
  );
});
// swiper 반복문 [E]`,
      },
    ],
    [
      {
        id: "swiper-basic-css-1",
        title: "기본 Swiper CSS",
        type: "CSS",
        code: `/* 만약 position으로 띄울 경우 사용 */
/* .swiper-mask .swiper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 30%;
} */
.swiper-mask .swiper {
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
}
.swiper-mask .swiper-scrollbar {
  width: 90%;
  height: 0.8vw;
  background-color: #efe4e4;
  margin-top: 3vw;
}
.swiper-mask .swiper-scrollbar-drag {
  background-color: #ba0c2f;
}`,
      },
    ],
    [
      {
        id: "swiper-fade-effect-1",
        title: "Swiper Fade Effect",
        type: "JS",
        code: `// swiper 반복문 [S]
const swiperObj1 = {};
const swiperMasks = document.querySelectorAll(".fade .swiper-mask");

swiperMasks.forEach((mask, index) => {
  const swiperIndex = index + 1;
  swiperObj1[\`swiper\${swiperIndex}\`] = new Swiper(
    \`.fade .swiper\${swiperIndex} .swiper\`,
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
});
// swiper 반복문 [E]`,
      },
    ],
    [
      {
        id: "toggle-box-1",
        title: "토글 박스형",
        type: "HTML",
        code: `<div class="">
  <div class="toggle-box">
    <div class="toggle-box__btns">
      <img src="./images/toggle_on.jpg" />
      <img src="./images/toggle_off.jpg" />
    </div>
    <div class="toggle-box__con">
      <img src="./images/toggle_content.jpg" />
    </div>
  </div>
</div>`,
      },
    ],
    [
      {
        id: "link-connect-1",
        title: "링크연결형",
        type: "HTML",
        code: `<div class="img-box">
  <img src="./images/" alt="입력해주세요" />
  <span class="goto-link kioskDel">
    <a href="tel:02-123-5678">입력해주세요</a>
  </span>
</div>`,
      },
      {
        id: "link-connect-2",
        title: "",
        type: "CSS",
        code: `.goto-link a {
  position: absolute;
  width: 10%;
  height: 10%;
  left: 0%;
  bottom: 0;
  text-indent: -9999px;
  background-color: rgba(0, 0, 255, 0.7);
}
.goto-link:nth-of-type(1) a {
  bottom: 10%;
}`,
      },
    ],
    [
      {
        id: "flow-banner-swiper-1",
        title: "흐르는 배너(swiper)",
        type: "HTML",
        code: `<div class="flow">
  <div class="swiper-mask swiper1">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://placehold.co/1640x280/000/fff"
            alt="임시코드" />
        </div>
        <div class="swiper-slide">
          <img
            src="https://placehold.co/1640x280/000/fff"
            alt="임시코드" />
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        id: "flow-banner-swiper-2",
        title: "",
        type: "JS",
        code: `const swiperObj1 = {};
const swiperMasks1 = document.querySelectorAll(".flow .swiper-mask");

swiperMasks1.forEach((mask, index) => {
  const swiperIndex = index + 1;
  swiperObj1[\`swiper\${swiperIndex}\`] = new Swiper(
    \`.flow .swiper\${swiperIndex} .swiper\`,
    {
      slidesPerView: "auto",
      spaceBetween: -1,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false, // 방향
      },
      loop: true,
      speed: 20000,
      observer: true,
      observeParents: true,
      mousewheel: false,
      simulateTouch: false,
      pauseOnMouseEnter: false,
      allowTouchMove: false,
      grabCursor: false,
    }
  );
});`,
      },
      {
        id: "flow-banner-swiper-3",
        title: "",
        type: "CSS",
        code: `.flow .swiper-wrapper {
  transition-timing-function: linear !important;
}
.flow .swiper-wrapper .swiper-slide {
  /* 이미지의 가로값 계산 */
  width: clamp(820px, 218.6666vw, 1640px);
}`,
      },
    ],
    [
      {
        id: "reserved-time-1",
        title: "특정 시간 예약 걸기",
        type: "HTML",
        code: `<div data-time="202512250000" class="schedule">
  <div class="schedule-item open">
    <img src="https://placehold.co/750x600?text=Start" alt="" />
  </div>
  <div class="schedule-item reserved delete">
    <img src="https://placehold.co/750x600/000/fff/?text=Done" alt="" />
  </div>
</div>`,
      },
      {
        id: "reserved-time-2",
        title: "",
        type: "JS",
        code: `// ! 예약 시간 걸기 [S]
const getFormattedDateNum = () => {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0"); // 초까지 포함
  return Number(\`\${year}\${month}\${day}\${hours}\${minutes}\${seconds}\`);
};

// 페이지 로드 시점 기준 시간
const initialTime = getFormattedDateNum();

// 스케줄 요소 캐싱
const scheduleEls = document.querySelectorAll(".schedule");

const checkSchedules = () => {
  const currentTime = getFormattedDateNum(); // YYYYMMDDHHmmss
  let allDone = true;

  scheduleEls.forEach((el) => {
    let targetTime = el.dataset.time;

    // 데이터 값이 없으면 +3초
    if (!targetTime) {
      targetTime = initialTime + 3;
    }
    // 데이터 값이 분까지만 있으면 "00초" 붙임
    else if (targetTime.length === 12) {
      targetTime = targetTime + "00"; // YYYYMMDDHHmm00
    }

    targetTime = Number(targetTime);

    // console.log(\`데이터값 : \${targetTime}\`);

    if (!targetTime || el.classList.contains("done")) return;

    if (currentTime >= targetTime) {
      el.querySelectorAll(".schedule-item").forEach((child) => {
        const isReserved = child.classList.contains("reserved");
        child.classList.toggle("open", isReserved);
        child.classList.toggle("delete", !isReserved);
      });
      el.classList.add("done");
    } else {
      allDone = false;
    }
  });

  if (allDone) {
    // console.log("모든 스케쥴이 완료되었습니다.");
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(checkSchedules, 1000);
checkSchedules();
// ! 예약 시간 걸기 [E]`,
      },
      {
        id: "reserved-time-3",
        title: "",
        type: "CSS",
        code: `.open {display: block;}
.delete {display: none;}`,
      },
    ],
    [
      {
        id: "pagination-fraction-1",
        title: "Swiper Pagination fraction",
        type: "HTML",
        code: `<div class="basic">
  <div class="swiper-mask swiper1">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/" />
        </div>
      </div>
      <div class="fraction-pagination"></div>
    </div>
  </div>
</div>`,
      },
      {
        id: "pagination-fraction-2",
        title: "",
        type: "JS",
        code: `// swiper 반복문 [S]
const swiperObj1 = {};
const swiperMasks = document.querySelectorAll(".basic .swiper-mask");
const fractionEl = document.querySelectorAll(".fraction-pagination");

swiperMasks.forEach((mask, index) => {
  const swiperIndex = index + 1;
  swiperObj1[\`swiper\${swiperIndex}\`] = new Swiper(
    \`.basic .swiper\${swiperIndex} .swiper\`,
    {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: Math.floor(window.innerWidth * 0.0),
      on: {
        init: function () {
          updateFraction(this, fractionEl[index]);
        },
        slideChange: function () {
          updateFraction(this, fractionEl[index]);
        },
      },
    }
  );
});
function updateFraction(swiper, fractionEl) {
  if (!fractionEl) return;
  const current = swiper.realIndex + 1;
  const total = swiper.slides.length;
  fractionEl.innerHTML = \`<img src="./images/fraction/\${current}.png" alt="\${current}/\${total}" />\`;
}
// swiper 반복문 [E]`,
      },
      {
        id: "pagination-fraction-3",
        title: "",
        type: "CSS",
        code: `.fraction-pagination {
  width: clamp(27.5px, 7.3333vw, 55px);
  margin: 0 auto;
  margin-top: 8vw;
}`,
      },
    ],
    /*
    [
      {
        id: "",
        title: "",
        type: "",
        code: ``,
      },
    ],
    */
  ],
} as const;
