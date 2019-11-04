import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { RecentlyViewedRoutingModule } from './recently-viewed-routing.module';
import { VideoItemModule } from '../../shared/video-item/video-item.module';
import { SwiperContainerModule } from '../../shared/swiper-container/swiper-container.module';



@NgModule({
  imports: [
    CommonModule,
    RecentlyViewedRoutingModule,
    VideoItemModule,
    SwiperContainerModule
  ],
  declarations: [ RecentlyViewedComponent ],
  exports: [ RecentlyViewedComponent ]
})
export class RecentlyViewedModule { }
