import { Component, OnInit, Input } from '@angular/core';
import { Album } from './models/album.interface';
import { Store } from '@ngrx/store';
import { AlbumSelector } from '../store/selectors';
import { AlbumActions } from '../store/actions';
import { AppState } from '../store/reducers';

@Component({
  selector: 'albums-component',
  styleUrls: ['./albums.component.scss'],
  templateUrl: 'albums.component.html',
})
export class AlbumsComponent implements OnInit {
  albums: any;
  albums$ = this.store.select(AlbumSelector.getAlbums);
  loading$ = this.store.select(AlbumSelector.getLoading);
  constructor(private store: Store<AppState>) {}

  @Input() items: Album[] = [];

  ngOnInit() {
    this.store.dispatch(AlbumActions.getAlbums());
    this.albums$.subscribe((a) => (this.albums = a));
  }

  remove(albumId: any): void {
    this.store.dispatch(AlbumActions.deleteAlbum({ albumId }));
    console.log({ albumId });
    //this.albumsService.removeAlbum(album.id).subscribe();
  }

  increment() {
    //this.loading$.subscribe((a) => console.log(a));
  }
}
