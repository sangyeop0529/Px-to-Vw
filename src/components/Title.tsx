import styled from "styled-components";

type TitleProps = {
  title: string;
  children?: React.ReactNode;
};

const TitleSec = ({ title, children }: TitleProps) => {
  return (
    <TitleWrap>
      <Title>{title}</Title>
      {children}
    </TitleWrap>
  );
};

export default TitleSec;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 1.5rem;
`;
