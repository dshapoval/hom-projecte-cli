import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperContainerComponent } from './swiper-container.component';



@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [
    SwiperContainerComponent
  ],
  exports: [
    SwiperContainerComponent
  ]
})
export class SwiperContainerModule { }
