import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private youtubeApiService: YoutubeApiService,

  ) { }

  ngOnInit() {
  }

  public getPlaylist(channelId?: string): any {
    this.youtubeApiService.getUserVideos()
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
  public getSubscriptions(channelId?: string): any {
    this.youtubeApiService.getUserSubscriptionsList()
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
