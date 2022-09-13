import * as s from "./favoriteList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MypageFavoriteListUI(props) {
  return (
    <s.Wrapper>
      <s.FavoriteListWrapper>
        <s.FavoriteTitle>찜목록</s.FavoriteTitle>
        {props.data?.length === 0 ? (
          <s.NodataImg src="/img/nodata.png" />
        ) : (
          <s.FavoriteBoards
            pageStart={0}
            loadMore={props.onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            {/* <s.FavoriteBoard onClick={props.onClickMoveToBoardDetail(props.data?.id)}> */}
            <s.FavoriteBoard>
              <s.BoardImg />
              <s.BoardContents>
                {/* <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                {props.data?.board.title}
              </s.BoardContent> */}
                <s.BoardContent weight="700" size="1.2rem" color="#333">
                  {/* {props.data?.board.title} */}
                </s.BoardContent>
              </s.BoardContents>
              <s.Text size="1rem" color="#5e5e5e" weight="400">
                {/* {props.data?.board.dueDate} */}
              </s.Text>
            </s.FavoriteBoard>
          </s.FavoriteBoards>
        )}
      </s.FavoriteListWrapper>
    </s.Wrapper>
  );
}
