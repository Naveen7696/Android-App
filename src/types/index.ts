import * as uiStates from '../constants/uiStates';

export * from './contacts.types';
export * from './store.types';
export * from './popUpMessage.types';

export type ErrorType = {message?: React.ReactNode};
export type ChildrenType = {children?: React.ReactNode};

export type UiStateType = typeof uiStates[keyof typeof uiStates];

export type AsyncComponentType = {
  uiState: UiStateType;
  onSuccess: Function;
  onFailure: Function;
  onProgress: Function;
  error: ErrorType;
};
