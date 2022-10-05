import * as S from "./liveChat.styles";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function LiveChatUI(props: any) {
  return (
    <S.TalkWrapper onSubmit={props.handleSubmit(props.onSendMessage)}>
      <S.TalkHeader>채팅</S.TalkHeader>
      <S.TalkContents>
        {props.data?.fetchChatLogs.map((el: any) => (
          <div key={uuidv4()}>
            {el.user.id === props.id ? (
              <S.Right>
                <S.Text ref={props.messagesEndRef}>{el.message}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text
                  ref={props.messagesEndRef}
                >{`${el.user.nickName}: ${el.message}`}</S.Text>
              </S.Left>
            )}
          </div>
        ))}
        {props.resultMsg.map((el: any) => (
          <div key={uuidv4()}>
            {el[0] === props.login.fetchLoginUser.nickName ? (
              <S.Right>
                <S.Text ref={props.messagesEndRef}>{el[1]}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text
                  ref={props.messagesEndRef}
                >{`${el[0]}: ${el[1]}`}</S.Text>
              </S.Left>
            )}
          </div>
        ))}
      </S.TalkContents>
      <S.SendWrapper>
        {props.accessToken ? (
          <S.TalkWrite
            onClick={props.onClickCreate}
            placeholder="메세지를 입력해주세요."
            onKeyDown={props.onKeyDown}
            type="text"
            {...props.register("message", { required: true })}
          />
        ) : (
          <S.TalkWrite
            placeholder="로그인 후 채팅이 가능합니다."
            disabled={true}
          />
        )}
        <S.SendBtn type="submit">
          <AiOutlineArrowUp size={22} />
        </S.SendBtn>
      </S.SendWrapper>
    </S.TalkWrapper>
  );
}
