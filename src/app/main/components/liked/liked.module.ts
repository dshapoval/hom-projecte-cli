import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedComponent } from './liked.component';
import { LikedRoutingModule } from './liked-routing.module';
import { VideoItemModule } from '../../../shared/components/video-item/video-item.module';



@NgModule({
  imports: [
    CommonModule,
    LikedRoutingModule,
    VideoItemModule
  ],
  declarations: [
    LikedComponent,
  ],
  exports: [
    LikedComponent,
  ]
})
export class LikedModule { }
