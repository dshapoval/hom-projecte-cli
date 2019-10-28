import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  public config: SwiperConfigInterface;
  constructor(
    private youtubeApiService: YoutubeApiService,

  ) {
    this.config = {
      keyboard: true,
      slidesPerView: 'auto',
      setWrapperSize: true,
      mousewheel: true,
      watchOverflow: true,
      grabCursor: true,
      observer: true,
      observeParents: true,
      slidesPerColumnFill: 'row',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // scrollbar: {
      //   draggable: true,
      //   lockClass: 'swiper-scrollbar-lock',
      //   dragClass: 'swiper-scrollbar-drag',
      // }
    };
  }

  ngOnInit() {
  }
  public test(): void {
    this.youtubeApiService.getUserSubscriptionsList().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      });
  }
}
