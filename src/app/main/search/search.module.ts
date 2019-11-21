import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ],
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule { }
