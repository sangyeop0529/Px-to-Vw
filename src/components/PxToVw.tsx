import React, {
  useState,
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import TitleSec from "./Title";

const PxToVw = () => {
  const [input, setInput] = useState<number | "">("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const calculatedVw =
    input === "" ? NaN : Math.floor((input / 750) * 100 * 10000) / 10000;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setInput(value === "" ? "" : Number(value));
  };

  const copyToClipboard = (value?: string) => {
    if (value) {
      navigator.clipboard.writeText(value);
      toast(`클립보드에 복사됨: ${value}`);
    } else {
      toast.error("복사할 내용이 없습니다!");
    }
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isNaN(calculatedVw)) {
      copyToClipboard(
        `clamp(${Number(input) / 2}px, ${calculatedVw}vw, ${input}px)`
      );
      setInput("");
    }
  };

  const onClickButton = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerText;
    copyToClipboard(value);
    setInput("");
  };

  return (
    <Wrapper>
      <TitleSec title={"Px to Vw"} />
      <Caution>
        <span>*</span>가로 750px 기준으로 환산한 값입니다. <br />
        'Enter' 사용 시 쉽게 복사 가능합니다. 소수점 4자리까지 나타납니다.
      </Caution>
      <Container>
        <FlexBox>
          <Px
            ref={inputRef}
            onChange={onChangeInput}
            onKeyDown={onKeyDown}
            type="text"
            size={4}
            value={input}
          />
          px
        </FlexBox>
        <span> to </span>
        <Vw onClick={onClickButton}>
          {isNaN(calculatedVw)
            ? "숫자를 입력하세요"
            : `clamp(${Number(input) / 2}px, ${calculatedVw}vw, ${input}px)`}
        </Vw>
        <ToastContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 1rem;
`;
const Caution = styled.p`
  display: flex;
  color: #818181;
  margin-bottom: 0.5rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 1.5rem;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;
const Px = styled.input`
  padding-left: 0.5rem;
  height: 100%;
`;
const Vw = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  height: 100%;
  border-radius: 4px;
`;

export default PxToVw;
