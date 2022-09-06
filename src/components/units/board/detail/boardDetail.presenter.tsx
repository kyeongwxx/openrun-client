import * as s from "./boardDetail.styles";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function BoardDetailUI() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <s.Wrapper>
      <s.ProductWrapper>
        <s.ImageWrapper>
          <s.BigImage src="/boardDetail/Nike2.png" />
          <s.SmallImageWrapper>
            <s.SmallImage />
            <s.SmallImage />
          </s.SmallImageWrapper>
        </s.ImageWrapper>
        <s.ProductInfoWrapper>
          <s.Status>모집중</s.Status>
          <s.Brand>Nike</s.Brand>
          <s.Name>오픈런 한정판 나이키 덩크 로우</s.Name>
          <s.Date>2022.09.16 10:00 am</s.Date>
          <s.Location>장소</s.Location>
          <s.StoreAddress>홍대 나이키</s.StoreAddress>
          <s.AddressDetail>서울시 마포구 홍익로 23</s.AddressDetail>
          <s.ProductInfo>제품 정보</s.ProductInfo>
          <s.ProductName>나이키 덩크 로우 레트로 블랙</s.ProductName>
          <s.ProductNumber>DD1391-100</s.ProductNumber>
          <s.ProductSize>250mm</s.ProductSize>
          <s.Price>10,000원</s.Price>
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
              <s.RequestWrapper>
                1. 매장 도착 시 줄서기 인증 사진 부탁드립니다.
                <br />
                2. 예상 대기 시간을 알려주세요.
                <br />
              </s.RequestWrapper>
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
