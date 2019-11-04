import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  public config: SwiperConfigInterface;
  public mySubscriptions: Array<any>
  constructor(
    private youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit() {
    console.log('this.mySubscriptions', this.getSubscriptions());
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
}
