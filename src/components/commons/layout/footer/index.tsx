import * as s from "./footer.styles";
export default function LayoutFooter() {
  return (
    <s.Wrapper>
      <s.MenuWrapper>
        <s.Menu>
          <s.Text weight="700" color="#333">
            1600-0000
          </s.Text>
          <s.Text weight="400" color="#1a1a1a">
            상담시간: 오전 10시~오후 5시
          </s.Text>
          <s.Text weight="400" color="#909090">
            email: xxx@openrun.com
          </s.Text>
        </s.Menu>
        <s.Menu>
          <s.InfoWrapper>
            <s.Info>
              <s.Text weight="400" color="#909090">
                서비스소개
              </s.Text>
            </s.Info>
            {/* <s.Info>
              <s.Text weight="400" color="#909090">
                개인정보 처리방침
              </s.Text>
              <s.Text weight="400" color="#909090">
                약관안내
              </s.Text>
              <s.Text weight="400" color="#909090">
                윤리경영
              </s.Text>
            </s.Info> */}
            <s.Info>
              <s.Text weight="400" color="#909090">
                공지사항
              </s.Text>
              {/* <s.Text weight="400" color="#909090">
                회원혜택
              </s.Text> */}
              <s.Text weight="400" color="#909090">
                자주묻는질문
              </s.Text>
            </s.Info>
          </s.InfoWrapper>
        </s.Menu>
      </s.MenuWrapper>
    </s.Wrapper>
  );
}
