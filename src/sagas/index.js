import {put, call, takeLatest, all} from 'redux-saga/effects';
import * as constants from '../constants/contacts';
import {getContacts} from '../apis/contacts';
import AsyncStorage from '@react-native-community/async-storage';

const addContacts = (contacts) => AsyncStorage.setItem('@contacts', contacts);

function* storeContact(action) {
  try {
    const storedContacts = yield call(AsyncStorage.getItem, '@contacts');
    if (storedContacts !== null) {
      const parsedContacts = JSON.parse(storedContacts);

      const contactsString = JSON.stringify({
        contacts: [...parsedContacts.contacts, action.contact],
      });

      yield call(addContacts, contactsString);
    } else {
      const contactsString = JSON.stringify({
        contacts: [action.contact],
      });
      yield call(addContacts, contactsString);
    }
    yield put({type: constants.STORE_CONTACT_SUCCESS});
  } catch (err) {
    console.log(err);
    yield put({type: constants.STORE_CONTACT_FAILED, error: err});
  }
}

function* fetchContacts() {
  try {
    //const contacts = yield getContacts();
    const storedContacts = yield call(AsyncStorage.getItem, '@contacts');
    const contacts = storedContacts ? JSON.parse(storedContacts).contacts : [];
    yield put({
      type: constants.FETCH_CONTACTS_SUCCESS,
      contacts: contacts,
    });
  } catch (err) {
    yield put({type: constants.FETCH_CONTACTS_FAILED, error: err});
  }
}

function* actionWatcher() {
  yield takeLatest(constants.FETCH_CONTACTS, fetchContacts);
  yield takeLatest(constants.STORE_CONTACT, storeContact);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
