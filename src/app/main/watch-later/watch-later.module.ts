import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchLaterComponent } from './watch-later.component';
import { WatchLaterRoutingModule } from './watch-later-routing.module';



@NgModule({
  imports: [ CommonModule, WatchLaterRoutingModule ],
  declarations: [ WatchLaterComponent ],
  exports: [ WatchLaterComponent ]
})
export class WatchLaterModule { }
