// Memo.tsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "../lib/supabaseClient";

const Memo = () => {
  const [content, setContent] = useState("");
  const [memos, setMemos] = useState<any[]>([]);

  // 글 불러오기
  const fetchMemos = async () => {
    const { data, error } = await supabase
      .from("memos")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setMemos(data);
  };

  // 글쓰기
  const addMemo = async () => {
    if (!content.trim()) return;
    const { error } = await supabase.from("memos").insert([{ content }]);
    if (!error) {
      setContent("");
      fetchMemos();
    }
  };

  // 글삭제
  const deleteMemo = async (id: string) => {
    const confirmDelete = window.confirm("삭제 하시겠습니까?");
    if (!confirmDelete) return; // 취소하면 함수 종료
    const { error } = await supabase.from("memos").delete().eq("id", id);
    if (!error) fetchMemos();
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  return (
    <>
      <WriteArea>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addMemo}>글쓰기</button>
      </WriteArea>

      <BoardArea>
        {memos.map((memo) => (
          <BoardItem key={memo.id}>
            <p>{memo.content}</p>
            <button onClick={() => deleteMemo(memo.id)}>삭제</button>
          </BoardItem>
        ))}
      </BoardArea>
    </>
  );
};

export default Memo;

const WriteArea = styled.div`
  display: flex;
  gap: 0.5rem;
  textarea {
    flex-grow: 1;
    padding: 0.875rem 1rem;
    font-size: 0.8rem;
  }
  button {
    padding: 0.875rem 1rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const BoardArea = styled.div``;
const BoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  p {
    white-space: pre-wrap;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.875rem 1rem;
    background-color: #d1d1d1;
    color: #fff;
    border: none;
    height: 100%;
    border-radius: 4px;
    cursor: pointer;
  }
`;
