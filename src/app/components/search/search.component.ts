import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any [] = [];
  loading: boolean = false;
  idArtist: string = '';

  constructor(private spotify: SpotifyService, private router: Router) { }

  ngOnInit(): void {
  }

  searchByArtist(artist: string) {
    this.loading = true;
    this.spotify.getArtists(artist).subscribe(data => {
      this.artists = data;
      this.loading = false;
    })
  }

  getArtistDetail(artist: any) {
    this.idArtist = artist.id;
    this.router.navigate(['/artist', this.idArtist])
  }
  

}
