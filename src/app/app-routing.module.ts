import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
  // { path: '',
  //   loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  //   pathMatch: 'full'
  // },
  { path: '', component: MainComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
