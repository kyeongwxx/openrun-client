import { useRecoilState } from "recoil";
import { selectorState } from "../../../commons/store";
import MypageWrittenBoardsUI from "./writtenBoard.presenter";

export default function MypageWrittenBoards() {
  const [sortValue, setSortValue] = useRecoilState(selectorState);
  return <MypageWrittenBoardsUI />;
}
