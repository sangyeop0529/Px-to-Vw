import { useState } from "react";
import styled from "styled-components";

const MoveToLink = () => {
  const [input, setInput] = useState("");
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClickMoveMob = () => {
    if (!input.trim()) return;

    let baseUrl = new URL(input);

    // gate → detail 변환 로직
    if (baseUrl.pathname.startsWith("/shpgnews/gate/")) {
      // 경로에서 뉴스 ID 추출
      const parts = baseUrl.pathname.split("/");
      const newsId = parts[3]; // SNM00000000000473954 이런 값

      // detail URL로 재구성
      baseUrl = new URL("https://m.lotteshopping.com/shpgnews/shpgnewsDetail");
      baseUrl.searchParams.set("shpgNewsNo", newsId);

      // 기존 utm 파라미터 유지
      const originalParams = new URL(input).searchParams;
      originalParams.forEach((value, key) => {
        baseUrl.searchParams.set(key, value);
      });
    }

    // 1. 기본 URL
    window.open(baseUrl.toString(), "_blank");
  };
  const onClickMoveKiosk = () => {
    if (!input.trim()) return;

    let baseUrl = new URL(input);

    // gate → detail 변환 로직
    if (baseUrl.pathname.startsWith("/shpgnews/gate/")) {
      // 경로에서 뉴스 ID 추출
      const parts = baseUrl.pathname.split("/");
      const newsId = parts[3]; // SNM00000000000473954 이런 값

      // detail URL로 재구성
      baseUrl = new URL("https://m.lotteshopping.com/shpgnews/shpgnewsDetail");
      baseUrl.searchParams.set("shpgNewsNo", newsId);

      // 기존 utm 파라미터 유지
      const originalParams = new URL(input).searchParams;
      originalParams.forEach((value, key) => {
        baseUrl.searchParams.set(key, value);
      });
    }

    // 2. ch=k 추가 버전
    const kioskMode = new URL(baseUrl.toString());
    kioskMode.searchParams.set("ch", "k");
    window.open(kioskMode.toString(), "_blank");
  };
  const onClickMovePc = () => {
    if (!input.trim()) return;

    let baseUrl = new URL(input);

    // gate → detail 변환 로직
    if (baseUrl.pathname.startsWith("/shpgnews/gate/")) {
      // 경로에서 뉴스 ID 추출
      const parts = baseUrl.pathname.split("/");
      const newsId = parts[3]; // SNM00000000000473954 이런 값

      // detail URL로 재구성
      baseUrl = new URL("https://m.lotteshopping.com/shpgnews/shpgnewsDetail");
      baseUrl.searchParams.set("shpgNewsNo", newsId);

      // 기존 utm 파라미터 유지
      const originalParams = new URL(input).searchParams;
      originalParams.forEach((value, key) => {
        baseUrl.searchParams.set(key, value);
      });
    }

    // 3. www 버전
    const pcMode = new URL(baseUrl.toString());
    pcMode.hostname = pcMode.hostname.replace(/^m\./, "www.");
    window.open(pcMode.toString(), "_blank");
  };

  return (
    <>
      <Caution>
        <span>*</span>링크를 입력해주세요.
        <input value={input} onChange={onchangeInput} type="text" />
        <button onClick={onClickMoveMob}>mobile 열기</button>
        <button onClick={onClickMoveKiosk}>Kiosk 열기</button>
        <button onClick={onClickMovePc}>Pc 열기</button>
      </Caution>
    </>
  );
};

export default MoveToLink;

const Caution = styled.p`
  display: flex;
  color: #818181;
  margin-bottom: 1rem;
  line-height: 1.25;
`;
