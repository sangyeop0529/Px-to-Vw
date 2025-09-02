import React, {
  useState,
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useRef,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

// styled-components definitions would be here

const PxToVw = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const copyToClipboard = (value: string) => {
    if (value) {
      navigator.clipboard.writeText(value);
      toast(`클립보드에 복사됨: ${value}`);
    } else {
      toast.error("복사할 내용이 없습니다!");
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const calculatedValue =
        Math.floor((Number(input) / 750) * 100 * 10000) / 10000;
      copyToClipboard(`${calculatedValue}vw`);
      setInput("");
    }
  };

  const onClickButton = (e: MouseEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.innerText;
    copyToClipboard(value);
    setInput("");
  };

  const calculatedVw = Math.floor((Number(input) / 750) * 100 * 10000) / 10000;

  return (
    <>
      <Title>Px To Vw</Title>
      <Caution>
        <span>*</span>너비 750px 기준으로 환산한 값입니다.
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
          {isNaN(calculatedVw) ? "숫자를 입력하세요" : `${calculatedVw}vw`}
        </Vw>
        <ToastContainer />
      </Container>
    </>
  );
};

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
  justify-content: flex-start;
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
  padding: 0 1rem;
  background-color: #4caf50;
  border: none;
  height: 100%;
`;

export default PxToVw;
