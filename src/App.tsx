import Next from "./components/Next";
import PxToVw from "./components/PxToVw";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <PxToVw />
      <Next />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 750px;
  width: 100%;
  background-color: #eee;
  height: 100vh;
  margin: 0 auto;
  padding: 4rem;
`;
