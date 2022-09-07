import { useRecoilState } from "recoil";
import { selectorValue } from "../../../commons/store";
import MypageWrittenBoardsUI from "./writtenBoard.presenter";

export default function MypageWrittenBoards() {
  const [sortValue, setSortValue] = useRecoilState(selectorValue);
  return <MypageWrittenBoardsUI />;
}
