import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AlbumsService } from 'src/app/services/albums.service';
import { AlbumActions } from '../actions';
import { Album } from 'src/app/albums/models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumEffects {
  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.getAlbums),
      mergeMap(() =>
        this.albumsService.getAlbums().pipe(
          map((albums) => ({
            type: '[Albums] Albums Init Success',
            payload: albums,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.createAlbum),
      switchMap((albumDraft: any) =>
        this.albumsService.createAlbum(albumDraft).pipe(
          map((album) =>
            AlbumActions.createAlbumSuccess({
              album,
            })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService
  ) {}
}
