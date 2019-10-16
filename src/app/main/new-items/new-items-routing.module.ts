import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewItemsComponent } from './new-items.component';


export const NewItemsRoutes: Routes = [
  {
    path: '',
    component: NewItemsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(NewItemsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class NewItemsRoutingModule {
}
