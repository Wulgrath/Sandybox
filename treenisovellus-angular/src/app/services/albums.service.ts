import { Injectable } from '@angular/core';
import { Album } from '../albums/models/album.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const ALBUMS_URL: string = 'api/albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getAlbums(): Observable<Album[]> {
    return this.http
      .get<Album[]>(ALBUMS_URL)
      .pipe(catchError(this.handleError<Album[]>('getAlbums', [])));
  }

  getSingleAlbum(album: Album): Observable<any> {
    return this.http.get(`${ALBUMS_URL}/${album.id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    console.log(album);
    return this.http
      .post<Album>(ALBUMS_URL, album, this.httpOptions)
      .pipe(
        tap(
          (newAlbum: Album) =>
            console.log(`Added album with id ${newAlbum.id}`),
          catchError(this.handleError<Album>('createAlbum'))
        )
      );
  }

  updateAlbum(album: Album): Observable<any> {
    return this.http.put(`${ALBUMS_URL}/${album.id}`, album);
  }

  removeAlbum(id: number): Observable<Album> {
    const url = `${ALBUMS_URL}/${id}`;
    return this.http.delete<Album>(url, this.httpOptions).pipe(
      tap((_) => console.log(`Deleted ${id}`)),
      catchError(this.handleError<Album>('removeAlbum'))
    );
  }
}
