import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
} ? U : never;
