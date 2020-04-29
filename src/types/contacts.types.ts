import { ErrorType, UiStateType } from "./index";

export interface ContactsStateTypes {
  contacts: Array<Contact>;
  asyncState: UiStateType;
  error: ErrorType;
}

export type ActionTypes = {
  type: string;
  contacts: Array<Contact>;
  error: ErrorType;
};

export interface Contact {
  name: string;
  email: string;
  mobileNumber: Number;
}

export type ContactProps = {
  contact: Contact;
}