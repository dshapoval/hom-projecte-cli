import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { GoogleApiService } from '../services/google-api.service';

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  declarations: [ SignInComponent ],
  exports: [ SignInComponent ],
  providers: [
    GoogleApiService
  ]
})
export class SignInModule { }
