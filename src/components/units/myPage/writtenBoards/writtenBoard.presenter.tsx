import * as s from "./writtenBoard.styles";
import { v4 as uuidv4 } from "uuid";
import Selector from "../../../../commons/selector";
import { dateSplit } from "../../../../commons/function/dateSlice";
import { IWrittenBoardsProps } from "../myPage.types";
export default function MypageWrittenBoardsUI(props: IWrittenBoardsProps) {
  return (
    <s.Wrapper>
      {/* <s.SelectorWrapper>
        <Selector title="정렬하기" sortValue={["1", "2", "3"]} />
      </s.SelectorWrapper> */}
      <s.Button onClick={props.onClickTop}>Top</s.Button>

      <s.ActiveListWrapper>
        <s.ActiveTitle>작성게시글</s.ActiveTitle>
        {props.data?.length === 0 ? (
          <s.NodataImg src="/img/nodata.png" />
        ) : (
          <s.InfiniteScrollLimit id="scroll" ref={props.scrollRef}>
            <s.ActiveBoards
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data ? (
                props.data?.map((el) => (
                  <s.ActiveBoard
                    key={uuidv4()}
                    onClick={props.onClickMoveToDetail(el.id)}
                  >
                    <s.BoardImg
                      src={
                        el.image
                          ? `https://storage.googleapis.com/openrun-storage/${el.image[0].url}`
                          : "/img/noimage.png"
                      }
                    />

                    <s.BoardContents>
                      <s.BoardContent weight="700" size="1.2rem" color="#333">
                        {el.title}
                      </s.BoardContent>
                      <s.BoardContent weight="400" size="0.8rem" color="#333">
                        {dateSplit(el.dueDate)}
                      </s.BoardContent>
                      <s.BoardContent
                        weight="400"
                        size="0.8rem"
                        color="#5e5e5e"
                      >
                        {el.price}원
                      </s.BoardContent>
                    </s.BoardContents>
                    <s.Status>{el.status}</s.Status>
                  </s.ActiveBoard>
                ))
              ) : (
                <></>
              )}
            </s.ActiveBoards>
          </s.InfiniteScrollLimit>
        )}
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
