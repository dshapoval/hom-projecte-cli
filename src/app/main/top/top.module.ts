import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { WatchLaterComponent } from '../watch-later/watch-later.component';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ TopComponent ],
  exports: [ TopComponent ]

})
export class TopModule { }
