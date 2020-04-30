import {ErrorType, UiStateType} from './index';

export interface ContactsStateTypes {
  contacts: Array<ContactTypes>;
  asyncState: UiStateType;
  error: ErrorType;
}

export type ActionTypes = {
  type: string;
  contacts: Array<ContactTypes>;
  error: ErrorType;
};

export interface ContactTypes {
  name: string;
  email: string;
  mobileNumber: Number;
}

export type ContactProps = {
  contact: ContactTypes;
};
