import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule ],
  exports: [ HeaderComponent ],
  declarations: [ HeaderComponent ]
})
export class HeaderModule { }
