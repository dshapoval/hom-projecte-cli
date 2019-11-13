import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeApiService } from '../../../shared/services/youtube-api.service';

@Component({
  selector: 'app-channel-video',
  templateUrl: './channel-video.component.html',
  styleUrls: ['./channel-video.component.scss']
})
export class ChannelVideoComponent implements OnInit {

  public channelId: string;
  public maxResult: string = '50';
  public channelVideos: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtubeApiService: YoutubeApiService
  ) {

  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.channelId = this.activatedRoute.params.value.channelId;
    console.log(this.channelId);
    this.getSubscriptVideo(this.channelId, this.maxResult);
  }
  public getSubscriptVideo(channelId, maxResult): any {
    this.youtubeApiService.getVideoByChannelId(channelId, maxResult)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.channelVideos = response.items;
        },
        (error: any) => {
          console.log(error);
        });
  }
}
