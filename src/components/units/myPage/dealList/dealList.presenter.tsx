import { CheckCircleOutline, ReportGmailerrorred } from "@mui/icons-material";
import * as s from "./dealList.styles";

export default function MypageDealUI() {
  return (
    <s.Wrapper>
      <s.FavoriteListWrapper>
        <s.FavoriteTitle>거래내역</s.FavoriteTitle>

        <s.FavoriteBoards>
          <s.FavoriteBoard>
            <s.BoardInfoWrapper width="40%">
              <s.BoardImg />
              <s.BoardContents>
                <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                  나이키
                </s.BoardContent>
                <s.BoardContent weight="700" size="1.2rem" color="#333">
                  행사제목행사제목행사
                </s.BoardContent>
                <s.Text size="0.6rem" color="#5e5e5e" weight="400">
                  xx님과 거래하였습니다.
                </s.Text>
              </s.BoardContents>
            </s.BoardInfoWrapper>

            <s.Text size="1rem" color="#5e5e5e" weight="400">
              2022.xx.xx
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

          <s.FavoriteBoard>
            <s.BoardInfoWrapper width="40%">
              <s.BoardImg />
              <s.BoardContents>
                <s.BoardContent weight="700" size="1rem" color="#5e5e5e">
                  나이키
                </s.BoardContent>
                <s.BoardContent weight="700" size="1.2rem" color="#333">
                  행사제목행사제목행사
                </s.BoardContent>
                <s.Text size="0.6rem" color="#5e5e5e" weight="400">
                  xx님과 거래하였습니다.
                </s.Text>
              </s.BoardContents>
            </s.BoardInfoWrapper>

            <s.Text size="1rem" color="#5e5e5e" weight="400">
              2022.xx.xx
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
      </s.FavoriteListWrapper>
    </s.Wrapper>
  );
}
