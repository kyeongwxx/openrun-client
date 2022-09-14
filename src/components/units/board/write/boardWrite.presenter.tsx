import * as s from "./boardWrite.styles";
import Map from "../../../../commons/maps/map.container";
import Calendar from "../../../../commons/calendar";
import MaterialUIPickers from "../../../../commons/timePicker";
import Selector from "../../../../commons/selector";
import Upload from "../../../../commons/uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";
import YupWarningMsg from "../../../../commons/div/yupWarningMsg";

export default function BoardWriteUI(props: any) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickCreate)
      }
    >
      {props.isModalOpen && (
        <s.AddressModal
          open={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <s.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </s.AddressModal>
      )}
      <s.Wrapper>
        <s.ProductInfoWrapper>
          <s.ProductInfoText>오픈런 정보</s.ProductInfoText>
          <s.SelectWrapper>
            <Selector
              title="제품 카테고리"
              sortValue={["FASHION", "ACC", "DIGITAL", "FOOD", "TOY"]}
            />
          </s.SelectWrapper>
          <s.TitleInput
            {...props.register("title")}
            type="text"
            placeholder="행사명을 입력해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
          <YupWarningMsg errormsg={props.formState.errors.title?.message} />
          <s.PriceInput
            {...props.register("price")}
            type="text"
            placeholder="대행 가격을 입력해주세요."
            defaultValue={props.data?.fetchBoard.price}
          />
          <YupWarningMsg errormsg={props.formState.errors.price?.message} />
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
            <Map
              address={
                props.address
                  ? props.address
                  : props.data?.fetchBoard?.location?.address
              }
            ></Map>
            <s.AddressWrapper>
              <s.ZipcodeWrapper>
                <s.Zipcode
                  placeholder="07250"
                  readOnly
                  value={
                    props.zipcode ||
                    props.data?.fetchBoard.location?.zipcode ||
                    ""
                  }
                />
                {props.isPc && (
                  <s.AddressButton
                    type="button"
                    onClick={props.onClickAddressSearch}
                  >
                    우편번호 검색
                  </s.AddressButton>
                )}
                {props.isMobile && (
                  <s.AddressButton
                    type="button"
                    onClick={props.onClickAddressSearch}
                  >
                    우편번호
                  </s.AddressButton>
                )}
              </s.ZipcodeWrapper>
              <s.AddressInput
                readOnly
                value={
                  props.address ||
                  props.data?.fetchBoard.location?.address ||
                  ""
                }
                onChange={props.onChangeAddress}
              />
              <s.AddressDetailInput
                onChange={props.onChangeAddressDetail}
                type="text"
                defaultValue={
                  props.data?.fetchBoard.location?.addressDetail || ""
                }
              />
            </s.AddressWrapper>
          </s.MapWrapper>
        </s.ProductLocationWrapper>
        <s.RequestWrapper>
          <s.RequestText>요청사항</s.RequestText>
          <s.RequestInput
            onChange={props.onChangeContents}
            placeholder="요청사항을 기입해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
          <YupWarningMsg errormsg={props.formState.errors.contents?.message} />
        </s.RequestWrapper>
        <s.ImageUploadWrapper>
          <s.ImageUploadText>이미지 업로드</s.ImageUploadText>
          <s.Images>
            {props.fileUrls &&
              props.fileUrls.map((el: any, index: any) => (
                <Upload
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
          </s.Images>
        </s.ImageUploadWrapper>
        <s.BtnWrapper>
          <s.CreateBtn type="submit">
            {props.isEdit ? "수정" : "등록"}
          </s.CreateBtn>
          <s.MoveBtn
            type="button"
            onClick={
              props.isEdit ? props.onClickMoveToDetail : props.onClickMoveToList
            }
          >
            취소
          </s.MoveBtn>
        </s.BtnWrapper>
      </s.Wrapper>
    </form>
  );
}
