import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 32rem;
  transform: translate(0%, 10%);
  & > span:nth-of-type(1) {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 4.375rem;
    letter-spacing: -0.05em;
    margin-top: 18rem;
  }

  & > p {
    padding-top: 2.375rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.68rem;
    letter-spacing: -0.05em;
  }

  @media (max-width: 1450px) {
    transform: translate(0%, 1%);
    display: flex;
    flex-direction: column;

    & > span:nth-of-type(1) {
      font-size: 2.825rem;
    }
    & > p {
      font-size: 1rem;
      /* margin-bottom: 5rem; */
      /* margin-top: -1rem; */
    }
  }
  @media (max-width: 767px) {
    transform: translate(0%, -10%);
    & > span:nth-of-type(1) {
      font-size: 2.025rem;
      margin-top: -4rem;
    }
    & > p {
    
  }
  @media (max-width: 412px) {
    transform: translate(0%, 8%);
    & > span:nth-of-type(1) {
      font-size: 2.225rem;
      margin-top: -4rem;
    }
    & > p {
      font-size: 1.3rem;
      margin-top: -3rem;
      transform: translate(0%, 20%);
    }
  }
  @media (max-width: 375px) {
    transform: translate(0%, 15%);
    & > span:nth-of-type(1) {
      width: 15rem;
      font-size: 2.025rem;
      margin-top: -4rem;
    }
    & > p {
      margin-top: -3rem;
      transform: translate(0%, 20%);
    }
  }
`;

const Info = styled.div`
  position: absolute;
  right: 23%;
  bottom: 5%;
  padding-top: 4rem;
  transform: translateY(90%);
  filter: blur(100%);
  transition: all 1.5s ease;

  &.isActive {
    filter: blur(0px);
    transform: translateY(-12%);
  }
  img {
    width: 24vw;
    transform: translate(70%, -30%);
  }
  @media (max-width: 2100px) {
    transform: translate(100%, 20%);
    img {
      width: 24vw;
      transform: translate(40%, -10%);
    }
    &.isActive {
      transform: translate(0%, 1%);
    }
  }
  @media (max-width: 1543px) {
    transform: translate(100%, 20%);
    img {
      width: 23vw;
      transform: translate(10%, -30%);
    }
    &.isActive {
      transform: translate(0%, 1%);
    }
  }

  @media (max-width: 1450px) {
    transform: translate(-40%, 90%);
    img {
      width: 25vw;
    }
    &.isActive {
      transform: translate(-50%, 20%);
    }
  }
  @media (max-width: 767px) {
    transform: translate(-50%, -2%);
    img {
      width: 48vw;
      transform: translate(25%, 0%);
    }
    &.isActive {
      transform: translate(-30%, -10%);
    }
  }
  @media (max-width: 412px) {
    transform: translate(-50%, -2%);
    img {
      width: 58vw;
      transform: translate(57%, -5%);
    }
    &.isActive {
      transform: translate(-50%, -10%);
    }
  }
  @media (max-width: 375px) {
    transform: translate(-50%, -2%);
    img {
      width: 48vw;
      transform: translate(48%, 5%);
    }
    &.isActive {
      transform: translate(-50%, -10%);
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
export default function C() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <Wrapper>
        <Title>
          <span>
            <strong>채팅을 통해 </strong>
            <strong> 러너와 대화해보세요</strong>
          </span>
          <p>
            오픈 러너와 실시간으로 편안하게 소통하세요.
            <br />
            개인 연락처를 주고 받지 않아도 대화할 수 있어요.
          </p>
        </Title>
        <Info ref={ref} className={inView ? "isActive" : ""}>
          <img src="/img/Group 25.png" alt="" />
        </Info>
      </Wrapper>
      {/* <Arrow ref={ref} className={inView ? "isActive" : ""}>
        <img src="img/down-arrow.png" alt="" />
      </Arrow> */}
    </Container>
  );
}
