import CodeCopy from "./components/CodeCopy";
import PxToVw from "./components/PxToVw";
import styled from "styled-components";
import { codeExamples } from "./codes/codeExamples";

const allExamples = [...Object.values(codeExamples.Sample)];

function App() {
  return (
    <Container>
      <PxToVw />

      {allExamples.map((example, idx) => (
        <CodeCopy
          key={idx}
          id={idx}
          title={example.title}
          type={example.type}
          code={example.code}
        />
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
