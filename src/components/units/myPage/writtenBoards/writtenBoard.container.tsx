import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { selectorValue } from "../../../commons/store";
import MypageWrittenBoardsUI from "./writtenBoard.presenter";
import { FETCH_WRITE_BOARDS } from "./writtenBoard.queries";

export default function MypageWrittenBoards() {
  const [sortValue, setSortValue] = useRecoilState(selectorValue);
  const { data, fetchMore } = useQuery(FETCH_WRITE_BOARDS);
  console.log(data?.fetchWriteBoards);

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchWriteBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchWriteBoards)
          return { fetchWriteBoards: [...prev.fetchWriteBoards] };
        return {
          fetchWriteBoards: [
            ...prev.fetchWriteBoards,
            ...fetchMoreResult?.fetchWriteBoards,
          ],
        };
      },
    });
  };

  return (
    <MypageWrittenBoardsUI
      onFetchMore={onFetchMore}
      data={data?.fetchWriteBoards}
    />
  );
}
