import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

type CodeCopyProps = {
  id: string;
  title: string;
  type: string;
  code: string;
};

const CodeCopy = ({ id, title, type, code }: CodeCopyProps) => {
  const storageKey = `code-copy-${id}`;
  const [isOpen, setIsOpen] = useState(false);

  const codeRef = useRef(null);

  useEffect(() => {
    if (isOpen && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      setIsOpen(saved == "true");
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(isOpen));
  }, [isOpen, storageKey]);

  const onHideBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const onClickBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (code && code.trim() !== "") {
      try {
        await navigator.clipboard.writeText(code);
        toast(`클립보드에 복사됨`);
      } catch (err) {
        toast.error("클립보드 복사 실패!");
        console.error(err);
      }
    } else {
      toast.error("복사할 내용이 없습니다!");
    }
  };

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <div className="code-block">
        <div onClick={onHideBtn} className="code-header">
          <h3>{type}</h3>
          <div className="btn-group">
            <HideBtn onClick={onHideBtn}>{isOpen ? "Hide" : "Show"}</HideBtn>
            <CopyBtn onClick={onClickBtn}>COPY</CopyBtn>
          </div>
        </div>
        {isOpen && (
          <pre>
            <code ref={codeRef} className={`language-${type}`}>
              {code}
            </code>
          </pre>
        )}
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default CodeCopy;
const Wrapper = styled.div`
  margin-top: 0.5rem;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const HideBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e1e1;
  border: none;
  padding: 4px 8px;
  color: #111;
  cursor: pointer;
`;
const CopyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4caf50;
  border: none;
  padding: 4px 8px;
  color: #fff;
  cursor: pointer;
`;
