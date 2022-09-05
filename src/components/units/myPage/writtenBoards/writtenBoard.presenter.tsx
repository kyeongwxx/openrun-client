import * as s from "./writtenBoard.styles";
import InfiniteScroll from "react-infinite-scroller";
import Selector from "../../../../commons/selector";
export default function MypageWrittenBoardsUI() {
  return (
    <s.Wrapper>
      <s.SelectorWrapper>
        <Selector title="정렬하기" sortValue={["1", "2", "3"]} />
      </s.SelectorWrapper>

      <s.ActiveListWrapper>
        <s.ActiveTitle>작성게시글</s.ActiveTitle>
        <s.ActiveBoards>
          <s.ActiveBoard>
            <s.BoardImg />
            <s.BoardContents>
              <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                나이키
              </s.BoardContent>
              <s.BoardContent weight="700" size="1.2rem" color="#333">
                행사제목행사제목행사제목행사제목
              </s.BoardContent>
            </s.BoardContents>
          </s.ActiveBoard>
          <s.ActiveBoard>2</s.ActiveBoard>
          <s.ActiveBoard>3</s.ActiveBoard>
          <s.ActiveBoard>4</s.ActiveBoard>
          <s.ActiveBoard>5</s.ActiveBoard>
          <s.ActiveBoard>6</s.ActiveBoard>
        </s.ActiveBoards>
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
