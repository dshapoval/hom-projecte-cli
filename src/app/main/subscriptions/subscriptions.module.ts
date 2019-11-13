import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { VideoItemModule } from '../../shared/video-item/video-item.module';
import { SwiperContainerModule } from '../../shared/swiper-container/swiper-container.module';



@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    VideoItemModule,
    SwiperContainerModule,

  ],
  declarations: [ SubscriptionsComponent ],
  exports: [ SubscriptionsComponent ]
})
export class SubscriptionsModule { }
