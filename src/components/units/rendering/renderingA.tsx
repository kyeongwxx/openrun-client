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

export const MoveToBtn = styled.button`
  width: 15rem;
  height: 3rem;
  border-radius: 14px;

  margin-bottom: 3rem;
  margin-top: -2.5rem;
  background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);

  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 10rem;
    height: 9rem;
    margin-top: -5rem;
  }
  @media (max-height: 737px) {
    margin-top: -8rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
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
    line-height: 1.68rem;
    letter-spacing: -0.05em;
  }
  & > button {
    width: 15rem;
    height: 4rem;
    font-size: 1.5rem;
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
  }
`;

const Info = styled.div`
  position: absolute;
  right: 0;
  bottom: 10;
  transform: translateY(90%);
  filter: blur(20px);
  transition: all 1.5s ease;

  &.isActive {
    filter: blur(0px);
    transform: translateY(0.5%);
  }
  img {
    width: 50vw;
  }
  @media (max-width: 1543px) {
    transform: translate(100%, 0%);
    img {
      width: 50vw;
    }
    &.isActive {
      transform: translate(0%, 1%);
    }
  }

  @media (max-width: 1250px) {
    transform: translate(-50%, 90%);
    img {
      width: 50vw;
    }
    &.isActive {
      transform: translate(-50%, 1%);
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
