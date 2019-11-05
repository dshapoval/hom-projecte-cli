import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions.component';


export const SubscriptionsRoutes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SubscriptionsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class SubscriptionsRoutingModule {
}
