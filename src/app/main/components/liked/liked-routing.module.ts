import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './liked.component';


export const LikedRoutes: Routes = [
  {
    path: '',
    component: LikedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(LikedRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class LikedRoutingModule {
}
