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
        'Bearer BQDTny3akSieB4miSRIMtISPyrqFteuu8wwsgHsXI66rbxMoAyDL770l_KI8JrLlOt69UO1ta2Yo4vj4u1k',
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
