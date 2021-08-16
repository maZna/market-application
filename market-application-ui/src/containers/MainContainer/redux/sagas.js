import request from "../../../utils/request";
import { call, put, takeLatest } from "redux-saga/effects";
import { LOAD_ITEMS, LOAD_COMPANIES, LOAD_TAGS } from "./constants";
import {
  loadItemsSuccess,
  loadItemsFailure,
  loadCompaniesFailure,
  loadCompaniesSuccess,
  loadTagsSuccess,
  loadTagsFailure,
} from "./actions";

export function* itemSagaHandler(params) {
  let reqUrl = `${process.env.REACT_APP_JSON_SERVER_URL}/items?_limit=16&_page=${params.page}&itemType=${params.itemType}&_sort=${params.sortProperty}&_order=${params.sortDirection}`;

  const options = {
    method: "GET",
  };

  try {
    if (params.brandFilters.length > 0) {
      for (let brand of params.brandFilters)
        reqUrl = reqUrl.concat(`&manufacturer=${brand}`);
    }
    if (params.tagFilters.length > 0) {
      for (let tag of params.tagFilters)
        reqUrl = reqUrl.concat(`&tags_like=${tag}`);
    }
    let pageCount = "1";
    const res = yield call(request, reqUrl, options);
    if (res.headers.link) {
      const links = res.headers.link.split(",");
      const lastLink = links
        .filter((e) => e.includes("last"))[0]
        .match(/<(.*?)>/)[1];
      const linkParams = new URLSearchParams(lastLink);
      pageCount = Object.fromEntries(linkParams.entries())._page;
    }
    yield put(loadItemsSuccess(res.data, Number(pageCount)));
  } catch (err) {
    yield put(loadItemsFailure(err));
  }
}

export function* companySagaHandler() {
  const reqUrl = `${process.env.REACT_APP_JSON_SERVER_URL}/company/amounts`;
  const options = {
    method: "GET",
  };
  try {
    const res = yield call(request, reqUrl, options);
    yield put(loadCompaniesSuccess(res.data));
  } catch (err) {
    yield put(loadCompaniesFailure(err));
  }
}

export function* tagSagaHandler() {
  const reqUrl = `${process.env.REACT_APP_JSON_SERVER_URL}/tags`;
  const options = {
    method: "GET",
  };
  try {
    const res = yield call(request, reqUrl, options);
    yield put(loadTagsSuccess(res.data));
  } catch (err) {
    yield put(loadTagsFailure(err));
  }
}

export default function* itemSaga() {
  yield takeLatest(LOAD_ITEMS, itemSagaHandler);
  yield takeLatest(LOAD_COMPANIES, companySagaHandler);
  yield takeLatest(LOAD_TAGS, tagSagaHandler);
}
