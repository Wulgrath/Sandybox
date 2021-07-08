import { createAction, props } from '@ngrx/store';

export const getFaqs = createAction('[Faqs] Init Faqs load');

export const getFaqsSuccess = createAction(
  '[Faqs] Faqs Init Success',
  props<{ payload: any[] }>()
);

export const deleteFaq = createAction(
  '[Faqs] Delete Faq',
  props<{ faqId: string }>()
);

export const deleteFaqSuccess = createAction(
  '[Faqs] Delete Faq Success',
  props<{ faqId: string }>()
);

export const createFaq = createAction(
  '[Faqs] Create Faq',
  props<{ faq: any }>()
);

export const createFaqSuccess = createAction(
  '[Faqs] Create Faq Success',
  props<{ faq: any }>()
);

export const updateFaq = createAction(
  '[Faqs] Update Faq',
  props<{ faq: any }>()
);

export const updateFaqSuccess = createAction(
  '[Faqs] Update Faq Success',
  props<{ updatedFaq: any }>()
);
