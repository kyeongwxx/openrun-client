import { CheckCircleOutline, ReportGmailerrorred } from "@mui/icons-material";
import * as s from "./dealList.styles";

export default function MypageDealUI(props) {
  return (
    <s.Wrapper>
      <s.FavoriteListWrapper>
        <s.FavoriteTitle>거래내역</s.FavoriteTitle>
        {props.data?.length === 0 ? (
          <s.NoDataImg src="/img/nodata.png" />
        ) : (
          <s.FavoriteBoards
            pageStart={0}
            loadMore={props.onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            <s.FavoriteBoard>
              <s.BoardInfoWrapper width="40%">
                <s.BoardImg />
                <s.BoardContents>
                  <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                    {/* {props.data?.board.title} */}
                  </s.BoardContent>
                  {/* <s.BoardContent weight="700" size="1.2rem" color="#333">
                  행사제목행사제목행사
                </s.BoardContent> */}
                  <s.Text size="0.6rem" color="#5e5e5e" weight="400">
                    {/* {props.data?.board.dueDate} */}
                  </s.Text>
                </s.BoardContents>
              </s.BoardInfoWrapper>

              <s.Text size="1rem" color="#5e5e5e" weight="400">
                {/* {props.data?.board.price} */}
              </s.Text>

              <s.BtnWrapper>
                <s.Button>
                  <ReportGmailerrorred style={{ color: "#D44D4D" }} />
                  <s.Text size="1rem" color="#D44D4D" weight="400">
                    신고하기
                  </s.Text>
                </s.Button>
                <s.DivideLine />
                <s.Button>
                  <CheckCircleOutline style={{ color: "#1F8716" }} />
                  <s.Text size="1rem" color="#1F8716" weight="400">
                    거래완료
                  </s.Text>
                </s.Button>
              </s.BtnWrapper>
            </s.FavoriteBoard>
          </s.FavoriteBoards>
        )}
      </s.FavoriteListWrapper>
    </s.Wrapper>
  );
}
