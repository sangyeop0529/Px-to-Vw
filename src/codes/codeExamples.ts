export const codeExamples = {
  Sample: {
    "1": {
      title: "기본형",
      type: "HTML",
      code: `<div class="top01">
  <img src="./images/top01.jpg" alt="입력해주세요." />
</div>`,
    },
    "2": {
      title: "버튼형",
      type: "HTML",
      code: `<div class="sec01">
  <img src="./images/sec01_1.jpg" alt="입력해주세요" />
  <img src="./images/sec01_2.jpg" class="kioskDel" />
  <a href="#" id="link1" data-order="0" class="link-btn kioskDel">
    <img src="./images/sec01_3.jpg" />
  </a>
  <img src="./images/sec01_4.jpg" />
</div>`,
    },
    "3": {
      title: "Swiper 기본형",
      type: "HTML",
      code: `<div class="tab01 basic">
  <img src="./images/tab1/tab01_1.jpg" alt="입력해주세요" />
  <div class="swiper-mask swiper1">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/tab1/slide/1/1.png" />
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
    "4": {
      title: "",
      type: "JS",
      code: `// swiper 반복문 [S]
let swiperObj1 = {};
for (let index = 1; index <= $(".basic .swiper-mask").length; index++) {
  swiperObj1[\`swiper\${index}\`] = new Swiper(
    \`.basic .swiper\${index} .swiper\`,
    {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: parseInt($(window).width() * 0.0),

      pagination: {
        el: \`.basic .swiper\${index} .swiper-pagination\`,
      },
      navigation: {
        nextEl: \`.basic .swiper\${index} .swiper-button-next\`,
        prevEl: \`.basic .swiper\${index} .swiper-button-prev\`,
      },
      scrollbar: {
        el: \`.basic .swiper\${index} .swiper-scrollbar\`,
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
      title: "Swiper Fade Effect",
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
    "7": {
      title: "토글 박스형",
      type: "HTML",
      code: `<div class="sec01">
  <div class="toggle-box">
    <div class="toggle-box__btns">
      <img src="./images/toggle_on.jpg" />
      <img src="./images/toggle_off.jpg" />
    </div>
    <div class="toggle-box__con">
      <img src="./images/sec01.jpg" />
    </div>
  </div>
</div>`,
    },
    "8": {
      title: "링크연결형",
      type: "HTML",
      code: `<div class="sec01 img-box">
  <img src="./images/sec01.jpg" alt="입력해주세요" />
  <span class="goto-link kioskDel"
    ><a href="tel:02-123-5678">입력해주세요</a></span
  >
</div>`,
    },
    "9": {
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
    "10": {
      title: "흐르는 배너",
      type: "HTML",
      code: `<div class="flowContainer">
  <ul class="flowBanner">
    <li><img src="./" alt="" /></li>
    <li><img src="./" alt="" /></li>
  </ul>
</div>`,
    },
    "11": {
      title: "",
      type: "CSS",
      code: `.flowBanner {
  display: flex;
  width: max-content;
  animation: flow 10s linear infinite;
}

.flowBanner li {
  flex: 0 0 auto;
}

.flowBanner img {
  /* 이미지의 가로값 계산 */
  max-width: clamp(810px, 216vw, 1620px);
}

@keyframes flow {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}`,
    },
    "12": {
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
    "13": {
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
    "14": {
      title: "",
      type: "CSS",
      code: `.open {display: block;}
.delete {display: none;}`,
    },
    /* 기본 형식
    "": {
      title: "",
      type: "",
      code: ``,
    },
    */
  },
} as const;
