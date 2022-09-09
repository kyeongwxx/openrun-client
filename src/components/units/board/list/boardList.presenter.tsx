import Selector from "../../../../commons/selector";
import * as s from "./boardList.styles";
import DOMPurify from "dompurify";
import { AiOutlinePlus } from "react-icons/ai";

export default function BoardListUI(props) {
  return (
    <s.Wrapper>
      <s.CategoryWrapper>
        <s.CategoryItem>ALL</s.CategoryItem>
        <s.CategoryItem>FASHION</s.CategoryItem>
        <s.CategoryItem>ACC</s.CategoryItem>
        <s.CategoryItem>DIGITAL</s.CategoryItem>
        <s.CategoryItem>FOOD</s.CategoryItem>
        <s.CategoryItem>TOY</s.CategoryItem>
      </s.CategoryWrapper>

      <s.DivideLine1 />

      <s.FilterWrapper>
        <Selector title="전체" sortValue={["최신순", "마감 임박순"]} />
        <s.DivideDiv />
        <Selector
          title="지역"
          sortValue={[
            "서울특별시",
            "경기도",
            "충청남도",
            "충청북도",
            "경상북도",
            "경상남도",
            "전라북도",
            "전라남도",
          ]}
        />
        <s.SearchBarWrapper>
          <s.SearchIcon src="/boardList/Search.png" />
          <s.SearchInput />
        </s.SearchBarWrapper>
      </s.FilterWrapper>

      <s.ProductWrapper>
        {props.data?.fetchBoards?.map((el: any) => (
          <s.ProductInfoWrapper key={el.id}>
            <s.ImageWrapper
              id={el.id}
              onClick={(e) => {
                props.onClickMoveToProductDetail(e);
              }}
            >
              <s.ProductImage
                key={el}
                src={
                  el?.image[0].url
                    ? `https://storage.googleapis.com/openrun-storage/${el?.image[0].url}`
                    : "/boardList/default.jpeg"
                }
              />
            </s.ImageWrapper>
            <s.DateWrapper1>
              <s.Month>{el?.dueDate.slice(6, 7)}</s.Month>
              <s.DivideLine2 />
              <s.Day>{el?.dueDate.slice(8, 10)}</s.Day>
            </s.DateWrapper1>
            <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              {(el?.location.address.slice(0, 2) === "서울" ||
                el?.location.address.slice(0, 2) === "경기" ||
                el?.location.address.slice(0, 2) === "인천") && (
                <s.Region1>{el?.location.address.slice(0, 2)}</s.Region1>
              )}
              {el?.location.address.slice(0, 2) === "충남" && (
                <s.Region2>{el?.location.address.slice(0, 2)}</s.Region2>
              )}
              {el?.location.address.slice(0, 2) === "충북" && (
                <s.Region3>{el?.location.address.slice(0, 2)}</s.Region3>
              )}
              {(el?.location.address.slice(0, 2) === "경북" ||
                el?.location.address.slice(0, 2) === "대구") && (
                <s.Region4>{el?.location.address.slice(0, 2)}</s.Region4>
              )}
              {(el?.location.address.slice(0, 2) === "경남" ||
                el?.location.address.slice(0, 2) === "부산" ||
                el?.location.address.slice(0, 2) === "울산") && (
                <s.Region5>{el?.location.address.slice(0, 2)}</s.Region5>
              )}
              {el?.location.address.slice(0, 2) === "전북" && (
                <s.Region6>{el?.location.address.slice(0, 2)}</s.Region6>
              )}
              {(el?.location.address.slice(0, 2) === "전남" ||
                el?.location.address.slice(0, 2) === "광주") && (
                <s.Region7>{el?.location.address.slice(0, 2)}</s.Region7>
              )}
            </s.UpperInfoWrapper>
            <s.Title
              id={el.id}
              onClick={(e) => {
                props.onClickMoveToProductDetail(e);
              }}
            >
              {el?.title}
            </s.Title>
            {typeof window !== "undefined" ? (
              <s.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(el?.contents),
                }}
              ></s.Contents>
            ) : (
              <s.Contents></s.Contents>
            )}
            <s.Writer>{el?.user.nickName}</s.Writer>
            <s.Price>{el?.price}</s.Price>
          </s.ProductInfoWrapper>
        ))}
        {/* </InfiniteScroll> */}
      </s.ProductWrapper>
      <s.FetchMoreBtnWrapper>
        <s.FetchMoreBtn onClick={props.onFetchMore}>
          <AiOutlinePlus size={20} />
        </s.FetchMoreBtn>
      </s.FetchMoreBtnWrapper>
    </s.Wrapper>
  );
}
