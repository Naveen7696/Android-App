import * as constants from '../constants/contacts';
import * as uiState from '../constants/uiStates';
import {ContactsStateTypes, ActionTypes} from '../types';

const initialState: ContactsStateTypes = {
  contacts: [],
  asyncState: uiState.INIT,
  error: {},
};

const contactsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case constants.RESET_STATE:
      return {...initialState};
    case constants.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
        asyncState: uiState.SUCCESS,
      };
    case constants.FETCH_CONTACTS:
      return {...state, asyncState: uiState.IN_PROGRESS};
    case constants.FETCH_CONTACTS_FAILED:
      return {...state, error: action.error, asyncState: uiState.FAILED};
    case constants.STORE_CONTACT:
      return {...state, asyncState: uiState.IN_PROGRESS};
    case constants.STORE_CONTACT_SUCCESS:
      return {...state, asyncState: uiState.SUCCESS};
    case constants.STORE_CONTACT_FAILED:
      return {...state, error: action.error, asyncState: uiState.FAILED};
    default:
      return state;
  }
};

export default contactsReducer;
