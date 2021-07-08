import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from './albums/models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const albums = [
      {
        id: 1,
        title: 'SUMMA',
        artist: 'Sara',
        released: 2018,
      },
      {
        id: 2,
        title: 'Witness',
        artist: 'VOLA',
        released: 2021,
      },
      {
        id: 3,
        title: 'NIRATIAS',
        artist: 'Chevelle',
        released: 2021,
      },
    ];
    return { albums };
  }
  constructor() {}
}
