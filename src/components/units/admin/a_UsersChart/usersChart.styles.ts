import styled from "@emotion/styled";
export const Wrapper = styled.main`
  width: 1000px;

  @media (max-width: 767px) {
    width: 500px;
    height: 400px;
  }
  border: 2px solid #555;
  border-left: none;
  border-right: none;
  border-bottom: none;
`;

export const Row = styled.title`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;
export const ColumnHeader = styled.title`
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ColumnBasic = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Scroll = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
