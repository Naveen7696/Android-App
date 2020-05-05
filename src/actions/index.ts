import * as constant from '../constants/contacts';

export const getContacts = () => ({
  type: constant.FETCH_CONTACTS,
});

export const storeContact = (contact: any) => ({
  type: constant.STORE_CONTACT,
  contact
})