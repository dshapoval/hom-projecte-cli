import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailersComponent } from './trailers.component';

export const TrailersRoutes: Routes = [
  {
    path: '',
    component: TrailersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(TrailersRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class TrailersRoutingModule {
}
