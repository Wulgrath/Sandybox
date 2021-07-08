import { createSelector } from '@ngrx/store';

import { getAlbumState } from '../reducers';

export const getAlbums = createSelector(getAlbumState, (state) =>
  Object.values(state.albums)
);

export const getLoading = createSelector(
  getAlbumState,
  (state) => state.loading
);
