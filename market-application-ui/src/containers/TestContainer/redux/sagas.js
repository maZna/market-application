import request from "../../../utils/request";
import { call, put, takeLatest } from "redux-saga/effects";
import { TEST_ACTION } from "./constants";
import { testActionSuccess, testActionFailure } from "./actions";

export function* testSagaHandler() {
  const reqUrl = "http://localhost:8081/items";
  const options = {
    method: "GET",
  };

  try {
    console.log("Hey!");
    const res = yield call(request, reqUrl, options);
    console.log(res);
    yield put(testActionSuccess(res.data));
  } catch (err) {
    yield put(testActionFailure(err));
  }
}

export default function* testSaga() {
  yield takeLatest(TEST_ACTION, testSagaHandler);
}
