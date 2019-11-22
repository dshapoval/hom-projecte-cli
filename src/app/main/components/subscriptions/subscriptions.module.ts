import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SwiperContainerModule } from '../../../shared/components/swiper-container/swiper-container.module';
import { ChannelItemModule } from '../../../shared/components/channel-item/channel-item.module';



@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    ChannelItemModule,
    SwiperContainerModule,

  ],
  declarations: [ SubscriptionsComponent ],
  exports: [ SubscriptionsComponent ]
})
export class SubscriptionsModule { }
