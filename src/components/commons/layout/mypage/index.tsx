import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import CenteredTabs from "../../../../commons/tabs";
import { FETCH_WRITE_BOARDS } from "../../../units/myPage/writtenBoards/writtenBoard.queries";
import { userInfoValue } from "../../store";
import * as s from "./mypage.styles";

export default function LayoutMyPage() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoValue);

  const onClickMoveToPage = (event: string) => () => {
    router.push(event);
  };
  const { data } = useQuery(FETCH_WRITE_BOARDS);

  return (
    <s.Wrapper>
      <s.ProfileWrapper>
        <s.ProfileUser>
          {userInfo?.profileImg ? (
            <s.ProfileImg
              src={`https://storage.googleapis.com/openrun-storage/${userInfo?.profileImg}`}
            />
          ) : (
            <s.ProfileImg src={`/img/smile.png`} />
          )}

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
              {userInfo?.boardTotal}
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
              {userInfo?.point}
            </s.Text>
            <s.Text size="0.7rem" color="#333" weight="400">
              포인트
            </s.Text>
          </s.userInfoNumbers>
        </s.UserDetail>
      </s.ProfileWrapper>

      <s.MenuWrapper>
        <CenteredTabs
          tabs={[
            "MY",
            "내가 쓴 글",
            "거래 중 ",

            "찜목록",
            "포인트 정산 ",
            "포인트 충전",
          ]}
          address={[
            "/myPage",
            "/myPage/writtenBoards",
            "/myPage/proceeding",

            "/myPage/favoriteList",
            "/myPage/settlementList",
            "/myPage/paymentPoint",
          ]}
        />
      </s.MenuWrapper>
      <s.DivideLineHorizontal color="#656565" />
    </s.Wrapper>
  );
}
