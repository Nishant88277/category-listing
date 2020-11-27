import { all } from "redux-saga/effects";

import CategoryDetailSaga from "./Redux/Sagas/CategoryDetailSaga";

export default function* rootSaga(getState) {
    yield all([CategoryDetailSaga()]);
}
