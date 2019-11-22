import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular.component';

export const PopularRoutes: Routes = [
  {
    path: '',
    component: PopularComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(PopularRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class PopularRoutingModule {
}
