import { dateSplit } from "../../../../commons/function/dateSlice";
import { IMainProps } from "../myPage.types";
import * as s from "./myPage.styles";
export default function MyPageUI(props: IMainProps) {
  return (
    <s.Wrapper>
      <s.ActiveListWrapper>
        <s.ActiveTitle>거래중인 상품: Seller</s.ActiveTitle>
        {props.sellerData?.length === 0 ? (
          <s.NoData>
            <s.ExclamationMark />
            <s.NodataText>거래중인 상품이 없습니다.</s.NodataText>
          </s.NoData>
        ) : (
          <s.InfiniteScrollLimit>
            <s.ActiveWrapper
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
            >
              {props.sellerData?.map((el) => (
                <s.ActiveContent
                  height="300px"
                  onClick={props.onClickMoveToBoardDetail(el.board?.id || "")}
                >
                  {el.image?.url === "default.img" ? (
                    <s.NoImg />
                  ) : (
                    <s.ActiveImg
                      src={`https://storage.googleapis.com/openrun-storage/${el.image?.url}`}
                    />
                  )}

                  <s.ActiveText color="#333" weight="700" size="0.8rem">
                    {el.title}
                  </s.ActiveText>
                  <s.ActiveText color="#333" weight="400" size="0.6rem">
                    {el.price}원
                  </s.ActiveText>
                  <s.ActiveText color="#333" weight="400" size="0.6rem">
                    희망 시간: {dateSplit(el.dueDate)}
                  </s.ActiveText>
                </s.ActiveContent>
              ))}
            </s.ActiveWrapper>
          </s.InfiniteScrollLimit>
        )}
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>거래중인 상품: Runner</s.ActiveTitle>
        {props.runnerData?.length === 0 ? (
          <s.NoData>
            <s.ExclamationMark />
            <s.NodataText>거래중인 상품이 없습니다.</s.NodataText>
          </s.NoData>
        ) : (
          <s.InfiniteScrollLimit>
            <s.ActiveWrapper
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
            >
              {props.runnerData?.map((el) => (
                <s.ActiveContent
                  height="300px"
                  onClick={props.onClickMoveToBoardDetail(el.board?.id || "")}
                >
                  {el.board?.image?.url === "default.img" ? (
                    <s.NoImg />
                  ) : (
                    <s.ActiveImg src={el.board?.image?.url || ""} />
                  )}

                  <s.ActiveText color="#333" weight="700" size="0.8rem">
                    {el.board?.title}
                  </s.ActiveText>
                  <s.ActiveText color="#333" weight="400" size="0.6rem">
                    {el.board?.price}원
                  </s.ActiveText>
                  <s.ActiveText color="#333" weight="400" size="0.6rem">
                    장소: {el.board?.location?.address}
                  </s.ActiveText>

                  <s.ActiveText color="#333" weight="400" size="0.6rem">
                    희망 시간: {dateSplit(el.board?.dueDate)}
                  </s.ActiveText>
                </s.ActiveContent>
              ))}
            </s.ActiveWrapper>
          </s.InfiniteScrollLimit>
        )}
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>채팅중인 대화</s.ActiveTitle>
        <s.InfiniteScrollLimit>
          <s.ActiveWrapper
            pageStart={0}
            loadMore={props.onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            <s.ActiveContent height="300px" />
          </s.ActiveWrapper>
        </s.InfiniteScrollLimit>
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
