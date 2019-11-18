import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { UserService } from '../../shared/services/user.service';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public config: SwiperConfigInterface;
  public mySubscriptions: Array<any>;
  public myLiked: Array<any>;
  public popular: Array<any>;
  constructor(
    private youtubeApiService: YoutubeApiService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getSubscriptions();
    this.getMyLikedVideos();
    this.getPopularVideos('mostPopular', 'UA');
  }

  public getSubscriptions(): any {
    this.youtubeApiService.getUserSubscriptionsList().subscribe(
      (response: any) => {
        this.mySubscriptions = response.items;
      },
      (error: any) => {
       this.userService.isAuth$.next(false);
       localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
       this.userService.isUserSignedIn();
      });
  }

  public getMyLikedVideos(): any {
    this.youtubeApiService.getUserLikedVideos().subscribe(
      (response: any) => {
        this.myLiked = response.items;
      },
      (error: any) => {
        this.userService.isAuth$.next(false);
        localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
        this.userService.isUserSignedIn();
      });
  }

  public getPopularVideos(mostPopular, UA): any {
    this.youtubeApiService.getPopularVideo(mostPopular, UA).subscribe(
      (response: any) => {
        this.popular = response.items;
        console.log(response.items);
      },
      (error: any) => {
        this.userService.isAuth$.next(false);
        localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
        this.userService.isUserSignedIn();
      });
  }

  public singOut(): void {
    this.userService.signOut();
  }
}
