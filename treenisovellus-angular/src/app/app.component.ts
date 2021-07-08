import { Component } from '@angular/core';
import { Album } from './albums/models/album.interface';
import { Store } from '@ngrx/store';
//import { AppState } from './store/reducers';
import { AlbumActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
