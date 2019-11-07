import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from './video-item.component';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ VideoItemComponent, SafeHtmlPipe ],
  exports: [ VideoItemComponent ]
})
export class VideoItemModule { }
