import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/albums/models/album.interface';

export const getAlbums = createAction('[Albums] Init Albums load');

export const getAlbumsSuccess = createAction(
  '[Albums] Albums Init Success',
  props<{ apiResponseAlbums: Album[] }>()
);

export const createAlbum = createAction(
  '[Album] Create Album',
  props<{ albumDraft: Album }>()
);

export const createAlbumSuccess = createAction(
  '[Album] Create Album Success',
  props<{ album: Album }>()
);

export const updateAlbum = createAction(
  '[Album] Update Album',
  props<{ album: Album }>()
);

export const deleteAlbum = createAction(
  '[Album] Delete Album',
  props<{ albumId: number }>()
);
