import styled from "styled-components";

type TitleProps = {
  title: string;
};

const TitleSec = ({ title }: TitleProps) => {
  return <Title>{title}</Title>;
};

export default TitleSec;

const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 1rem;
`;
