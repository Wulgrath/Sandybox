import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAlbums from './album.reducer';
import * as fromFaqs from './faq.reducer';

export interface AppState {
  albums: fromAlbums.AlbumState;
  faqs: fromFaqs.FaqState;
}

export const reducers: ActionReducerMap<AppState> = {
  albums: fromAlbums.albumReducer,
  faqs: fromFaqs.faqReducer,
};

export const getAlbumState =
  createFeatureSelector<fromAlbums.AlbumState>('albums');

export const getFaqState = createFeatureSelector<fromFaqs.FaqState>('faqs');
