import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchLaterComponent } from './watch-later.component';

export const WatchLaterRoutes: Routes = [
  {
    path: '',
    component: WatchLaterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(WatchLaterRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class WatchLaterRoutingModule {
}
