import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoValue } from "../../store";
import * as s from "./mypage.styles";

export default function LayoutMyPage() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoValue);

  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };
  return (
    <s.Wrapper>
      <s.ProfileWrapper>
        <s.ProfileUser>
          <s.ProfileImg />
          <s.ProfileDetail width="70%">
            <s.Text size="1.5rem" color="#333" weight="400">
              {userInfo?.nickName}님, 오늘의 일정이 1건 있습니다.
            </s.Text>
            <s.UserInfoEdit onClick={onClickMoveToPage(`/myPage/editAccount`)}>
              내정보 수정
            </s.UserInfoEdit>
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
              {userInfo?.point}P
            </s.Text>
            <s.Text size="0.7rem" color="#333" weight="400">
              포인트
            </s.Text>
          </s.userInfoNumbers>
        </s.UserDetail>
      </s.ProfileWrapper>
      <s.MenuWrapper>
        <s.Menus>
          <s.Menu onClick={onClickMoveToPage(`/myPage`)}>MY</s.Menu>
          <s.Menu onClick={onClickMoveToPage(`/myPage/writtenBoards`)}>
            작성한게시글
          </s.Menu>
          <s.Menu onClick={onClickMoveToPage(`/myPage/paymentPoint`)}>
            포인트
          </s.Menu>
          <s.Menu onClick={onClickMoveToPage(`/myPage/favoriteList`)}>
            찜목록
          </s.Menu>
          <s.Menu onClick={onClickMoveToPage(`/myPage/dealList`)}>
            거래내역
          </s.Menu>
        </s.Menus>
        <s.DivideLineHorizontal color="#656565" />
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
