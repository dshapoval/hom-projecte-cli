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
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'subscriptions',
        loadChildren: () => import('./components/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule),
      },
      {
        path: 'liked',
        loadChildren: () => import('./components/liked/liked.module').then(m => m.LikedModule),
      },
      {
        path: 'popular',
        loadChildren: () => import('./components/popular/popular.module').then(m => m.PopularModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule),
      },
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
