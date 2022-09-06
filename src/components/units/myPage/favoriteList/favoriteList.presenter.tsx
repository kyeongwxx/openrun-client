import * as s from "./favoriteList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MypageFavoriteListUI() {
  return (
    <s.Wrapper>
      <s.FavoriteListWrapper>
        <s.FavoriteTitle>찜목록</s.FavoriteTitle>

        <s.FavoriteBoards>
          <s.FavoriteBoard>
            <s.BoardImg />
            <s.BoardContents>
              <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                나이키
              </s.BoardContent>
              <s.BoardContent weight="700" size="1.2rem" color="#333">
                행사제목행사제목행사제목행사제목
              </s.BoardContent>
            </s.BoardContents>
            <s.Text size="1rem" color="#5e5e5e" weight="400">
              2022.xx.xx
            </s.Text>
          </s.FavoriteBoard>
        </s.FavoriteBoards>
      </s.FavoriteListWrapper>
    </s.Wrapper>
  );
}
