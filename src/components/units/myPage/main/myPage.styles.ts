import styled from "@emotion/styled";
import { Container } from "@mui/system";
import InfiniteScroll from "react-infinite-scroller";
import { BOX_BG_COLOR, BOX_SHADOW_TOP } from "../../../../commons/cssConst";
import WallpaperIcon from "@mui/icons-material/Wallpaper";

export const Wrapper = styled.main`
  width: 100%;
  margin: auto;
`;

export const Button = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  position: fixed;
  border-radius: 50%;
  z-index: 90;
  bottom: 100px;
  right: 25px;
  box-shadow: ${BOX_SHADOW_TOP};
  text-align: center;
  line-height: 60px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
`;
export const Text = styled.div<{ size: string; color: string; weight: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;
export const UserInfoEdit = styled.button`
  width: 86px;
  height: 22px;
  border-radius: 24px;
  border: 1px solid #333;
  background-color: transparent;
  text-align: center;
  font-size: 0.7rem;
  color: #333;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 65px;
    font-size: 0.3rem;
  }
`;

export const DivideLine = styled.div`
  width: 1px;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const DivideLineHorizontal = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};
`;

export const MenuWrapper = styled.section`
  width: 100%;
  height: 156px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menus = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
`;

export const ActiveListWrapper = styled(Container)`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 200px;
  }
`;

export const ActiveTitle = styled.div`
  cursor: pointer;
  margin-top: 5px;
  font-weight: 700;
  color: #333;
`;

export const InfiniteScrollLimit = styled.div`
  overflow-x: auto;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ActiveWrapper = styled(InfiniteScroll)`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ActiveContent = styled.div<{ height: string }>`
  width: 100px;
  height: ${(props) => props.height};
  margin: 1%;
  border-radius: 24px;
  background-color: ${BOX_BG_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 190px;
    height: 170px;
  }
`;

export const ActiveImg = styled.img`
  width: 60%;
  height: 40%;
  /* object-fit: cover;
  background-color: aliceblue; */
`;

export const NoImg = styled(WallpaperIcon)`
  color: #8b8c89;
  width: 50%;
  height: 40%;
`;

export const ActiveText = styled.div<{
  color: string;
  weight: string;
  size: string;
}>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`;
