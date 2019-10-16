import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentlyViewedComponent } from './recently-viewed.component';


export const RecentlyViewedRoutes: Routes = [
  {
    path: '',
    component: RecentlyViewedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(RecentlyViewedRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecentlyViewedRoutingModule {
}
