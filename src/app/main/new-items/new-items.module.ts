import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemsComponent } from './new-items.component';
import { NewItemsRoutingModule } from './new-items-routing.module';



@NgModule({
  imports: [
    CommonModule,
    NewItemsRoutingModule
  ],
  declarations: [
    NewItemsComponent,
  ],
  exports: [
    NewItemsComponent,
  ]
})
export class NewItemsModule { }
