import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { PopularRoutingModule } from './popular-routing.module';
import { VideoItemModule } from '../../shared/video-item/video-item.module';



@NgModule({
  imports: [
    CommonModule,
    PopularRoutingModule,
    VideoItemModule
  ],
  declarations: [ PopularComponent ],
  exports: [ PopularComponent ]
})
export class PopularModule { }
