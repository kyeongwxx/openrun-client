import { CheckCircleOutline, ReportGmailerrorred } from "@mui/icons-material";
import * as s from "./dealList.styles";
import { v4 as uuidv4 } from "uuid";
import { openValue } from "../../../commons/store";
import { useRecoilState } from "recoil";
import BasicModal from "../../../../commons/modal";
import { IDealListProps } from "../myPage.types";

export default function MypageDealUI(props: IDealListProps) {
  const [open, setOpen] = useRecoilState(openValue);
  return (
    <s.Wrapper>
      <s.ScrollButton onClick={props.onClickTop}>Top</s.ScrollButton>
      <s.FavoriteListWrapper>
        <s.FavoriteTitle>거래내역</s.FavoriteTitle>
        {props.data?.length === 0 ? (
          <s.NoDataImg src="/img/nodata.png" />
        ) : (
          <s.InfiniteScrollLimit id="scroll" ref={props.scrollRef}>
            <s.FavoriteBoards
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
              id="scroll"
            >
              {props.data ? (
                props.data?.map((el) => (
                  <s.FavoriteBoard key={uuidv4()}>
                    {console.log(el)}
                    <s.BoardInfoWrapper width="40%">
                      <s.BoardImg />
                      <s.BoardContents>
                        <s.BoardContent
                          weight="700"
                          size="1rem"
                          color="#5e5e5e"
                        >
                          {el.board?.title}
                        </s.BoardContent>
                        {el.board.user?.nickName}
                        <s.Text size="0.6rem" color="#5e5e5e" weight="400">
                          {el.board?.dueDate}
                        </s.Text>
                      </s.BoardContents>
                    </s.BoardInfoWrapper>

                    <s.Text size="1rem" color="#5e5e5e" weight="400">
                      {el?.price}원
                    </s.Text>

                    {el.status === "seller" ? (
                      <s.BtnWrapper>
                        <s.Button>
                          <ReportGmailerrorred style={{ color: "#D44D4D" }} />
                          <s.Text size="1rem" color="#D44D4D" weight="400">
                            신고하기
                          </s.Text>
                        </s.Button>
                        <s.DivideLine />
                        <s.Button onClick={props.onClickCompleteModal}>
                          <CheckCircleOutline style={{ color: "#1F8716" }} />
                          <s.Text size="1rem" color="#1F8716" weight="400">
                            거래완료
                          </s.Text>
                        </s.Button>
                      </s.BtnWrapper>
                    ) : (
                      <></>
                    )}
                  </s.FavoriteBoard>
                ))
              ) : (
                <></>
              )}
            </s.FavoriteBoards>
          </s.InfiniteScrollLimit>
        )}
      </s.FavoriteListWrapper>
    </s.Wrapper>
  );
}
