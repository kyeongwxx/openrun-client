import * as s from "./eventInfoDetail.styles";
import { IEventInfoDetailUI } from "./eventInfoDetail.types";

export default function EventInfoDetailUI(props: IEventInfoDetailUI) {
  return (
    <>
      <s.Wrapper>
        <s.ItemWrapper>
          <s.ItemImg src="/img/Rectangle 114.png" />
          {/* {props.image}  */}
          <s.ItemInfoBox>
            <s.PlanTitle>오픈런 일정</s.PlanTitle>
            <s.Brand>{props.data?.fetchEvent?.id}NIKE</s.Brand>
            <s.Event>
              {props.data?.fetchEvent?.title}나이키 DD1391-100 선출시
            </s.Event>
            <s.Time>{props.data?.fetchEvent?.period}2022.09.16 am10:00</s.Time>
            <s.PlaceTitle>장소</s.PlaceTitle>
            {/* <s.Store>{props.location}홍대 나이키</s.Store> */}
            <s.StoreDetail>
              {props.data?.fetchEvent?.location}서울시 마포구 홍익로 23
            </s.StoreDetail>
            <s.PriceBox>
              <s.Price>169,000원</s.Price>
            </s.PriceBox>
          </s.ItemInfoBox>
        </s.ItemWrapper>
        <s.DivideLine />
        <s.InfoWrapper>
          <s.InfoTitle>행사정보</s.InfoTitle>
          <s.Information>
            {props.data?.fetchEvent?.contents}
            2 0 2 2 . 0 9 . 16
            <br />
            1 1 : 0 0 A M <br />
            <br />
            DD1391-100
            <br />
            <br /> 2010년 첫 출시되었던 MADE 라인 <br />
            DD1391-100의 라이프스타일 버전 <br /> <br />
            <br />
            클래식한 DD1391 모델에 <br />
            나이키 DNA 컬러인 JP컬러와 <br /> 네이비 컬러 배색으로 재해석된 팩
            구성으로 <br />
            프리미엄 누벅 소재가 사용되어 <br /> 더욱 고급스러움을 느낄 수 있는{" "}
            <br />
            DD1391-100 입니다. <br /> <br />
            일상생활에서 착용하기 적합한 <br />
            반발성 있는 N-ERGY 미드솔이 후족부에 사용하였고 <br />
            아웃솔에는 빠른 마모를 방지할 수 있는N-durance와 <br />
            뒤틀림 방지를 위한 Stability-web이 <br />
            중족부에 사용되어 편안한 착화감을 제공합니다. <br />
            <br /> <br />
            발매매장 및 발매정보 <br />
            공식 온라인스토어 <br />
            나이키 오프라인 매장 <br />
            직영_강남, 직영_홍대, 직영_명동, 직영_북촌 <br />
            동성로2, 타임스퀘어, AK수원, LF광양 <br />
            NC송파, 광복, 구미중앙, 대전은행 <br />
            대학로, 롯데군산아울렛, 롯데동탄, 롯데부산 <br />
            롯데잠실, 부산대(대), 부평중앙, 성남신흥 <br />
            스타필드하남, 신세계대전, 신세계센텀 <br />
            안산중앙, 전주, 제주, 청주 <br />
            춘천, 충장로, 현대서울, 현대중동
          </s.Information>
          <s.InfoImg1 src="/img/Rectangle 131.png" />
          <s.InfoImg2 src="/img/Rectangle 138.png" />
          <s.ImgBox>
            <s.InfoImg3 src="/img/Rectangle 133.png" />
            <s.InfoImg4 src="/img/Rectangle 137.png" />
          </s.ImgBox>
          <s.InfoImg5 src="/img/Rectangle 135.png" />
          <s.MoveToSiteBtn>사이트로 이동하기</s.MoveToSiteBtn>
        </s.InfoWrapper>
        <s.WithItemWrapper>
          <s.WithItemTitle>With Item</s.WithItemTitle>
          <s.WithItemSubTitle>함께 보면 좋은 상품</s.WithItemSubTitle>
        </s.WithItemWrapper>
        <s.WithItemBox>
          <s.WithItemImg src="/img/Rectangle 38.png" />
          <s.WithItemImg />
          <s.WithItemImg />
          <s.WithItemImg />
          <s.WithItemImg />

          {/* <s.NewImg src="/img/Group 1.png" /> */}
        </s.WithItemBox>
      </s.Wrapper>
    </>
  );
}
