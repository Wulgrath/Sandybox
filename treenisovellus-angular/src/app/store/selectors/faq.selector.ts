import { createSelector } from '@ngrx/store';
import { getFaqState } from '../reducers';

export const getFaqs = createSelector(getFaqState, (state) =>
  Object.values(state.faqs)
);
