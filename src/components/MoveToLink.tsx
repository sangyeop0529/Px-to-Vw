import { useState } from "react";
import styled from "styled-components";

const MoveToLink = () => {
  const [input, setInput] = useState("");
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  function buildBaseUrl(input: string): URL | null {
    if (!input.trim()) return null;

    let baseUrl = new URL(input);

    // gate → detail 변환 로직
    if (baseUrl.pathname.startsWith("/shpgnews/gate/")) {
      const parts = baseUrl.pathname.split("/");
      const newsId = parts[3]; // SNM00000000000473954

      // detail URL로 재구성
      baseUrl = new URL("https://m.lotteshopping.com/shpgnews/shpgnewsDetail");
      baseUrl.searchParams.set("shpgNewsNo", newsId);

      // 기존 utm 파라미터 유지
      const originalParams = new URL(input).searchParams;
      originalParams.forEach((value, key) => {
        baseUrl.searchParams.set(key, value);
      });
    }

    return baseUrl;
  }

  function moveUrl(input: string, modifier?: (url: URL) => void) {
    const baseUrl = buildBaseUrl(input);
    if (!baseUrl) return;

    const finalUrl = new URL(baseUrl.toString());
    if (modifier) modifier(finalUrl);

    window.open(finalUrl.toString(), "_blank");
  }

  const onClickMoveMob = () => moveUrl(input); // 기본
  const onClickMoveKiosk = () =>
    moveUrl(input, (url) => url.searchParams.set("ch", "k")); // kiosk
  const onClickMovePc = () =>
    moveUrl(
      input,
      (url) => (url.hostname = url.hostname.replace(/^m\./, "www."))
    ); // pc

  return (
    <Wrapper>
      <Caution>
        <span>*</span>링크를 입력해주세요.
      </Caution>
      <FlexBox>
        <UrlInput
          value={input}
          onChange={onchangeInput}
          type="text"
          size={30}
        />
        <FlexBox>
          <Button onClick={onClickMoveMob}>mobile 열기</Button>
          <Button onClick={onClickMoveKiosk}>Kiosk 열기</Button>
          <Button onClick={onClickMovePc}>Pc 열기</Button>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default MoveToLink;
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const Caution = styled.p`
  display: flex;
  color: #818181;
  margin-bottom: 1rem;
  line-height: 1.25;
`;
const UrlInput = styled.input`
  padding-left: 0.5rem;
  height: 100%;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
`;
