import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eef9ff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 90%;
  max-width: 1440px;

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30rem;
  & > span:nth-of-type(1) {
    padding-bottom: 10px;
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > span:nth-of-type(2) {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 4.375rem;
    letter-spacing: -0.05em;
  }

  & > p {
    padding-top: 2.375rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.68rem;
    letter-spacing: -0.05em;
  }
  @media (max-width: 1250px) {
    transform: translateY(-80%);
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  right: 80%;

  @media (max-width: 1400px) {
    right: 50%;
  }
  @media (max-width: 1250px) {
    width: 220px;
    top: 85%;
    transform: translateX(50%);
  }
  @media (max-width: 650px) {
    width: 200px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 500px;
  opacity: 0;
  word-break: keep-all;
  transition: all 2s ease;

  & > span {
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 2.18rem;
    color: #0fbaa3;
    letter-spacing: -0.05em;
  }

  &:nth-of-type(1) {
    &.isActive {
      background: url();
      transform: translate(100%, 0%);
      transition: all 1s ease-in;
    }
  }
  &:nth-of-type(2) {
    &.isActive {
      opacity: 1;
      transform: translate(100%, 0%);
      transition: all 2s ease-in;
    }
  }
  &:nth-of-type(3) {
    &.isActive {
      opacity: 1;
      transform: translate(100%, 0%);
      transition: all 3s ease-in;
    }
  }
  @media (max-width: 1250px) {
    width: 220px;
    height: 220px;

    & > span {
      font-size: 1rem;
    }
  }
  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

export default function D() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Title>
          <span></span>
          <span>
            <strong></strong>
            <br />
            <strong>고객의 후기를 들어보세요</strong>
          </span>
          <p>
            고객님들의 생생한 실제 사용 후기 입니다.
            <br />
            더 많은 사용 후기를 구경하러 오세요.
            <br />
            득템할 수 있는 기회를 오픈런을 통해서 잡으세요.
          </p>
        </Title>
        <Info ref={ref}>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Group 98.png" />
          </ReviewBox>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Group 99.png" />
          </ReviewBox>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Group 100.png" />
          </ReviewBox>
        </Info>
      </Wrapper>
    </Container>
  );
}
