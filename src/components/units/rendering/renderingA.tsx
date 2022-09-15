import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #ffffff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  right: 10;
  & > span:nth-of-type(1) {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 4.375rem;
    letter-spacing: -0.05em;
  }

  & > p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: -0.05em;
  }
  & > button {
    padding: 1.5rem 4rem;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.02em;
    margin-top: 4rem;
    background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
    color: #fff;
    border-radius: 1rem;

    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    cursor: pointer;
  }
  @media (max-width: 1250px) {
    transform: translateY(-80%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span:nth-of-type(1) {
      margin-bottom: -2rem;
      font-size: 2.725rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 767px) {
    transform: translateY(-80%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span:nth-of-type(1) {
      font-size: 2.325rem;
    }
    & > p {
      font-size: 1.5rem;
    }
    & > button {
      padding: 1.2rem 3rem;
      margin-bottom: 2rem;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  right: 0;
  bottom: 10;

  transform: translateY(90%);
  filter: blur(100%);
  transition: all 2.5s ease;

  &.isActive {
    filter: blur(0px);
    transform: translateY(0.5%);
  }
  img {
    width: 45vw;
  }
  @media (max-width: 1543px) {
    transform: translate(100%, 0%);
    img {
      width: 50vw;
    }
  }

  @media (max-width: 1250px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    transform: translate(-50%, 90%);
    img {
      width: 55vw;
      margin-top: 35vh;
    }
    &.isActive {
      transform: translate(-36%, 1%);
    }
  }
  @media (max-width: 767px) {
    transform: translate(-50%, 0%);
    img {
      width: 78vw;
      margin-top: 32vh;
    }
    &.isActive {
      transform: translate(-10%, 1%);
    }
  }
`;
export default function A() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Container>
      <Wrapper>
        <Title>
          <p>실패없는 줄서기</p>
          <br />
          <span>
            <strong>이제 오픈런과 함께 하세요</strong>
          </span>

          <button onClick={onClickMoveToPage(`/main/`)}>시작하기</button>
        </Title>
        <Info ref={ref} className={inView ? "isActive" : ""}>
          <img src="/img/queue.png" alt="" />
        </Info>
      </Wrapper>
    </Container>
  );
}
