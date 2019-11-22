import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../../shared/services/youtube-api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  public maxResult: string = '50';
  public popularVideos: Array<any> = [];
  public showIframe: boolean = false;
  public selectedItem: any;
  public nextPageToken: string;
  public isDisabled: boolean = false;


  constructor(
    private youtubeApiService: YoutubeApiService
  ) { }

  ngOnInit() {
    this.getPopularVideos('mostPopular', 'UA', this.maxResult);
  }

  public getPopularVideos(mostPopular, UA, maxResult, nextPageToken?): any {
    this.youtubeApiService.getPopularVideo(mostPopular, UA, maxResult, nextPageToken).subscribe(
      (response: any) => {
        console.log(this.nextPageToken);
        console.log(response.nextPageToken);
        if (response && response.nextPageToken !== this.nextPageToken) {
          this.popularVideos = this.popularVideos.concat(response.items);
          this.nextPageToken = response.nextPageToken;
        } else {
          this.isDisabled = true;
        }
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
