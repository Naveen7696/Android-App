import * as constant from '../constants/contacts';

export const getContacts = () => ({
  type: constant.FETCH_CONTACTS,
});
