import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public config: SwiperConfigInterface;
  public mySubscriptions: Array<any>;
  public myLiked: Array<any>;
  constructor(
    private youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit() {
    console.log('this.mySubscriptions', this.getSubscriptions());
    console.log('this.getMyLikedVideos', this.getMyLikedVideos());
  }
  public getSubscriptions(): any {
    this.youtubeApiService.getUserSubscriptionsList().subscribe(
      (response: any) => {
        this.mySubscriptions = response.items;
      },
      (error: any) => {
        return error;
      });
  }
  public getMyLikedVideos(): any {
    this.youtubeApiService.getUserLikedVideos().subscribe(
      (response: any) => {
        this.myLiked = response.items;
      },
      (error: any) => {
        return error;
      });
  }
}
