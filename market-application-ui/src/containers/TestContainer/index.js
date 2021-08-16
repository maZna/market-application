import React, { memo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectTestData,
  makeSelectTestDataError,
  makeSelectTestDataLoading,
} from "./redux/selectors";
import logos from "../../resources/img/img";
import Card from "../../components/Card";
import { testAction } from "./redux/actions";

const LEFT_SIDE_BAR_WIDTH = 20;
const LEFT_SIDE_BAR_MARGIN = 5;
const RIGHT_SIDE_BAR_WIDTH = 20;
const RIGHT_SIDE_BAR_MARGIN = 5;
const MOBILE_THRESHOLD = "1000px";
const VALUE_STANDARD = "%";

const NAVBAR_HEIGHT = "50px";
const BODY_TOP_MARGIN = "80px";

const LeftSideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${LEFT_SIDE_BAR_WIDTH + VALUE_STANDARD};
  height: 90%;
  margin-top: ${BODY_TOP_MARGIN};
  margin-left: ${LEFT_SIDE_BAR_MARGIN + VALUE_STANDARD};
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_THRESHOLD}) {
    display: none;
  }
`;

const RightSideBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${RIGHT_SIDE_BAR_WIDTH + VALUE_STANDARD};
  height: 90%;
  margin-right: ${RIGHT_SIDE_BAR_MARGIN + VALUE_STANDARD};
  margin-top: ${BODY_TOP_MARGIN};
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_THRESHOLD}) {
    display: none;
  }
`;

const MAIN_LEFT_MARGIN = LEFT_SIDE_BAR_MARGIN + LEFT_SIDE_BAR_WIDTH;
const MAIN_RIGHT_MARGIN = RIGHT_SIDE_BAR_MARGIN + RIGHT_SIDE_BAR_WIDTH;

const Main = styled.div`
  margin-top: ${BODY_TOP_MARGIN};
  margin-left: ${MAIN_LEFT_MARGIN + VALUE_STANDARD};
  margin-right: ${MAIN_RIGHT_MARGIN + VALUE_STANDARD};
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_THRESHOLD}) {
    margin-top: 100px;
    margin-right: 0;
    margin-left: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: bisque;
  }
`;

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  background-color: #1fa4ce;
  z-index: 999;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.div`
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

function TestContainer({ dispatch, data, loading, error }) {
  return (
    <>
      {/* <div className={classes.NavBar}>Market</div>
      <div className={classes.LeftSideBar}>Left Side Bar</div>
      <div className={classes.Main}>Main</div>
      <div className={classes.RightSideBar}>Right Side Bar</div> */}
      {/* <NavBar>
        <img src={logos.marketLogo} alt="market logo" width="100px" />
        <Total>
          <img src={logos.lock} alt="lock" width="20px" height="20px" />
          &nbsp;&nbsp; ₺&nbsp;200
        </Total>
      </NavBar>
      <LeftSideBar>
        <Card>
          <strong>Test</strong>
          <CheckBox />
        </Card>
      </LeftSideBar>
      <Main>
        {Array.from({ length: 10 }).map((e) => (
          <>Content{<br />}</>
        ))}
      </Main>
      <RightSideBar>Right Side Bar</RightSideBar> */}
      <button onClick={() => dispatch(testAction())}>Click me!</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  data: makeSelectTestData(),
  loading: makeSelectTestDataLoading(),
  error: makeSelectTestDataError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(memo, withConnect)(TestContainer);
