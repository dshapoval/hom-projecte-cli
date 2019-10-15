import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TrailersComponent } from './trailers/trailers.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'new-items',
        loadChildren: () => import('./new-items/new-items.module').then(m => m.NewItemsModule),
      },
      {
        path: 'recently-viewed',
        loadChildren: () => import('./recently-viewed/recently-viewed.module').then(m => m.RecentlyViewedModule),
      },
      {
        path: 'recomendations',
        loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule),
      },
      {
        path: 'trailers',
        // component: TrailersComponent
        loadChildren: () => import('./trailers/trailers.module').then(m => m.TrailersModule),
      },
      {
        path: 'watch-later',
        component: WatchLaterComponent
        // loadChildren: () => import('./watch-later/watch-later.module').then(m => m.WatchLaterModule),
      },
      {
        path: '',
        component: TrailersComponent,
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
