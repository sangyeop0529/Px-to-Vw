import { useRef, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const PlaceholderImg = () => {
  const [width, setWidth] = useState("750");
  const [height, setHeight] = useState("1000");
  const [bgColor, setBgColor] = useState("000");
  const [textColor, setTextColor] = useState("fff");

  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const bgColorRef = useRef<HTMLInputElement>(null);
  const textColorRef = useRef<HTMLInputElement>(null);

  // 공통 URL 생성
  const placeholderUrl = `https://placehold.co/${width}x${height}/${bgColor}/${textColor}`;

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const onClickBtn = async () => {
    if (!width) {
      toast.error("가로값을 입력해주세요!");
      widthRef.current?.focus();
      return;
    }
    if (!height) {
      toast.error("높이값을 입력해주세요!");
      heightRef.current?.focus();
      return;
    }
    if (!bgColor) {
      toast.error("배경색을 입력해주세요!");
      bgColorRef.current?.focus();
      return;
    }
    if (!textColor) {
      toast.error("글자색을 입력해주세요!");
      textColorRef.current?.focus();
      return;
    }

    try {
      await navigator.clipboard.writeText(
        `<img src="${placeholderUrl}" alt="임시코드" />`
      );
      toast("클립보드에 복사됨");
    } catch (err) {
      toast.error("클립보드 복사 실패!");
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Example>{placeholderUrl}</Example>
      <FlexBox>
        <Label>
          가로값 :
          <Input
            ref={widthRef}
            type="text"
            value={width}
            onChange={handleChange(setWidth)}
            required
          />
        </Label>
        <Label>
          높이값 :
          <Input
            ref={heightRef}
            type="text"
            value={height}
            onChange={handleChange(setHeight)}
            required
          />
        </Label>
        <Label>
          배경색 :
          <Input
            ref={bgColorRef}
            type="text"
            value={bgColor}
            onChange={handleChange(setBgColor)}
          />
        </Label>
        <Label>
          글자색 :
          <Input
            ref={bgColorRef}
            type="text"
            value={textColor}
            onChange={handleChange(setTextColor)}
          />
        </Label>
        <Button onClick={onClickBtn}>생성</Button>
        <ToastContainer />
      </FlexBox>
    </Wrapper>
  );
};

export default PlaceholderImg;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const Example = styled.p`
  background-color: #d1d1d1;
  padding: 1rem 1.5rem;
  border-radius: 5px;
`;
const FlexBox = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;
const Label = styled.label`
  display: flex;
  flex-flow: column wrap;
  gap: 0.25rem;
  width: 20%;
`;
const Input = styled.input`
  width: 100%;
`;
const Button = styled.button`
  flex-grow: 1;
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
