import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

export const SearchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SearchRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule {
}
