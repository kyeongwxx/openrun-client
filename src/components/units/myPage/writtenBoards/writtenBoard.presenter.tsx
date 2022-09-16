import * as s from "./writtenBoard.styles";
import { v4 as uuidv4 } from "uuid";

import { dateSplit } from "../../../../commons/function/dateSlice";
import { IWrittenBoardsProps } from "../myPage.types";
import { Modal } from "antd";
import ReportInput from "../../../../commons/input/report";
import { Warning } from "@mui/icons-material";

export default function MypageWrittenBoardsUI(props: IWrittenBoardsProps) {
  return (
    <s.Wrapper>
      <s.Button onClick={props.onClickTop}>Top</s.Button>

      <s.ActiveListWrapper>
        <s.ActiveTitle>내가 쓴 글</s.ActiveTitle>
        {props.data?.length === 0 ? (
          <s.NodataImg src="/img/nodata.png" />
        ) : (
          <s.InfiniteScrollLimit id="scroll" ref={props.scrollRef}>
            <s.ActiveBoards
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
            >
              <Modal
                title="신고하기"
                open={props.isModalOpen}
                closable={false}
                onOk={props.onClickSubmitReport}
              >
                <ReportInput />
              </Modal>
              {props.data ? (
                props.data?.map((el) => (
                  <s.ActiveBoard key={uuidv4()}>
                    <s.Status
                      color={
                        el?.status === "모집중"
                          ? "#7DD03C"
                          : el.status === "진행중"
                          ? "#ff9100"
                          : el.status === "신고진행중"
                          ? "#5e5e5e"
                          : "#D03C3C"
                      }
                      border={
                        el?.status === "모집중"
                          ? "#7DD03C"
                          : el.status === "진행중"
                          ? "#ff9100"
                          : el.status === "신고진행중"
                          ? "#5e5e5e"
                          : "#D03C3C"
                      }
                    >
                      {el.status}
                    </s.Status>
                    <s.BoardImg
                      src={
                        el.image
                          ? `https://storage.googleapis.com/openrun-storage/${el.image.url}`
                          : "/img/noimage.png"
                      }
                      onClick={props.onClickMoveToDetail(el.id)}
                    />

                    <s.BoardContents onClick={props.onClickMoveToDetail(el.id)}>
                      <s.BoardContent weight="700" size="1.2rem" color="#333">
                        {el.title}
                      </s.BoardContent>

                      <s.BoardContent
                        weight="400"
                        size="0.8rem"
                        color="#5e5e5e"
                      >
                        {el.price}원
                      </s.BoardContent>
                      <s.BoardContent weight="400" size="0.8rem" color="#333">
                        {dateSplit(el.dueDate)}
                      </s.BoardContent>
                    </s.BoardContents>

                    {el?.status === "진행중" ? (
                      <s.BtnWrapper>
                        <s.ButtonC onClick={props.showModal(el?.id || "")}>
                          <s.Exclamation />
                          <s.Text color="#D44D4D" weight="400">
                            신고하기
                          </s.Text>
                        </s.ButtonC>

                        <s.DivideLine />
                        <s.ButtonC
                          onClick={props.onClickCompleteModal(el?.id || "")}
                        >
                          <s.Check />
                          <s.Text color="#1F8716" weight="400">
                            거래완료
                          </s.Text>
                        </s.ButtonC>
                      </s.BtnWrapper>
                    ) : (
                      <s.BtnWrapper key={uuidv4()}>
                        {el.status === "모집중" ? (
                          <>
                            <s.Runner />
                            {el?.runnerTotal}
                          </>
                        ) : (
                          <></>
                        )}
                      </s.BtnWrapper>
                    )}
                  </s.ActiveBoard>
                ))
              ) : (
                <></>
              )}
            </s.ActiveBoards>
          </s.InfiniteScrollLimit>
        )}
      </s.ActiveListWrapper>
    </s.Wrapper>
  );
}
