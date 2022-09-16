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
  @media (max-width: 1440px) {
    padding: 1rem;
    transform: translate(0%, -60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > span:nth-of-type(1) {
      font-size: 2.825rem;
    }
    & > p {
      font-size: 1rem;
      margin-bottom: 5rem;
      margin-top: -1rem;
    }
  }
  @media (max-width: 767px) {
    transform: translate(0%, -80%);
    & > span:nth-of-type(1) {
      font-size: 2.025rem;
    }
    & > p {
      margin-top: -2rem;
    }
  }
  @media (max-width: 375px) {
    transform: translate(0%, -70%);
    & > span:nth-of-type(1) {
      font-size: 1.862rem;
    }
    & > p {
      margin-top: -2rem;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  right: 80%;

  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1250px) {
    width: 180px;
    top: 30%;
    transform: translateY(50%);
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 650px) {
    width: 180px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 400px;
  opacity: 0;
  word-break: keep-all;
  transition: all 2s ease;

  &:nth-of-type(1) {
    &.isActive {
      opacity: 1;
      transform: translate(170%, 75%);
      transition: all 1s ease;
    }
  }
  &:nth-of-type(2) {
    &.isActive {
      opacity: 1;
      transform: translate(-70%, 75%);
      transition: all 1s ease;
    }
  }
  &:nth-of-type(3) {
    &.isActive {
      opacity: 1;
      transform: translate(50%, 75%);
      transition: all 1s ease;
    }
  }
  @media (max-width: 1440px) {
    width: 400px;
    height: 220px;
    display: flex;
    flex-direction: column;
    img {
      width: 28vw;
    }
    &:nth-of-type(1) {
      &.isActive {
        opacity: 1;
        transform: translate(170%, 75%);
        transition: all 1s ease;
      }
    }
    &:nth-of-type(2) {
      &.isActive {
        opacity: 1;
        transform: translate(-70%, 75%);
        transition: all 1s ease;
      }
    }
    &:nth-of-type(3) {
      &.isActive {
        opacity: 1;
        transform: translate(50%, 75%);
        transition: all 1s ease;
      }
    }
  }
  //맥북화면용
  @media (max-height: 737px) {
    width: 400px;
    height: 220px;

    img {
      width: 28vw;
    }

    &:nth-of-type(1) {
      &.isActive {
        opacity: 1;
        transform: translate(150%, 80%);
        transition: all 1s ease;
      }
    }
    &:nth-of-type(2) {
      &.isActive {
        opacity: 1;
        transform: translate(-60%, 80%);
        transition: all 1s ease;
      }
    }
    &:nth-of-type(3) {
      &.isActive {
        opacity: 1;
        transform: translate(45%, 80%);
        transition: all 1s ease;
      }
    }
  }

  @media (max-width: 767px) {
    width: 400px;
    height: 220px;
    display: flex;
    flex-direction: column;
    img {
      width: 40vw;
    }

    & > span:nth-of-type(1) {
      font-size: 2.125rem;
      font-weight: 500;
      line-height: 4.375rem;
      letter-spacing: -0.05em;
    }
    //세번째
    &:nth-of-type(1) {
      &.isActive {
        opacity: 1;
        transform: translate(77%, 30%);
        transition: all 1s ease;
      }
    }
    //첫뻔째
    &:nth-of-type(2) {
      &.isActive {
        opacity: 1;
        transform: translate(0%, -35%);
        transition: all 1s ease;
      }
    }
    //가운데
    &:nth-of-type(3) {
      &.isActive {
        opacity: 1;
        transform: translate(0%, 90%);
        transition: all 1s ease;
      }
    }
  }
  @media (max-width: 375px) {
    img {
      width: 50vw;
    }
    &:nth-of-type(1) {
      &.isActive {
        z-index: 2;
        opacity: 1;
        transform: translate(32%, 17%);
        transition: all 1s ease;
      }
    }
    //첫뻔째
    &:nth-of-type(2) {
      &.isActive {
        z-index: 3;
        opacity: 1;
        transform: translate(5%, -45%);
        transition: all 1s ease;
      }
    }
    //가운데
    &:nth-of-type(3) {
      &.isActive {
        z-index: 1;
        opacity: 1;
        transform: translate(5%, 80%);
        transition: all 1s ease;
      }
    }
  }
`;
// const Arrow = styled.div`
//   transition: all 1.5s ease;
//   img {
//     width: 3rem;
//     animation: ani 1s infinite alternate;
//     opacity: 0.5;
//   }
//   &.isActive {
//     transform: translate(0%, 0%);
//   }
//   @keyframes ani {
//     0% {
//       transform: translate(0, 0);
//     }
//     100% {
//       transform: translate(0, 10px);
//     }
//   }
// `;
export default function D() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>
            <br />
            <strong>고객의 후기를 들어보세요</strong>
          </span>
          <p>
            고객님들의 생생한 실제 사용 후기 입니다.
            <br />더 많은 사용 후기를 구경하러 오세요.
          </p>
        </Title>
        <Info ref={ref}>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Review011.png" />
          </ReviewBox>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Review02.png" />
          </ReviewBox>
          <ReviewBox className={inView ? "isActive" : ""}>
            <img src="/img/Review03.png" />
          </ReviewBox>
        </Info>
      </Wrapper>
      {/* <Arrow ref={ref} className={inView ? "isActive" : ""}>
        <img src="img/down-arrow.png" alt="" />
      </Arrow> */}
    </Container>
  );
}
