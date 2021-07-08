import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { FaqActions } from '../actions';

export interface FaqState {
  faqs: { [id: string]: any };
}

export const initialState: FaqState = {
  faqs: {},
};

const _faqReducer = createReducer(
  initialState,

  on(FaqActions.getFaqs, (state) => ({
    ...state,
  })),

  on(FaqActions.getFaqsSuccess, (state, { payload }) => {
    const faqs = payload.reduce(
      (payloadEntities: { [id: string]: any }, item: any) => ({
        ...payloadEntities,
        [item.id]: item,
      }),
      {}
    );
    return {
      ...state,
      faqs,
    };
  }),

  on(FaqActions.deleteFaqSuccess, (state, { faqId }) => {
    const faqs = {
      ...state.faqs,
    };
    delete faqs[faqId];
    return {
      ...state,
      faqs,
    };
  }),

  on(FaqActions.createFaqSuccess, (state, { faq }) => ({
    ...state,
    faqs: {
      ...state.faqs,
      [faq.id]: {
        ...faq,
      },
    },
  })),

  on(FaqActions.updateFaqSuccess, (state, { updatedFaq }) => {
    const faqs = {
      ...state.faqs,
    };

    const faqToEdit = faqs[updatedFaq.id];

    return {
      ...state,
      faqs: {
        ...state.faqs,
        [updatedFaq.id]: {
          ...faqToEdit,
          question: updatedFaq.question,
        },
      },
    };
  })
);

export const faqReducer = (state: any, action: Action) => {
  return _faqReducer(state, action);
};
