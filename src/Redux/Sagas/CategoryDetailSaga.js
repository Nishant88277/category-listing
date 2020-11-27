import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { CATEGORY_DETAILS } from "../Constants";
import { CategoryDetailsSuccess, CategoryDetailsFailure } from "../Actions/CategoryAction";

function* categoryDetailRequest(actions) {
    try {
        const res = yield axios.get(
          `http://localhost:3002/admin-api/get_category`);
        if (res.status === 200) {
          yield put(CategoryDetailsSuccess(res.data));
        } else yield put(CategoryDetailsFailure(res));
      } catch (e) {
        yield put(CategoryDetailsFailure(e));
      }
}

function* actionWatcher() {
  yield takeLatest(CATEGORY_DETAILS, categoryDetailRequest);
}

export default function* CategoryDetailSaga() {
  yield all([actionWatcher()]);
}
