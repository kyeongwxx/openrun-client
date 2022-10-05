import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

import { keyframes } from "@emotion/react";

const ZoominOut = keyframes`
  from{
		transform: scale(1);
	}
	to{
		transform: scale(1.05);
	}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 90%;
    max-width: 1664px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    word-break: keep-all;

    & > span:nth-of-type(1) {
      padding-bottom: 2.8rem;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: -0.05em;
      color: transparent;
      background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
      -webkit-background-clip: text;

      @media (max-width: 1250px) {
        font-size: 4rem;
        word-break: keep-all;
        text-align: center;
      }
    }

    & > span:nth-of-type(2) {
      padding-bottom: 6.5rem;
      font-weight: 400;
      font-size: 2.25rem;
      letter-spacing: -0.05em;
      color: #464646;
      @media (max-width: 1250px) {
        font-size: 2rem;
        word-break: keep-all;
      }
    }

    button {
      margin-top: 3.125rem;
      padding: 1.5rem 5rem;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.05em;
      color: #ffffff;
      background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
      border-radius: 1.3rem;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: ${ZoominOut} 1s 1s infinite ease-in-out alternate;

      :hover {
        color: transparent;
        background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
        -webkit-background-clip: text;
        border: 1px solid #5920d3;
      }
    }
    @media (max-width: 767px) {
      & > span:nth-of-type(1) {
        font-size: 4rem;
      }
    }
    @media (max-width: 412px) {
      & > span:nth-of-type(1) {
        font-size: 4rem;
      }
      button {
        font-size: 1.16rem;
      }
    }
    @media (max-width: 375px) {
      & > span:nth-of-type(1) {
        font-size: 4rem;
      }
      button {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function E() {
  const router = useRouter();

  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <div ref={ref} className={inView ? "isActive" : ""}>
        <span>
          <strong>오픈런</strong>
        </span>
        <span> 지금 바로 시작하세요</span>
        <button onClick={() => router.push("/main")}>
          홈페이지로 이동하기
        </button>
      </div>
      <img />
    </Container>
  );
}
