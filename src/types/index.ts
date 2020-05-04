import * as uiState from '../constants/uiStates';

export * from './contacts.types';
export * from './store.types';

export type ErrorType = {message?: React.ReactNode};
export type ChildrenType = {children?: React.ReactNode};

export type UiStateType = typeof uiState[keyof typeof uiState]; 

export type AsyncComponentType = {
  uiState: UiStateType;
  onSuccess: Function;
  onFailure: Function;
  onProgress: Function;
  error: ErrorType;
};
