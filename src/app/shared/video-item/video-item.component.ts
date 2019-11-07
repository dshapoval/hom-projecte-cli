import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input() public item: any;
  @Input() public isVideo: boolean;
  // @ViewChild('iframe', { static: false } ) iframe: ElementRef;
  public youtubePlayer = 'https://www.youtube.com/embed/';
  // private videoId: string;
  // public iFrameLink: string;
  constructor(
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer

  ) {
  }

  ngOnInit() {
    console.log(this.item);
    // if (this.isVideo) { this.setIframeLink(); }
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

  public sanitizedUrl(id): SafeResourceUrl|string {
    const url = `https://www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
