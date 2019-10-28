import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { WatchLaterComponent } from '../watch-later/watch-later.component';
import { RecentlyViewedRoutingModule } from './recently-viewed-routing.module';
import { VideoItemModule } from '../../shared/video-item/video-item.module';
import { SWIPER_CONFIG, SwiperModule } from 'ngx-swiper-wrapper';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';



@NgModule({
  imports: [
    CommonModule,
    RecentlyViewedRoutingModule,
    VideoItemModule,
    SwiperModule
  ],
  declarations: [ RecentlyViewedComponent ],
  exports: [ RecentlyViewedComponent ],
  providers: [ YoutubeApiService ]
})
export class RecentlyViewedModule { }
