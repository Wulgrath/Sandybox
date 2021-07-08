import { HttpHeaders } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Album } from '../albums/models/album.interface';
import { AlbumsService } from '../services/albums.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { AlbumActions } from '../store/actions';
import { AlbumSelector } from '../store/selectors';

@Component({
  selector: 'add-album',
  styleUrls: ['add-album.component.scss'],
  templateUrl: 'add-album.component.html',
})
export class AddAlbumComponent {
  constructor(
    private albumsService: AlbumsService,
    private store: Store<AppState>
  ) {}
  albums: any;
  albums$ = this.store.select(AlbumSelector.getAlbums);

  titleFormControl = new FormControl('', Validators.required);
  artistFormControl = new FormControl('', Validators.required);
  releasedFormControl = new FormControl('', Validators.required);

  albumForm = new FormGroup({
    title: this.titleFormControl,
    artist: this.artistFormControl,
    released: this.releasedFormControl,
  });

  s4() {
    return Math.floor((1 + Math.random()) * 0x1000);
  }

  /*create(album: Album) {
    this.albumsService.createAlbum(album).subscribe();
  }
*/

  submitAlbum(): void {
    this.albums$.subscribe((a) => (this.albums = a));
    const addedAlbum = this.albumForm.value;

    const existingAlbum = this.albums.find(
      (n: any) => n.title === addedAlbum.title
    );

    if (existingAlbum) {
      const notification = window.confirm(
        'album already exists, update release year?'
      );
      if (notification) {
        this.store.dispatch(AlbumActions.updateAlbum(addedAlbum));
      } else return;
    } else {
      const modifiedAlbum = { ...addedAlbum, id: this.s4() };
      this.store.dispatch(AlbumActions.createAlbum(modifiedAlbum));
    }
  }

  @Output() newItemEvent = new EventEmitter<Album>();
}
