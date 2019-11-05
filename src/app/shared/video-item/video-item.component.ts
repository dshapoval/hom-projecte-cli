import { Component, Input, OnInit } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input() public item: Array<any>;
  @Input() public isVideo: boolean;
  public youtubePlayer: string = 'https://www.youtube.com/embed/'
  constructor(
    private youtubeApiService: YoutubeApiService,
  ) { }

  ngOnInit() {
    // console.log(this.item);
  }
  public getSubscriptVideo(channelId?: string): any {
    this.youtubeApiService.getVideoByChannelId(channelId)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
