import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { WatchLaterComponent } from '../watch-later/watch-later.component';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ RecentlyViewedComponent ],
  exports: [ RecentlyViewedComponent ]

})
export class RecentlyViewedModule { }
