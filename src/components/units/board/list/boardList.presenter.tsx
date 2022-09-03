import * as s from "./boardList.styles";

export default function BoardListUI() {
  return (
    <s.Wrapper>
      <s.CategoryWrapper>
        <s.CategoryItem>ALL</s.CategoryItem>
        <s.CategoryItem>FASHION</s.CategoryItem>
        <s.CategoryItem>ACC</s.CategoryItem>
        <s.CategoryItem>DIGITAL</s.CategoryItem>
        <s.CategoryItem>FOOD</s.CategoryItem>
        <s.CategoryItem>TOY</s.CategoryItem>
      </s.CategoryWrapper>

      <s.DivideLine1 />

      <s.FilterWrapper>
        <select name="basicFilter">
          <option selected>기본순</option>
          <option>최신순</option>
          <option>인기순</option>
        </select>
        <select name="regionFilter">
          <option selected disabled>
            지역
          </option>
          <option>서울</option>
          <option>경기도</option>
        </select>
        <s.SearchBarWrapper>
          <s.SearchIcon src="/boardList/Search.png" />
          <s.SearchInput />
        </s.SearchBarWrapper>
      </s.FilterWrapper>

      <s.ProductWrapper>
        <s.ProductInnerWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Nike.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region1>서울</s.Region1>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Chanel.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region2>부산</s.Region2>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Umu.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region3>제주</s.Region3>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Rolex.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region4>천안</s.Region4>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
        </s.ProductInnerWrapper>

        <s.ProductInnerWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Nike.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region1>서울</s.Region1>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Chanel.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region2>부산</s.Region2>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Umu.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region3>제주</s.Region3>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Rolex.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region4>천안</s.Region4>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
        </s.ProductInnerWrapper>

        <s.ProductInnerWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Nike.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region1>서울</s.Region1>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Chanel.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region2>부산</s.Region2>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Umu.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region3>제주</s.Region3>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Rolex.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region4>천안</s.Region4>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
        </s.ProductInnerWrapper>

        <s.ProductInnerWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Nike.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region1>서울</s.Region1>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Chanel.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region2>부산</s.Region2>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Umu.png" />
              <s.DateWrapper1>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper1>
              <s.PickIconWhite src="/boardList/Bookmark(white).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region3>제주</s.Region3>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
          <s.ProductInfoWrapper>
            <s.ImageWrapper>
              <s.ProductImage src="/boardList/Rolex.png" />
              <s.DateWrapper2>
                <s.Month>9</s.Month>
                <s.DivideLine2 />
                <s.Day>16</s.Day>
              </s.DateWrapper2>
              <s.PickIconWhite src="/boardList/Bookmark(black).png" />
            </s.ImageWrapper>
            <s.UpperInfoWrapper>
              <s.Brand>Nike</s.Brand>
              <s.Region4>천안</s.Region4>
            </s.UpperInfoWrapper>
            <s.Name>오픈런 한정판 나이키 덩크</s.Name>
            <s.Contents>
              (세부내용...) 갤러리아 나이키 오픈런 성공경험 있는 분 원합니다.
            </s.Contents>
            <s.Writer>abc1234</s.Writer>
            <s.Price>10,000원</s.Price>
          </s.ProductInfoWrapper>
        </s.ProductInnerWrapper>
      </s.ProductWrapper>
    </s.Wrapper>
  );
}
