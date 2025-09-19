import CodeCopy from "./components/CodeCopy";
import PxToVw from "./components/PxToVw";
import styled from "styled-components";
import { codeExamples } from "./codes/codeExamples";
import TitleSec from "./components/Title";
import MoveToLink from "./components/MoveToLink";
import { useState } from "react";
import PlaceholderImg from "./components/PlaceholderImg";

const allExamples = codeExamples.Sample;

const TAB_LIST = [
  { key: "vw", label: "Px to Vw" },
  { key: "link", label: "링크연결" },
  { key: "img", label: "임시이미지" },
];

function App() {
  const [allOpen, setAllOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("img");

  const toggleAll = () => setAllOpen((prev) => !prev);

  return (
    <Container>
      <TabBox>
        {TAB_LIST.map((tab) => (
          <TabBtn
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}>
            {tab.label}
          </TabBtn>
        ))}
      </TabBox>

      <TabPanel>
        {activeTab === "vw" && (
          <>
            <TitleSec title={"Px to Vw"} />
            <PxToVw />
          </>
        )}
        {activeTab === "img" && (
          <>
            <TitleSec title={"임시이미지"} />
            <PlaceholderImg />
          </>
        )}
        {activeTab === "link" && (
          <>
            <TitleSec title={"링크연결"} />
            <MoveToLink />
          </>
        )}
      </TabPanel>

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
const TabBox = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const TabBtn = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px 4px 0 0;
  background: ${({ active }) => (active ? "#fff" : "#ccc")};
  color: ${({ active }) => (active ? "#222" : "#666")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  outline: none;
  border-bottom: ${({ active }) => (active ? "2px solid #4caf50" : "none")};
`;
const TabPanel = styled.div`
  background: #fff;
  border-radius: 0 0 8px 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 180px;
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
