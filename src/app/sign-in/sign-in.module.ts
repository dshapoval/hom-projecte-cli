import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { NgGapiClientConfig } from 'ng-gapi/lib/config/GoogleApiConfig';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '781957298776-3cuabf7f0albtoragc3j66m4pvqq202n.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: [
    'https://www.googleapis.com/auth/youtube.force-ssl'
  ].join(' '),
  fetch_basic_profile: true
};

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  declarations: [ SignInComponent ],
  exports: [ SignInComponent ]
})
export class SignInModule { }
