import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  newReleases: any [] = [];
  loading = false;
  errorMessage = false;
  errorDetail: string = '';

  constructor(private spotify: SpotifyService) {
  }

  getNewReleases() {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (error) => {
      this.handleError();
      this.errorDetail = error.error.error.message;
    })
  }

  handleError() {
    this.errorMessage = true;
    this.loading = false;
  }

  ngOnInit(): void {
    this.getNewReleases();
  }

}
