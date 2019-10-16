import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { WatchLaterComponent } from '../watch-later/watch-later.component';
import { RecentlyViewedRoutingModule } from './recently-viewed-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RecentlyViewedRoutingModule,
  ],
  declarations: [ RecentlyViewedComponent ],
  exports: [ RecentlyViewedComponent ]

})
export class RecentlyViewedModule { }
