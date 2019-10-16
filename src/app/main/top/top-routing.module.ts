import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top.component';

export const TopRoutes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(TopRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class TopRoutingModule {
}
