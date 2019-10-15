import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { WatchLaterComponent } from '../watch-later/watch-later.component';



@NgModule({
  imports: [ CommonModule ],
  declarations: [RecommendationsComponent],
  exports: [ RecommendationsComponent ]

})
export class RecommendationsModule { }
