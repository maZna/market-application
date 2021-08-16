import { createSelector } from "reselect";
import { initialState } from "./reducer";

const testDataState = (state) => state.testState || initialState;

const makeSelectTestData = () =>
  createSelector(testDataState, (state) => state.data);

const makeSelectTestDataLoading = () =>
  createSelector(testDataState, (state) => state.dataLoading);

const makeSelectTestDataError = () =>
  createSelector(testDataState, (state) => state.dataError);

export {
  makeSelectTestData,
  makeSelectTestDataError,
  makeSelectTestDataLoading,
};
