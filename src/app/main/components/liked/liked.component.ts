import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../../shared/services/youtube-api.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

  public maxResult: string = '15';
  public myLiked: Array<any> = [];
  public showIframe: boolean = false;
  public selectedItem: any;
  public nextPageToken: string;
  public showMoreVideoBtn: boolean = false;

  constructor(
    private youtubeApiService: YoutubeApiService
  ) { }

  ngOnInit() {
    this.getMyLikedVideos(this.maxResult);
  }

  public getMyLikedVideos(maxResult, pageToken?): any {
    this.youtubeApiService.getUserLikedVideos(maxResult, pageToken).subscribe(
      (response: any) => {
        this.myLiked = this.myLiked.concat(response.items);
        this.showMoreVideoBtn = true;
        this.nextPageToken = response.nextPageToken && this.nextPageToken !== response.nextPageToken
                           ? response.nextPageToken
                           : this.showMoreVideoBtn = false;
      },
      (error: any) => {
        return error;
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
