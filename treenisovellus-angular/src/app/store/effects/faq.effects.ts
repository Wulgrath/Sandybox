import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { FaqsService } from 'src/app/services/faqs.service';
import { FaqActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class FaqEffects {
  loadFaqs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FaqActions.getFaqs),
      mergeMap(() =>
        this.faqsService.getFaqs().pipe(
          map((faqs: any) => FaqActions.getFaqsSuccess({ payload: faqs })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteFaq$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FaqActions.deleteFaq),
      switchMap(({ faqId }) =>
        this.faqsService.removeFaq(faqId).pipe(
          tap((apiResponse) =>
            console.log(`api response: ${apiResponse.faqId}`)
          ),
          map(({ faqId }) =>
            FaqActions.deleteFaqSuccess({
              faqId,
            })
          )
        )
      )
    )
  );

  createFaq$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FaqActions.createFaq),
      switchMap((faq: any) =>
        this.faqsService.createFaq(faq).pipe(
          map((faq) =>
            FaqActions.createFaqSuccess({
              faq,
            })
          )
        )
      )
    )
  );

  updateFaq$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FaqActions.updateFaq),
      switchMap((faq: any) =>
        this.faqsService.updateFaq(faq).pipe(
          map((updatedFaq) =>
            FaqActions.updateFaqSuccess({
              updatedFaq,
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private faqsService: FaqsService) {}
}
