import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { SignInModule } from './sign-in/sign-in.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppConstants } from './app.constants';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { UserService } from './shared/services/user.service';
import { SwiperContainerComponent } from './shared/components/swiper-container/swiper-container.component';
import { ChannelItemComponent } from './shared/components/channel-item/channel-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: AppConstants.getGapiClientConfig()
    }),
    HeaderModule,
    FooterModule,
    MainModule,
    SignInModule,
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      deps: [UserService],
      multi: true
    }
  ]
})
export class AppModule { }
