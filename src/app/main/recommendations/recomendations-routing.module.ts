import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './recommendations.component';

export const RecommendationsRoutes: Routes = [
  {
    path: '',
    component: RecommendationsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(RecommendationsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecommendationsRoutingModule {
}
