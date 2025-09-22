import styled from "styled-components";

const downloadMock = [
  {
    name: "기본 \n레이아웃",
    href: "/downloads/1. basic.zip",
  },
  {
    name: "탭 \n레이아웃",
    href: "/downloads/2. tab.zip",
  },
  {
    name: "스와이프탭 \n레이아웃",
    href: "/downloads/3. swiper_tab.zip",
  },
  {
    name: "모달 \n레이아웃",
    href: "/downloads/4. modal.zip",
  },
  {
    name: "오디오 \n레이아웃",
    href: "/downloads/5. audio.zip",
  },
  {
    name: "서브탭 \n레이아웃",
    href: "/downloads/6. sub_tab.zip",
  },
  {
    name: "고정BG \n레이아웃",
    href: "/downloads/7. fixedBackgroundImage.zip",
  },
];

const Download = () => {
  return (
    <DownloadWrap>
      {downloadMock.map((list, index) => (
        <DownloadItem key={index}>
          <a href={list.href} download>
            {list.name}
          </a>
        </DownloadItem>
      ))}
    </DownloadWrap>
  );
};

export default Download;

const DownloadWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const DownloadItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0.875rem 1.25rem;
    font-size: 14px;
    text-align: center;
    white-space: pre-line;
  }
`;
