import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from './video-item.component';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ VideoItemComponent ],
  exports: [ VideoItemComponent ]
})
export class VideoItemModule { }
