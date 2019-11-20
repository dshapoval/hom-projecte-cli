import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeApiService } from '../../../shared/services/youtube-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-channel-video',
  templateUrl: './channel-video.component.html',
  styleUrls: ['./channel-video.component.scss'],
})
export class ChannelVideoComponent implements OnInit {

  public channelId: string;
  public maxResult: string = '15';
  public channelVideos: Array<any> = [];
  public nextPageToken: string;
  public selectedItem: any;
  public showIframe: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    this.subscribeForRouteParams();
    this.getSubscriptVideo(this.channelId, this.maxResult, 0);
  }

  private subscribeForRouteParams(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.channelId = param.channelId;
    });
  }

  public sanitizedUrl(id): SafeResourceUrl|string {
    const url = `//www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public getSubscriptVideo(channelId, maxResult, pageToken): any {
    this.youtubeApiService.getVideoByChannelId(channelId, maxResult, pageToken)
      .subscribe(
        (response: any) => {
          this.channelVideos = this.channelVideos.concat(response.items);
          this.nextPageToken = response.nextPageToken;
        },
        (error: any) => {
          console.log(error);
        });
  }
  public receiveVideoItem(e): void {
    this.selectedItem = e;
    this.showIframe = true;
  }

  public closeIframe(): void {
    this.showIframe = false;
  }

}
