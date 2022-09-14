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
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
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
    padding-bottom: 2rem;
  }
`;
const Info = styled.div`
  display: flex;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border: none;
  word-break: keep-all;
  opacity: 0;
  transition: all 1.5s ease-in-out;

  @media (max-width: 1400px) {
    padding: 2.25rem;
  }

  &:nth-of-type(1) {
    z-index: 3;
    transform: translateX(-70%);

    &.isActive {
      opacity: 1;
      transform: translateX(10%);
    }
  }

  &:nth-of-type(2) {
    transform: translateX(100%);
    &.isActive {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  & > span:nth-of-type(1) {
    padding-bottom: 3.43rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #262626;
  }
  & > span:nth-of-type(2) {
    padding-bottom: 1.5rem;
    font-size: 2.25rem;
    color: #737373;
    b {
      font-size: 3.125rem;
      color: #000000;
    }
    span {
      color: #000000;
    }
  }
  & > span:nth-of-type(3) {
    padding-bottom: 3.125rem;
    font-size: 1.5rem;
    color: #c4c4c4;
    letter-spacing: -0.05em;
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

export default function B() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Title>
          <span></span>
          <span>
            <br />
            <strong>1:1 매칭 러너를 찾아보세요</strong>
          </span>
          <p>
            바쁜 일상 속에서도 소중한 아이템을 놓칠 수 없는 당신
            <br />
            오픈러너를 모집하고 성공률을 확인한 후에 러너를 채택해보세요.
          </p>
        </Title>
        <Info ref={ref}>
          <Card className={inView ? "isActive" : ""}>
            <img src="/img/Group 96.png" className={inView ? "isActive" : ""} />
          </Card>
          <Card className={inView ? "isActive" : ""}>
            {/* 1<span>원하는 상품의 오픈런 정보를 등록합니다</span>2
            <span>러너를 모집합니다</span>3
            <span> 채택된 러너와 채팅으로 오픈런을 진행합니다</span> */}
          </Card>
        </Info>
      </Wrapper>
    </Container>
  );
}
