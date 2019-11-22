import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { VideoItemModule } from '../../../shared/components/video-item/video-item.module';
import { SwiperContainerModule } from '../../../shared/components/swiper-container/swiper-container.module';
import { ChannelItemModule } from '../../../shared/components/channel-item/channel-item.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoItemModule,
    SwiperContainerModule,
    ChannelItemModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
})

export class HomeModule {}
