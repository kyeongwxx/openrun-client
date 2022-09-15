import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

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

export const ItemImg = styled.img`
  width: 45rem;
  margin-bottom: 14rem;
  .isActive {
    animation: fadeInUp;
    animation-duration: 1s;
  }
  @media (max-width: 767px) {
    width: 35rem;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32rem;

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
  & > button {
    width: 15rem;
    font-size: 1.5rem;
    padding-top: 4rem;
    background: linear-gradient(93.72deg, #5920d3 0%, #2f88e5 99.32%);
    color: #fff;
    border-radius: 0.5rem;

    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 1250px) {
    transform: translateY(-80%);
  }
`;

const Info = styled.div`
  position: absolute;
  right: 23%;
  bottom: 5%;
  transform: translateY(90%);
  filter: blur(20px);
  transition: all 1.5s ease;

  &.isActive {
    filter: blur(0px);
    transform: translateY(0.5%);
  }
  img {
    width: 55rem;
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
export default function C() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <Wrapper>
        <Title>
          <span>
            <strong>채팅을 통해 러너와 대화해보세요</strong>
          </span>
          <p>
            오픈 러너와 실시간으로 편안하게 소통하세요.
            <br />
            개인 연락처를 주고 받지 않아도 서로의 위치를 확인할 수 있어요.
          </p>
        </Title>
        <Info ref={ref} className={inView ? "isActive" : ""}>
          <img src="/img/queue.png" alt="" />
          {/* 이미지교체 필요 */}
        </Info>
      </Wrapper>
    </Container>
  );
}
