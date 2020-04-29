import { put, takeLatest, all } from 'redux-saga/effects';
import * as constants from "../constants/contacts";
import { getContacts } from "../apis/contacts";

function* fetchContacts() {
  try {
    const contacts = yield getContacts();
    yield put({
      type: constants.FETCH_CONTACTS_SUCCESS,
      contacts: contacts,
    });
  } catch (err) {
    yield put({ type: constants.FETCH_CONTACTS_FAILED, error: err });
  }
}

function* actionWatcher() {
  yield takeLatest(constants.FETCH_CONTACTS , fetchContacts)
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}
