import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: 'sign-in',
        loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInModule),
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
