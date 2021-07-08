import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { AlbumsComponent } from 'src/app/albums/albums.component';
import { Album } from 'src/app/albums/models/album.interface';
import { AlbumActions } from '../actions';

export interface AlbumState {
  albums: Album[];
  loading: boolean;
}

export const initialState: AlbumState = {
  albums: [],
  loading: false,
};

const _albumReducer = createReducer(
  initialState,

  on(AlbumActions.getAlbums, (state) => ({
    ...state,
    loading: true,
  })),

  on(AlbumActions.getAlbumsSuccess, (state, { apiResponseAlbums }) => ({
    ...state,
    albums: apiResponseAlbums,
    loading: false,
  })),
  on(AlbumActions.createAlbumSuccess, (state, { album }) => ({
    ...state,
    albums: [...state.albums, album],
  })),
  on(AlbumActions.updateAlbum, (state, { album }) => {
    const albums = state.albums;
    const albumToUpdate = albums.find((n) => n.id === album.id);

    return {
      ...state,
    };
  }),
  on(AlbumActions.deleteAlbum, (state, { albumId }) => ({
    ...state,
    albums: state.albums.filter((n) => n.id !== albumId),
  }))
);

export const albumReducer = (state: any, action: Action) => {
  return _albumReducer(state, action);
};
