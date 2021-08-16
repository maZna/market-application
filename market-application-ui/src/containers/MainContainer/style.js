import styled from "styled-components";
import { PageButton, PriceTag } from "../../styles";

export const LEFT_SIDE_BAR_WIDTH = 20;
export const LEFT_SIDE_BAR_MARGIN = 5;
export const RIGHT_SIDE_BAR_WIDTH = 20;
export const RIGHT_SIDE_BAR_MARGIN = 5;
export const VALUE_STANDARD = "%";

export const RIGHT_SIDEBAR_DISPLAY_THRESHOLD = "1360px";
export const SMALL_DISPLAY_THRESHOLD = "1000px";
export const MOBILE_THRESHOLD = "660px";

export const NAVBAR_HEIGHT = "50px";
export const BODY_TOP_MARGIN = "80px";
export const MAIN_TOP_MARGIN = "72px";

/**@component */
export const LeftSideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${LEFT_SIDE_BAR_WIDTH + VALUE_STANDARD};
  height: 90%;
  margin-top: ${BODY_TOP_MARGIN};
  margin-left: ${LEFT_SIDE_BAR_MARGIN + VALUE_STANDARD};
  display: inline-block;
  @media (max-width: ${SMALL_DISPLAY_THRESHOLD}) {
    display: none;
  }
`;

/**@component */
export const RightSideBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${RIGHT_SIDE_BAR_WIDTH + VALUE_STANDARD};
  height: 90%;
  margin-right: ${RIGHT_SIDE_BAR_MARGIN + VALUE_STANDARD};
  margin-top: ${BODY_TOP_MARGIN};
  display: inline-block;
  @media (max-width: ${RIGHT_SIDEBAR_DISPLAY_THRESHOLD}) {
    display: none;
  }
`;

export const MAIN_LEFT_MARGIN = LEFT_SIDE_BAR_MARGIN + LEFT_SIDE_BAR_WIDTH + 1;
export const MAIN_RIGHT_MARGIN =
  RIGHT_SIDE_BAR_MARGIN + RIGHT_SIDE_BAR_WIDTH + 1;

/**@component */
export const Main = styled.div`
  margin-top: ${MAIN_TOP_MARGIN};
  margin-left: ${MAIN_LEFT_MARGIN + VALUE_STANDARD};
  margin-right: ${MAIN_RIGHT_MARGIN + VALUE_STANDARD};
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_THRESHOLD}) {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: ${SMALL_DISPLAY_THRESHOLD}) {
    margin: 0;
    margin-top: ${MAIN_TOP_MARGIN};
    display: flex;
    justify-content: center;
  }
`;

/**@component */
export const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  background-color: ${(props) => props.theme.main};
  z-index: 400;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${MOBILE_THRESHOLD}) {
    width: ${MOBILE_THRESHOLD};
  }
`;

/**@component */
export const Total = styled.div`
  background-color: #117594;
  padding: 0;
  margin: 0;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0 10px 0 10px;
  margin-right: ${RIGHT_SIDE_BAR_MARGIN + VALUE_STANDARD};
`;

/**@component */
export const NavPriceTag = styled(PriceTag)`
  color: white;
`;

/**@component */
export const SmallDeviceView = styled.div`
  display: none;
  @media (max-width: ${RIGHT_SIDEBAR_DISPLAY_THRESHOLD}) {
    display: flex;
    justify-content: flex-end;
  }
`;

/**@component */
export const MobileView = styled.div`
  display: none;
  @media (max-width: ${SMALL_DISPLAY_THRESHOLD}) {
    display: flex;
    justify-content: flex-end;
  }
`;

/**@component */
export const FilterButton = styled(PageButton)`
  background-color: ${(props) => props.theme.secondary};
  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;

/**@component */
export const Footer = styled.div`
  color: ${(props) => props.theme.main};
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
