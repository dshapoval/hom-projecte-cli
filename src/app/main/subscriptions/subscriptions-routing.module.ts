import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions.component';
import { ChannelVideoComponent } from './channel-video/channel-video.component';


export const SubscriptionsRoutes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
  },
  {
    path: 'channel/:name/:channelId',
    // component: ChannelVideoComponent
    loadChildren: () => import('./channel-video/channel-video.module').then(m => m.ChannelVideoModule),
  }
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
