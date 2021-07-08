import { createAction } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action);
};
