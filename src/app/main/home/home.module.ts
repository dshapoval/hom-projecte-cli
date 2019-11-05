import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { VideoItemModule } from '../../shared/video-item/video-item.module';
import { SwiperContainerModule } from '../../shared/swiper-container/swiper-container.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoItemModule,
    SwiperContainerModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
})

export class HomeModule {}
