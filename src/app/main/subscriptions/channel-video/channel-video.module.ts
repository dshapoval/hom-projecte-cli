import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelVideoComponent } from './channel-video.component';
import { ChannelVideoRoutingModule } from './channel-video-routing.module';
import { VideoItemModule } from '../../../shared/video-item/video-item.module';



@NgModule({
  imports: [CommonModule, ChannelVideoRoutingModule, VideoItemModule],
  declarations: [ ChannelVideoComponent ],
  exports: [ ChannelVideoComponent ]
})
export class ChannelVideoModule { }
