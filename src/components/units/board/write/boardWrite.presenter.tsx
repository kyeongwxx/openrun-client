import * as s from "./boardWrite.styles";
import Map from "../../../../commons/maps/map.container";
import Calendar from "../../../../commons/calendar";
import MaterialUIPickers from "../../../../commons/timePicker";
import Previews from "../../../../commons/reactDropzone";

export default function BoardWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCreate)}>
      {props.isModalOpen && (
        <s.AddressModal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <s.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </s.AddressModal>
      )}
      <s.Wrapper>
        <s.ProductInfoWrapper>
          <s.ProductInfoText>오픈런 정보</s.ProductInfoText>
          <s.Select name="CategorySelect" defaultValue={"default"}>
            <option value="default" disabled>
              제품 카테고리
            </option>
            <option>FASHION</option>
            <option>ACC</option>
            <option>DIGITAL</option>
            <option>FOOD</option>
            <option>TOY</option>
          </s.Select>
          <s.TitleInput
            {...props.register("title")}
            type="text"
            placeholder="행사명을 입력해주세요."
          />
          <s.PriceInput
            {...props.register("price")}
            type="text"
            placeholder="대행 가격을 입력해주세요."
          />
        </s.ProductInfoWrapper>
        <s.ProductDateWrapper>
          <s.ProductDateText>오픈런 일정</s.ProductDateText>
          <s.CalenderWrapper>
            <Calendar />
            <MaterialUIPickers />
          </s.CalenderWrapper>
        </s.ProductDateWrapper>
        <s.ProductLocationWrapper>
          <s.ProductLocationText>장소</s.ProductLocationText>
          <s.MapWrapper>
            <Map address={props.address}></Map>
            <s.AddressWrapper>
              <s.ZipcodeWrapper>
                <s.Zipcode placeholder="07250" readOnly value={props.zipcode} />
                <s.AddressButton
                  type="button"
                  onClick={props.onClickAddressSearch}
                >
                  우편번호 검색
                </s.AddressButton>
              </s.ZipcodeWrapper>
              <s.AddressInput readOnly value={props.address} />
              <s.AddressDetailInput
                onChange={props.onChangeAddressDetail}
                type="text"
              />
            </s.AddressWrapper>
          </s.MapWrapper>
        </s.ProductLocationWrapper>
        <s.RequestWrapper>
          <s.RequestText>요청사항</s.RequestText>
          <s.RequestInput
            onChange={props.onChangeContents}
            placeholder="요청사항을 기입해주세요."
          />
        </s.RequestWrapper>
        <s.ImageUploadWrapper>
          <s.ImageUploadText>이미지 업로드</s.ImageUploadText>
          <Previews />
        </s.ImageUploadWrapper>
        <s.BtnWrapper>
          <s.CreateBtn type="submit">등록</s.CreateBtn>
          <s.MoveBtn>목록으로</s.MoveBtn>
        </s.BtnWrapper>
      </s.Wrapper>
    </form>
  );
}
