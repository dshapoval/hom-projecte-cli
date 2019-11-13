import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  public config: SwiperConfigInterface;
  public mySubscriptions: Array<any>
  private readonly maxResults: string = '50';
  constructor(
    private youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit() {
    console.log('subs', this.getSubscriptions(0, this.maxResults));
  }
  public getSubscriptions(channelId? , maxResults?): any {
    this.youtubeApiService.getUserSubscriptionsList(channelId , maxResults).subscribe(
      (response: any) => {
        this.mySubscriptions = response.items;
      },
      (error: any) => {
        return error;
      });
  }
}
