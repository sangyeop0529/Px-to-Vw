import CodeCopy from "./components/CodeCopy";
import PxToVw from "./components/PxToVw";
import styled from "styled-components";
import { codeExamples } from "./codes/codeExamples";
import TitleSec from "./components/Title";
import MoveToLink from "./components/MoveToLink";
import { useState } from "react";
import PlaceholderImg from "./components/PlaceholderImg";

const allExamples = codeExamples.Sample;

function App() {
  const [allOpen, setAllOpen] = useState(true);

  const toggleAll = () => setAllOpen((prev) => !prev);

  return (
    <Container>
      <TitleSec title={"임시이미지"} />
      <PlaceholderImg />

      <TitleSec title={"링크연결"} />
      <MoveToLink />

      <TitleSec title={"Px to Vw"} />
      <PxToVw />

      <TitleSec title={"Code Sample"} />
      <FlexBox>
        <AllBtn onClick={toggleAll}>
          {allOpen ? "전체 닫기" : "전체 열기"}
        </AllBtn>
      </FlexBox>

      {allExamples.map((group, groupIdx) => (
        <div key={groupIdx} className="example-group">
          {group.map((example) => (
            <CodeCopy
              key={example.id}
              id={example.id}
              title={example.title}
              type={example.type}
              code={example.code}
              allOpen={allOpen}
            />
          ))}
        </div>
      ))}
    </Container>
  );
}
export default App;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: #eee;
  margin: 0 auto;
  padding: 4rem;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -3.5rem;
  margin-bottom: 1.5rem;
`;
const AllBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  height: 100%;
  border-radius: 4px;
`;
