import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

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
  public isDisabled: boolean = false;

  constructor(
    private youtubeApiService: YoutubeApiService
  ) { }

  ngOnInit() {
    this.getMyLikedVideos(this.maxResult);
  }

  public getMyLikedVideos(maxResult, pageToken?): any {
    this.youtubeApiService.getUserLikedVideos(maxResult, pageToken).subscribe(
      (response: any) => {
        console.log(response);
        this.myLiked = this.myLiked.concat(response.items);
        console.log(response.nextPageToken);
        this.nextPageToken = response.nextPageToken && this.nextPageToken !== response.nextPageToken ? response.nextPageToken : this.isDisabled = true ;
      },
      (error: any) => {
        return error;
      });
  }

  public receiveVideoItem(e): void {
    console.log(e);
    this.selectedItem = e;
    this.showIframe = true;

  }

  public closeIframe(): void {
    this.showIframe = false;
  }
}
