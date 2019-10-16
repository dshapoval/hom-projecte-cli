import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';



@NgModule({
  imports: [
    CommonModule,
    TopRoutingModule,
  ],
  declarations: [ TopComponent ],
  exports: [ TopComponent ]

})
export class TopModule { }
