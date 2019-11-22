import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';

const SignInRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(SignInRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignInRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
