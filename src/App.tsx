import CodeCopy from "./components/CodeCopy";
import PxToVw from "./components/PxToVw";
import styled from "styled-components";
import { codeExamples } from "./codes/codeExamples";
import TitleSec from "./components/Title";
import MoveToLink from "./components/MoveToLink";

const allExamples = codeExamples.Sample;

function App() {
  return (
    <Container>
      <TitleSec title={"링크연결"} />
      <MoveToLink />

      <TitleSec title={"Px to Vw"} />
      <PxToVw />

      <TitleSec title={"Code Sample"} />
      {allExamples.map((group, groupIdx) => (
        <div key={groupIdx} className="example-group">
          {group.map((example) => (
            <CodeCopy
              key={example.id}
              id={example.id}
              title={example.title}
              type={example.type}
              code={example.code}
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
