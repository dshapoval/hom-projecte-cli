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

  constructor(
    private youtubeApiService: YoutubeApiService
  ) { }

  ngOnInit() {
    this.getMyLikedVideos(this.maxResult);
  }

  public getMyLikedVideos(maxResult): any {
    this.youtubeApiService.getUserLikedVideos(maxResult).subscribe(
      (response: any) => {
        this.myLiked = response.items;
        console.log(this.myLiked);
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
