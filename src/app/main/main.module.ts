import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SignInModule } from '../sign-in/sign-in.module';



@NgModule({
  imports: [CommonModule, MainRoutingModule, SignInModule],
  declarations: [ MainComponent ],
  exports: [ MainComponent ]
})
export class MainModule { }
