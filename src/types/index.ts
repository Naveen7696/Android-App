export * from './contacts.types';
export * from './store.types';

export type ErrorType = {message?: React.ReactNode};
export type ChildrenType = {children?: React.ReactNode};

export type UiStateType = 'INIT' | 'IN_PROGRESS' | 'FAILED' | 'SUCCESS';

export type AsyncComponentType = {
  uiState: UiStateType;
  onSuccess: Function;
  onFailure: Function;
  onProgress: Function;
  error: ErrorType;
};
