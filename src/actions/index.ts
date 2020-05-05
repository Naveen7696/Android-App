import * as constant from '../constants/contacts';
import {ContactTypes} from '../types';

export const getContacts = () => ({
  type: constant.FETCH_CONTACTS,
});

export const storeContact = (contact: ContactTypes) => ({
  type: constant.STORE_CONTACT,
  contact,
});

export const resetState = () => ({
  type: constant.RESET_STATE,
});
