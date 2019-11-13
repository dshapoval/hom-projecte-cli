import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from './video-item.component';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ VideoItemComponent, SafeHtmlPipe ],
  exports: [ VideoItemComponent ]
})
export class VideoItemModule { }
