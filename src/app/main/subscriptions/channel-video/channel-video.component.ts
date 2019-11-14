import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeApiService } from '../../../shared/services/youtube-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-channel-video',
  templateUrl: './channel-video.component.html',
  styleUrls: ['./channel-video.component.scss']
})
export class ChannelVideoComponent implements OnInit {

  public channelId: string;
  public maxResult: string = '5';
  public channelVideos: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer,

  ) {

  }

  ngOnInit() {
    this.subscribeForRouteParams();
    this.getSubscriptVideo(this.channelId, this.maxResult);
  }
  private subscribeForRouteParams(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.channelId = param.channelId;
    });
  }

  public sanitizedUrl(id): SafeResourceUrl|string {
    console.log(id);
    const url = `//www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public getSubscriptVideo(channelId, maxResult): any {
    this.youtubeApiService.getVideoByChannelId(channelId, maxResult)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.channelVideos = response.items;
          console.log(this.channelVideos);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
