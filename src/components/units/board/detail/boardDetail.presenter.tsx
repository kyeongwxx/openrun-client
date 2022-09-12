import * as s from "./boardDetail.styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Map from "../../../../commons/maps-detail/map.container";
import Dompurify from "dompurify";
import { AiOutlineCheckCircle } from "react-icons/ai";
import MainSlider from "../../../../commons/carousel";
import LiveChat from "../../../../commons/liveChat/liveChat.container";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: "#555",
          "&.Mui-selected": {
            fontWeight: "800",
            fontSize: "1.125rem",
          },
        },
      },
    },
  },
});

export default function BoardDetailUI(props: any) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <s.Wrapper>
      <s.ProductWrapper>
        <s.ImageWrapper>
          <s.Image
            src={
              props.data?.fetchBoard?.image[0].url
                ? `https://storage.googleapis.com/openrun-storage/${props.data?.fetchBoard?.image[0].url}`
                : "/boardList/default.jpeg"
            }
          />
        </s.ImageWrapper>
        <s.ProductInfoWrapper>
          <s.StatusWrapper>
            <s.Status>모집중</s.Status>
            <s.MutationBtns>
              <s.UpdateBtn
                src="/boardDetail/Update.png"
                onClick={props.onClickMoveToProductEdit}
              />
              <s.DeleteBtn
                src="/boardDetail/Delete.png"
                onClick={props.onClickDelete}
                id={props.router.query.id}
              />
            </s.MutationBtns>
          </s.StatusWrapper>
          <s.Name>{props.data?.fetchBoard?.title}</s.Name>
          <s.Location>카테고리</s.Location>
          <s.Category>{props.data?.fetchBoard?.category?.name}</s.Category>
          <s.Location>희망시간</s.Location>
          <s.Date>
            <s.eventDay>
              {props.data?.fetchBoard?.dueDate?.slice(0, 10)}
            </s.eventDay>
            <s.eventTime>
              {props.data?.fetchBoard?.dueDate?.slice(11, 16)}
            </s.eventTime>
          </s.Date>
          <s.Location>장소</s.Location>
          <s.Address>{props.data?.fetchBoard?.location?.address}</s.Address>
          <s.AddressDetail>
            {props.data?.fetchBoard?.location?.addressDetail}
          </s.AddressDetail>
          <Map address={props.data?.fetchBoard?.location?.address} />
          <s.Price>
            {props.data?.fetchBoard?.price.toLocaleString("ko-KR")}원
          </s.Price>
          <s.DivideLine />
          <s.PenaltyWrapper>
            <s.BtnWrapper>
              <s.PenaltyBtn></s.PenaltyBtn>
              <s.PenaltyText>실패 시 패널티 적용 동의하기</s.PenaltyText>
            </s.BtnWrapper>
            <s.DetailText>자세히 보기</s.DetailText>
          </s.PenaltyWrapper>
          <s.BtnsWrapper>
            <s.ChatBtn onClick={props.openCloseModal}>
              <s.ChatIcon src="/boardDetail/Chat.png" />
              {props.isPc && <s.ChatText>채팅하기</s.ChatText>}
            </s.ChatBtn>
            {props.showModal ? <LiveChat /> : null}
            <s.PickBtn>찜하기</s.PickBtn>
            <s.ApplyBtn type="button" onClick={props.onClickApply}>
              신청하기
            </s.ApplyBtn>
          </s.BtnsWrapper>
        </s.ProductInfoWrapper>
      </s.ProductWrapper>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "75%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                variant="fullWidth"
              >
                <Tab label="요청사항" value="1" />
                <Tab label="신청목록" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {typeof window !== "undefined" ? (
                <s.RequestWrapper
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchBoard?.contents
                    ),
                  }}
                ></s.RequestWrapper>
              ) : (
                <s.RequestWrapper></s.RequestWrapper>
              )}
            </TabPanel>
            <TabPanel value="2">
              <s.ApplyWrapper>
                {props.runner?.fetchRunnerByBoard.map((el: any) => (
                  <s.ApplyList>
                    <s.ApplyItem>
                      <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                      <s.RunnerName>{el.user.nickName}</s.RunnerName>
                      <s.Rating>
                        <s.Star src="/boardDetail/Star.png" />
                      </s.Rating>
                      <s.CntWrapper>
                        {props.isPc && <s.RunCnt>줄서기 300건</s.RunCnt>}
                        <s.SuccessRate>성공률 95%</s.SuccessRate>
                      </s.CntWrapper>
                    </s.ApplyItem>
                    {props.isPc && (
                      <s.SelectBtn onClick={props.onClickAdopt}>
                        채택하기
                      </s.SelectBtn>
                    )}
                    {props.isMobile && (
                      <s.SelectBtn>
                        <AiOutlineCheckCircle
                          size={30}
                          onClick={props.onClickAdopt}
                        />
                      </s.SelectBtn>
                    )}
                  </s.ApplyList>
                ))}
              </s.ApplyWrapper>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </s.Wrapper>
  );
}
