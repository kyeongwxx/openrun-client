import * as s from "../boardList.styles";
import DOMPurify from "dompurify";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Selector from "../../../../../commons/selector";
import CenteredTabs from "../../../../../commons/tabs";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: "#555",
        },
      },
    },
  },
});
export default function BoardListDigitalUI(props: any) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <s.Wrapper>
      <CenteredTabs
        tabs={["ALL", "FASHION", "ACC", "DIGITAL", "FOOD", "TOY"]}
        address={[
          "/board/all",
          "/board/fashion",
          "/board/acc",
          "/board/digital",
          "/board/food",
          "/board/toy",
        ]}
      />
      <s.InnerWrapper>
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
          {props.isPc && (
            <s.SearchBarWrapper>
              <s.SearchIcon src="/boardList/Search.png" />
              <s.SearchInput
                placeholder="제목을 검색해주세요"
                type="text"
                onChange={props.onChangeSearch}
                refetch={props.refetch}
              />
            </s.SearchBarWrapper>
          )}
        </s.FilterWrapper>
        {props.isMobile && (
          <s.SearchBarWrapper>
            <s.SearchIcon src="/boardList/Search.png" />
            <s.SearchInput
              placeholder="제목을 검색해주세요"
              type="text"
              onChange={props.onChangeSearch}
              refetch={props.refetch}
            />
          </s.SearchBarWrapper>
        )}

        <s.ProductWrapper>
          {props.data?.fetchBoards
            ?.filter((el: any) => el?.category?.name === "DIGITAL")
            .map((el: any) => (
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
                      el?.image?.url
                        ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                        : "/boardList/default.jpeg"
                    }
                  />
                </s.ImageWrapper>
                <s.DateWrapper1>
                  <s.Month>{el?.dueDate?.slice(6, 7)}월</s.Month>
                  <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                </s.DateWrapper1>
                {props.interestedId?.fetchInterestBoardId?.includes(el.id) ? (
                  <s.PickIcon src="/boardList/Bookmark(filled).png" />
                ) : (
                  <s.PickIcon src="/boardList/Bookmark.png" />
                )}
                <s.UpperInfoWrapper>
                  <s.Category>{el?.category?.name}</s.Category>
                  {(el?.location?.address?.slice(0, 2) === "서울" ||
                    el?.location?.address?.slice(0, 2) === "경기" ||
                    el?.location?.address?.slice(0, 2) === "인천") && (
                    <s.Region1>{el?.location?.address?.slice(0, 2)}</s.Region1>
                  )}
                  {(el?.location?.address?.slice(0, 2) === "충남" ||
                    el?.location?.address?.slice(0, 2) === "대전") && (
                    <s.Region2>{el?.location?.address?.slice(0, 2)}</s.Region2>
                  )}
                  {el?.location?.address?.slice(0, 2) === "충북" && (
                    <s.Region3>{el?.location?.address?.slice(0, 2)}</s.Region3>
                  )}
                  {(el?.location?.address?.slice(0, 2) === "경북" ||
                    el?.location?.address?.slice(0, 2) === "대구") && (
                    <s.Region4>{el?.location?.address?.slice(0, 2)}</s.Region4>
                  )}
                  {(el?.location?.address?.slice(0, 2) === "경남" ||
                    el?.location?.address?.slice(0, 2) === "부산" ||
                    el?.location?.address?.slice(0, 2) === "울산") && (
                    <s.Region5>{el?.location?.address?.slice(0, 2)}</s.Region5>
                  )}
                  {el?.location?.address?.slice(0, 2) === "전북" && (
                    <s.Region6>{el?.location?.address?.slice(0, 2)}</s.Region6>
                  )}
                  {(el?.location?.address?.slice(0, 2) === "전남" ||
                    el?.location?.address?.slice(0, 2) === "광주") && (
                    <s.Region7>{el?.location?.address?.slice(0, 2)}</s.Region7>
                  )}
                </s.UpperInfoWrapper>
                <s.Title
                  id={el.id}
                  onClick={(e) => {
                    props.onClickMoveToProductDetail(e);
                  }}
                >
                  {el?.title
                    ?.replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <s.TitleSpan
                        key={uuidv4()}
                        isMatched={props.keyword === el}
                      >
                        {el}
                      </s.TitleSpan>
                    ))}
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
                <s.Writer>{el?.user?.nickName}</s.Writer>
                <s.StatusPriceWrapper>
                  {el.status === "모집중" && <s.Status1>{el.status}</s.Status1>}
                  {el.status === "진행중" && <s.Status2>{el.status}</s.Status2>}
                  {el.status === "거래완료" && (
                    <s.Status3>{el.status}</s.Status3>
                  )}
                  <s.Price>{el?.price.toLocaleString("ko-KR")}원</s.Price>
                </s.StatusPriceWrapper>
              </s.ProductInfoWrapper>
            ))}
        </s.ProductWrapper>
        <s.FetchMoreBtnWrapper>
          <s.FetchMoreBtn onClick={props.onFetchMore}>
            <AiOutlinePlus size={20} />
          </s.FetchMoreBtn>
        </s.FetchMoreBtnWrapper>
      </s.InnerWrapper>
    </s.Wrapper>
  );
}
