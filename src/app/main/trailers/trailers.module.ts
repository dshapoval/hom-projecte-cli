import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailersComponent } from './trailers.component';
import { TrailersRoutingModule } from './trailers-routing.module';



@NgModule({
  imports: [
    CommonModule,
    TrailersRoutingModule ],
  declarations: [ TrailersComponent ],
  exports: [ TrailersComponent ]
})
export class TrailersModule { }
