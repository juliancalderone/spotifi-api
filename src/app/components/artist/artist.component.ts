import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any [] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracksByArtist(params['id']);
    })
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
    })
  }

  getTopTracksByArtist(id: string) {
    this.spotify.getTopTracksByArtist(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
      }
    )
  }

  
  ngOnInit(): void {
  }

}
