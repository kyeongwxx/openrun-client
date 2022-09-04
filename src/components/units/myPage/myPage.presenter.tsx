import { Avatar } from "@mui/material";
import * as s from "./myPage.styles";
export default function MyPageUI() {
  return (
    <s.Wrapper>
      <s.ProfileWrapper>
        <s.ProfileUser>
          <s.ProfileDetail width="15%">
            <s.AvatarC />
          </s.ProfileDetail>
          <s.ProfileDetail width="70%">
            <s.Text size="1.5rem" color="#333" weight="400">
              xxx님, 오늘의 일정이 1건 있습니다.
            </s.Text>
            <s.UserInfoEdit>내정보 수정</s.UserInfoEdit>
          </s.ProfileDetail>
        </s.ProfileUser>

        <s.UserDetail>
          <s.userInfoNumbers>
            <s.Text size="1.5rem" color="#333" weight="700">
              10
            </s.Text>
            <s.Text size="0.7rem" color="#333" weight="400">
              작성한 게시글
            </s.Text>
          </s.userInfoNumbers>
          <s.DivideLine />
          <s.userInfoNumbers>
            <s.Text size="1.5rem" color="#333" weight="700">
              10
            </s.Text>
            <s.Text size="0.7rem" color="#333" weight="400">
              거래내역
            </s.Text>
          </s.userInfoNumbers>
          <s.DivideLine />
          <s.userInfoNumbers>
            <s.Text size="1.5rem" color="#333" weight="700">
              1000P
            </s.Text>
            <s.Text size="0.7rem" color="#333" weight="400">
              포인트
            </s.Text>
          </s.userInfoNumbers>
        </s.UserDetail>
      </s.ProfileWrapper>
      <s.MenuWrapper>
        <s.Menus>
          <s.Menu>MY</s.Menu>
          <s.Menu>작성한게시글</s.Menu>
          <s.Menu>포인트</s.Menu>
          <s.Menu>찜목록</s.Menu>
          <s.Menu>거래내역</s.Menu>
        </s.Menus>
        <s.DivideLineHorizontal color="#656565" />
      </s.MenuWrapper>
      <s.ActiveListWrapper>
        <s.ActiveTitle>거래중인 제품</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>채딩중인 대화</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
          <s.ActiveImage height="150px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
      <s.DivideLineHorizontal color="#F2F2F2" />
      <s.ActiveListWrapper>
        <s.ActiveTitle>오늘 본 제품</s.ActiveTitle>
        <s.ActiveImages>
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
          <s.ActiveImage height="300px" />
        </s.ActiveImages>
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
