import Selector from "../../../../commons/selector";
import * as s from "./boardList.styles";
import DOMPurify from "dompurify";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
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
        },
      },
    },
  },
});
export default function BoardListUI(props: any) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <s.Wrapper>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                width: "100%",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleChange}
                centered
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                <Tab label="ALL" value="1" />
                <Tab label="FASHION" value="2" />
                <Tab label="ACC" value="3" />
                <Tab label="DIGITAL" value="4" />
                <Tab label="FOOD" value="5" />
                <Tab label="TOY" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards?.map((el: any) => (
                    <s.ProductInfoWrapper key={el.id}>
                      <s.ImageWrapper
                        id={el.id}
                        onClick={(e) => {
                          props.onClickMoveToProductDetail(e);
                        }}
                      >
                        <s.ProductImage
                          key={el}
                          src={
                            el?.image?.url
                              ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                              : "/boardList/default.jpeg"
                          }
                        />
                      </s.ImageWrapper>
                      <s.DateWrapper1>
                        <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                        <s.DivideLine2 />
                        <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                      </s.DateWrapper1>
                      {props.interestedId?.fetchInterestBoardId?.includes(
                        el.id
                      ) ? (
                        <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                      ) : (
                        <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                      )}
                      <s.UpperInfoWrapper>
                        <s.Category>{el?.category?.name}</s.Category>
                        {(el?.location?.address?.slice(0, 2) === "서울" ||
                          el?.location?.address?.slice(0, 2) === "경기" ||
                          el?.location?.address?.slice(0, 2) === "인천") && (
                          <s.Region1>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region1>
                        )}
                        {(el?.location?.address?.slice(0, 2) === "충남" ||
                          el?.location?.address?.slice(0, 2) === "대전") && (
                          <s.Region2>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region2>
                        )}
                        {el?.location?.address?.slice(0, 2) === "충북" && (
                          <s.Region3>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region3>
                        )}
                        {(el?.location?.address?.slice(0, 2) === "경북" ||
                          el?.location?.address?.slice(0, 2) === "대구") && (
                          <s.Region4>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region4>
                        )}
                        {(el?.location?.address?.slice(0, 2) === "경남" ||
                          el?.location?.address?.slice(0, 2) === "부산" ||
                          el?.location?.address?.slice(0, 2) === "울산") && (
                          <s.Region5>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region5>
                        )}
                        {el?.location?.address?.slice(0, 2) === "전북" && (
                          <s.Region6>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region6>
                        )}
                        {(el?.location?.address?.slice(0, 2) === "전남" ||
                          el?.location?.address?.slice(0, 2) === "광주") && (
                          <s.Region7>
                            {el?.location?.address?.slice(0, 2)}
                          </s.Region7>
                        )}
                      </s.UpperInfoWrapper>
                      <s.Title
                        id={el.id}
                        onClick={(e) => {
                          props.onClickMoveToProductDetail(e);
                        }}
                      >
                        {el?.title
                          ?.replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                          .split("#$%")
                          .map((el: any) => (
                            <s.TitleSpan
                              key={uuidv4()}
                              isMatched={props.keyword === el}
                            >
                              {el}
                            </s.TitleSpan>
                          ))}
                      </s.Title>
                      {typeof window !== "undefined" ? (
                        <s.Contents
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(el?.contents),
                          }}
                        ></s.Contents>
                      ) : (
                        <s.Contents></s.Contents>
                      )}
                      <s.Writer>{el?.user?.nickName}</s.Writer>
                      <s.Price>{el?.price}</s.Price>
                    </s.ProductInfoWrapper>
                  ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
            <TabPanel value="2">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards
                    ?.filter((el: any) => el?.category?.name === "FASHION")
                    .map((el: any) => (
                      <s.ProductInfoWrapper key={el.id}>
                        <s.ImageWrapper
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          <s.ProductImage
                            key={el}
                            src={
                              el?.image?.url
                                ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                                : "/boardList/default.jpeg"
                            }
                          />
                        </s.ImageWrapper>
                        <s.DateWrapper1>
                          <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                          <s.DivideLine2 />
                          <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                        </s.DateWrapper1>
                        {props.interestedId?.fetchInterestBoardId?.includes(
                          el.id
                        ) ? (
                          <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                        ) : (
                          <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                        )}
                        <s.UpperInfoWrapper>
                          <s.Category>{el?.category?.name}</s.Category>
                          {(el?.location?.address?.slice(0, 2) === "서울" ||
                            el?.location?.address?.slice(0, 2) === "경기" ||
                            el?.location?.address?.slice(0, 2) === "인천") && (
                            <s.Region1>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region1>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "충남" ||
                            el?.location?.address?.slice(0, 2) === "대전") && (
                            <s.Region2>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region2>
                          )}
                          {el?.location?.address?.slice(0, 2) === "충북" && (
                            <s.Region3>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region3>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경북" ||
                            el?.location?.address?.slice(0, 2) === "대구") && (
                            <s.Region4>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region4>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경남" ||
                            el?.location?.address?.slice(0, 2) === "부산" ||
                            el?.location?.address?.slice(0, 2) === "울산") && (
                            <s.Region5>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region5>
                          )}
                          {el?.location?.address?.slice(0, 2) === "전북" && (
                            <s.Region6>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region6>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "전남" ||
                            el?.location?.address?.slice(0, 2) === "광주") && (
                            <s.Region7>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region7>
                          )}
                        </s.UpperInfoWrapper>
                        <s.Title
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          {el?.title
                            ?.replaceAll(
                              props.keyword,
                              `#$%${props.keyword}#$%`
                            )
                            .split("#$%")
                            .map((el: any) => (
                              <s.TitleSpan
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                              >
                                {el}
                              </s.TitleSpan>
                            ))}
                        </s.Title>
                        {typeof window !== "undefined" ? (
                          <s.Contents
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(el?.contents),
                            }}
                          ></s.Contents>
                        ) : (
                          <s.Contents></s.Contents>
                        )}
                        <s.Writer>{el?.user?.nickName}</s.Writer>
                        <s.Price>{el?.price}</s.Price>
                      </s.ProductInfoWrapper>
                    ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
            <TabPanel value="3">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards
                    ?.filter((el: any) => el?.category?.name === "ACC")
                    .map((el: any) => (
                      <s.ProductInfoWrapper key={el.id}>
                        <s.ImageWrapper
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          <s.ProductImage
                            key={el}
                            src={
                              el?.image?.url
                                ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                                : "/boardList/default.jpeg"
                            }
                          />
                        </s.ImageWrapper>
                        <s.DateWrapper1>
                          <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                          <s.DivideLine2 />
                          <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                        </s.DateWrapper1>
                        {props.interestedId?.fetchInterestBoardId?.includes(
                          el.id
                        ) ? (
                          <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                        ) : (
                          <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                        )}
                        <s.UpperInfoWrapper>
                          <s.Category>{el?.category?.name}</s.Category>
                          {(el?.location?.address?.slice(0, 2) === "서울" ||
                            el?.location?.address?.slice(0, 2) === "경기" ||
                            el?.location?.address?.slice(0, 2) === "인천") && (
                            <s.Region1>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region1>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "충남" ||
                            el?.location?.address?.slice(0, 2) === "대전") && (
                            <s.Region2>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region2>
                          )}
                          {el?.location?.address?.slice(0, 2) === "충북" && (
                            <s.Region3>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region3>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경북" ||
                            el?.location?.address?.slice(0, 2) === "대구") && (
                            <s.Region4>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region4>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경남" ||
                            el?.location?.address?.slice(0, 2) === "부산" ||
                            el?.location?.address?.slice(0, 2) === "울산") && (
                            <s.Region5>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region5>
                          )}
                          {el?.location?.address?.slice(0, 2) === "전북" && (
                            <s.Region6>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region6>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "전남" ||
                            el?.location?.address?.slice(0, 2) === "광주") && (
                            <s.Region7>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region7>
                          )}
                        </s.UpperInfoWrapper>
                        <s.Title
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          {el?.title
                            ?.replaceAll(
                              props.keyword,
                              `#$%${props.keyword}#$%`
                            )
                            .split("#$%")
                            .map((el: any) => (
                              <s.TitleSpan
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                              >
                                {el}
                              </s.TitleSpan>
                            ))}
                        </s.Title>
                        {typeof window !== "undefined" ? (
                          <s.Contents
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(el?.contents),
                            }}
                          ></s.Contents>
                        ) : (
                          <s.Contents></s.Contents>
                        )}
                        <s.Writer>{el?.user?.nickName}</s.Writer>
                        <s.Price>{el?.price}</s.Price>
                      </s.ProductInfoWrapper>
                    ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
            <TabPanel value="4">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards
                    ?.filter((el: any) => el?.category?.name === "DIGITAL")
                    .map((el: any) => (
                      <s.ProductInfoWrapper key={el.id}>
                        <s.ImageWrapper
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          <s.ProductImage
                            key={el}
                            src={
                              el?.image?.url
                                ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                                : "/boardList/default.jpeg"
                            }
                          />
                        </s.ImageWrapper>
                        <s.DateWrapper1>
                          <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                          <s.DivideLine2 />
                          <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                        </s.DateWrapper1>
                        {props.interestedId?.fetchInterestBoardId?.includes(
                          el.id
                        ) ? (
                          <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                        ) : (
                          <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                        )}
                        <s.UpperInfoWrapper>
                          <s.Category>{el?.category?.name}</s.Category>
                          {(el?.location?.address?.slice(0, 2) === "서울" ||
                            el?.location?.address?.slice(0, 2) === "경기" ||
                            el?.location?.address?.slice(0, 2) === "인천") && (
                            <s.Region1>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region1>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "충남" ||
                            el?.location?.address?.slice(0, 2) === "대전") && (
                            <s.Region2>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region2>
                          )}
                          {el?.location?.address?.slice(0, 2) === "충북" && (
                            <s.Region3>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region3>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경북" ||
                            el?.location?.address?.slice(0, 2) === "대구") && (
                            <s.Region4>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region4>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경남" ||
                            el?.location?.address?.slice(0, 2) === "부산" ||
                            el?.location?.address?.slice(0, 2) === "울산") && (
                            <s.Region5>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region5>
                          )}
                          {el?.location?.address?.slice(0, 2) === "전북" && (
                            <s.Region6>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region6>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "전남" ||
                            el?.location?.address?.slice(0, 2) === "광주") && (
                            <s.Region7>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region7>
                          )}
                        </s.UpperInfoWrapper>
                        <s.Title
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          {el?.title
                            ?.replaceAll(
                              props.keyword,
                              `#$%${props.keyword}#$%`
                            )
                            .split("#$%")
                            .map((el: any) => (
                              <s.TitleSpan
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                              >
                                {el}
                              </s.TitleSpan>
                            ))}
                        </s.Title>
                        {typeof window !== "undefined" ? (
                          <s.Contents
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(el?.contents),
                            }}
                          ></s.Contents>
                        ) : (
                          <s.Contents></s.Contents>
                        )}
                        <s.Writer>{el?.user?.nickName}</s.Writer>
                        <s.Price>{el?.price}</s.Price>
                      </s.ProductInfoWrapper>
                    ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
            <TabPanel value="5">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards
                    ?.filter((el: any) => el?.category?.name === "FOOD")
                    .map((el: any) => (
                      <s.ProductInfoWrapper key={el.id}>
                        <s.ImageWrapper
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          <s.ProductImage
                            key={el}
                            src={
                              el?.image?.url
                                ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                                : "/boardList/default.jpeg"
                            }
                          />
                        </s.ImageWrapper>
                        <s.DateWrapper1>
                          <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                          <s.DivideLine2 />
                          <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                        </s.DateWrapper1>
                        {props.interestedId?.fetchInterestBoardId?.includes(
                          el.id
                        ) ? (
                          <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                        ) : (
                          <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                        )}
                        <s.UpperInfoWrapper>
                          <s.Category>{el?.category?.name}</s.Category>
                          {(el?.location?.address?.slice(0, 2) === "서울" ||
                            el?.location?.address?.slice(0, 2) === "경기" ||
                            el?.location?.address?.slice(0, 2) === "인천") && (
                            <s.Region1>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region1>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "충남" ||
                            el?.location?.address?.slice(0, 2) === "대전") && (
                            <s.Region2>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region2>
                          )}
                          {el?.location?.address?.slice(0, 2) === "충북" && (
                            <s.Region3>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region3>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경북" ||
                            el?.location?.address?.slice(0, 2) === "대구") && (
                            <s.Region4>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region4>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경남" ||
                            el?.location?.address?.slice(0, 2) === "부산" ||
                            el?.location?.address?.slice(0, 2) === "울산") && (
                            <s.Region5>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region5>
                          )}
                          {el?.location?.address?.slice(0, 2) === "전북" && (
                            <s.Region6>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region6>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "전남" ||
                            el?.location?.address?.slice(0, 2) === "광주") && (
                            <s.Region7>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region7>
                          )}
                        </s.UpperInfoWrapper>
                        <s.Title
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          {el?.title
                            ?.replaceAll(
                              props.keyword,
                              `#$%${props.keyword}#$%`
                            )
                            .split("#$%")
                            .map((el: any) => (
                              <s.TitleSpan
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                              >
                                {el}
                              </s.TitleSpan>
                            ))}
                        </s.Title>
                        {typeof window !== "undefined" ? (
                          <s.Contents
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(el?.contents),
                            }}
                          ></s.Contents>
                        ) : (
                          <s.Contents></s.Contents>
                        )}
                        <s.Writer>{el?.user?.nickName}</s.Writer>
                        <s.Price>{el?.price}</s.Price>
                      </s.ProductInfoWrapper>
                    ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
            <TabPanel value="6">
              <s.InnerWrapper>
                <s.FilterWrapper>
                  <Selector
                    title="전체"
                    sortValue={["최신순", "마감 임박순"]}
                  />
                  <s.DivideDiv />
                  <Selector
                    title="지역"
                    sortValue={[
                      "서울특별시",
                      "경기도",
                      "충청남도",
                      "충청북도",
                      "경상북도",
                      "경상남도",
                      "전라북도",
                      "전라남도",
                    ]}
                  />
                  {props.isPc && (
                    <s.SearchBarWrapper>
                      <s.SearchIcon src="/boardList/Search.png" />
                      <s.SearchInput
                        placeholder="제목을 검색해주세요"
                        type="text"
                        onChange={props.onChangeSearch}
                        refetch={props.refetch}
                      />
                    </s.SearchBarWrapper>
                  )}
                </s.FilterWrapper>
                {props.isMobile && (
                  <s.SearchBarWrapper>
                    <s.SearchIcon src="/boardList/Search.png" />
                    <s.SearchInput
                      placeholder="제목을 검색해주세요"
                      type="text"
                      onChange={props.onChangeSearch}
                      refetch={props.refetch}
                    />
                  </s.SearchBarWrapper>
                )}

                <s.ProductWrapper>
                  {props.data?.fetchBoards
                    ?.filter((el: any) => el?.category?.name === "TOY")
                    .map((el: any) => (
                      <s.ProductInfoWrapper key={el.id}>
                        <s.ImageWrapper
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          <s.ProductImage
                            key={el}
                            src={
                              el?.image?.url
                                ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                                : "/boardList/default.jpeg"
                            }
                          />
                        </s.ImageWrapper>
                        <s.DateWrapper1>
                          <s.Month>{el?.dueDate?.slice(6, 7)}</s.Month>
                          <s.DivideLine2 />
                          <s.Day>{el?.dueDate?.slice(8, 10)}</s.Day>
                        </s.DateWrapper1>
                        {props.interestedId?.fetchInterestBoardId?.includes(
                          el.id
                        ) ? (
                          <s.PickIconWhite src="/boardList/Bookmark(black).png" />
                        ) : (
                          <s.PickIconWhite src="/boardList/Bookmark(white).png" />
                        )}
                        <s.UpperInfoWrapper>
                          <s.Category>{el?.category?.name}</s.Category>
                          {(el?.location?.address?.slice(0, 2) === "서울" ||
                            el?.location?.address?.slice(0, 2) === "경기" ||
                            el?.location?.address?.slice(0, 2) === "인천") && (
                            <s.Region1>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region1>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "충남" ||
                            el?.location?.address?.slice(0, 2) === "대전") && (
                            <s.Region2>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region2>
                          )}
                          {el?.location?.address?.slice(0, 2) === "충북" && (
                            <s.Region3>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region3>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경북" ||
                            el?.location?.address?.slice(0, 2) === "대구") && (
                            <s.Region4>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region4>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "경남" ||
                            el?.location?.address?.slice(0, 2) === "부산" ||
                            el?.location?.address?.slice(0, 2) === "울산") && (
                            <s.Region5>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region5>
                          )}
                          {el?.location?.address?.slice(0, 2) === "전북" && (
                            <s.Region6>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region6>
                          )}
                          {(el?.location?.address?.slice(0, 2) === "전남" ||
                            el?.location?.address?.slice(0, 2) === "광주") && (
                            <s.Region7>
                              {el?.location?.address?.slice(0, 2)}
                            </s.Region7>
                          )}
                        </s.UpperInfoWrapper>
                        <s.Title
                          id={el.id}
                          onClick={(e) => {
                            props.onClickMoveToProductDetail(e);
                          }}
                        >
                          {el?.title
                            ?.replaceAll(
                              props.keyword,
                              `#$%${props.keyword}#$%`
                            )
                            .split("#$%")
                            .map((el: any) => (
                              <s.TitleSpan
                                key={uuidv4()}
                                isMatched={props.keyword === el}
                              >
                                {el}
                              </s.TitleSpan>
                            ))}
                        </s.Title>
                        {typeof window !== "undefined" ? (
                          <s.Contents
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(el?.contents),
                            }}
                          ></s.Contents>
                        ) : (
                          <s.Contents></s.Contents>
                        )}
                        <s.Writer>{el?.user?.nickName}</s.Writer>
                        <s.Price>{el?.price}</s.Price>
                      </s.ProductInfoWrapper>
                    ))}
                </s.ProductWrapper>
                <s.FetchMoreBtnWrapper>
                  <s.FetchMoreBtn onClick={props.onFetchMore}>
                    <AiOutlinePlus size={20} />
                  </s.FetchMoreBtn>
                </s.FetchMoreBtnWrapper>
              </s.InnerWrapper>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </s.Wrapper>
  );
}
