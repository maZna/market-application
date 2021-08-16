import { all } from "redux-saga/effects";
import itemSaga from "../containers/MainContainer/redux/sagas";
import testSaga from "../containers/TestContainer/redux/sagas";

// Collect all sagas in this file as follows
export default function* rootSaga() {
  yield all([itemSaga(), testSaga()]);
}
