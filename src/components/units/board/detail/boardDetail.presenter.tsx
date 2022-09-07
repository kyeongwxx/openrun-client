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

export default function BoardDetailUI(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <s.Wrapper>
      <s.ProductWrapper>
        <s.ImageWrapper>
          <s.BigImage src="/boardDetail/Nike2.png" />
        </s.ImageWrapper>
        <s.ProductInfoWrapper>
          <s.Status>모집중</s.Status>
          <s.Name>{props.data?.fetchBoard?.title}</s.Name>
          <s.Location>카테고리</s.Location>
          <s.Category>{props.data?.fetchBoard?.category.name}</s.Category>
          <s.Location>희망 시간</s.Location>
          <s.Date>
            {props.data?.fetchBoard?.eventDay.slice(0, 10)}{" "}
            {props.data?.fetchBoard?.eventTime}
          </s.Date>
          <s.Location>장소</s.Location>
          <s.Address>{props.data?.fetchBoard?.location.address}</s.Address>
          <s.AddressDetail>
            {props.data?.fetchBoard?.location.addressDetail}
          </s.AddressDetail>
          <Map address={props.data?.fetchBoard?.location.address} />
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
            <s.ChatBtn>
              <s.ChatCnt>1</s.ChatCnt>
              <s.ChatIcon src="/boardDetail/Chat.png" />
              <s.ChatText>채팅하기</s.ChatText>
            </s.ChatBtn>
            <s.PickBtn>찜하기</s.PickBtn>
            <s.ApplyBtn>신청하기</s.ApplyBtn>
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
                <s.ApplyList>
                  <s.ApplyItem>
                    <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                    <s.RunnerName>abc1234</s.RunnerName>
                    <s.Rating>
                      <s.Star src="/boardDetail/Star.png" />
                    </s.Rating>
                    <s.CntWrapper>
                      <s.RunCnt>줄서기 300건</s.RunCnt>
                      <s.ReTradeRate>재거래희망률 90%</s.ReTradeRate>
                      <s.SuccessRate>성공률 95%</s.SuccessRate>
                    </s.CntWrapper>
                  </s.ApplyItem>
                  <s.SelectBtn>채택하기</s.SelectBtn>
                </s.ApplyList>
                <s.ApplyList>
                  <s.ApplyItem>
                    <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                    <s.RunnerName>abc1234</s.RunnerName>
                    <s.Rating>
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                    </s.Rating>
                    <s.CntWrapper>
                      <s.RunCnt>줄서기 300건</s.RunCnt>
                      <s.ReTradeRate>재거래희망률 90%</s.ReTradeRate>
                      <s.SuccessRate>성공률 95%</s.SuccessRate>
                    </s.CntWrapper>
                  </s.ApplyItem>
                  <s.SelectBtn>채택하기</s.SelectBtn>
                </s.ApplyList>
                <s.ApplyList>
                  <s.ApplyItem>
                    <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                    <s.RunnerName>abc1234</s.RunnerName>
                    <s.Rating>
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                    </s.Rating>
                    <s.CntWrapper>
                      <s.RunCnt>줄서기 300건</s.RunCnt>
                      <s.ReTradeRate>재거래희망률 90%</s.ReTradeRate>
                      <s.SuccessRate>성공률 95%</s.SuccessRate>
                    </s.CntWrapper>
                  </s.ApplyItem>
                  <s.SelectBtn>채택하기</s.SelectBtn>
                </s.ApplyList>
                <s.ApplyList>
                  <s.ApplyItem>
                    <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                    <s.RunnerName>abc1234</s.RunnerName>
                    <s.Rating>
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                    </s.Rating>
                    <s.CntWrapper>
                      <s.RunCnt>줄서기 300건</s.RunCnt>
                      <s.ReTradeRate>재거래희망률 90%</s.ReTradeRate>
                      <s.SuccessRate>성공률 95%</s.SuccessRate>
                    </s.CntWrapper>
                  </s.ApplyItem>
                  <s.SelectBtn>채택하기</s.SelectBtn>
                </s.ApplyList>
                <s.ApplyList>
                  <s.ApplyItem>
                    <s.RunnerIcon src="/boardDetail/RunnerIcon.png" />
                    <s.RunnerName>abc1234</s.RunnerName>
                    <s.Rating>
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                      <s.Star src="/boardDetail/Star.png" />
                    </s.Rating>
                    <s.CntWrapper>
                      <s.RunCnt>줄서기 300건</s.RunCnt>
                      <s.ReTradeRate>재거래희망률 90%</s.ReTradeRate>
                      <s.SuccessRate>성공률 95%</s.SuccessRate>
                    </s.CntWrapper>
                  </s.ApplyItem>
                  <s.SelectBtn>채택하기</s.SelectBtn>
                </s.ApplyList>
              </s.ApplyWrapper>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </s.Wrapper>
  );
}
