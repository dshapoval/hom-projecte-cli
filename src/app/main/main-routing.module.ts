import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'subscriptions',
        loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule),
      },
      {
        path: 'recommendations',
        loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule),
      },
      {
        path: 'top',
        loadChildren: () => import('./top/top.module').then(m => m.TopModule),
      },
      {
        path: 'trailers',
        loadChildren: () => import('./trailers/trailers.module').then(m => m.TrailersModule),
      },
      {
        path: 'watch-later',
        loadChildren: () => import('./watch-later/watch-later.module').then(m => m.WatchLaterModule),
      }
      ,
      {
        path: 'sign-in',
        loadChildren: () => import('./watch-later/watch-later.module').then(m => m.WatchLaterModule),
      }
      ,
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
