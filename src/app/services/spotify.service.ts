import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB0uIzSP9w8S8NKA5FU-wS5TEj_GCdXlNUwr5rVYn3nnKdWbhoNA9ykGufUo8WNSZSfWo1YwsX2Tz33Ui4',
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=10`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`).pipe(map((data: any) => data));
  }

  getTopTracksByArtist(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=AR`).pipe(
      map((data: any) => data['tracks'])
    );
  }
}
