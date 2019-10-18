import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { SignInModule } from './sign-in/sign-in.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    MainModule,
    SignInModule,
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
