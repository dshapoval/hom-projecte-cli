import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelVideoComponent } from './channel-video.component';


export const ChannelRoutes: Routes = [
  {
    path: '',
    component: ChannelVideoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ChannelRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ChannelVideoRoutingModule {
}
