import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationsRoutingModule } from './recomendations-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RecommendationsRoutingModule
  ],
  declarations: [RecommendationsComponent],
  exports: [ RecommendationsComponent ]

})
export class RecommendationsModule { }
