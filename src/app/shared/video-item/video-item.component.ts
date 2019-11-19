import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  private selectedVideoItem: any;

  @Input() public item: any;
  @Input() public isIframe: boolean;
  @Output() public getVideoId = new EventEmitter<any>();
  @Output() public sendPlayer = new EventEmitter<any>();

  public youtubePlayer = 'https://www.youtube.com/embed/';

  constructor(
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {}
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

  public getSelectedVideo(item): void {
    if (item.player) {
      this.sendClickedItem(item);
    } else {
      const videoId = item && item.contentDetails && item.contentDetails.upload && item.contentDetails.upload.videoId
                    ? item.contentDetails.upload.videoId
                    : item.contentDetails.playlistItem.resourceId.videoId;
      this.youtubeApiService.getVideoById(videoId)
        .subscribe(
          (response: any) => {
            this.selectedVideoItem = response.items[0];
            this.getVideoId.emit(this.selectedVideoItem);
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  public sendClickedItem(player): void {
    this.sendPlayer.emit(player);
  }

  public sanitizedUrl(id): SafeResourceUrl|string {
    const url = `https://www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
