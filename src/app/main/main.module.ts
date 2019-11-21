import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { LikedModule } from './liked/liked.module';
import { HomeModule } from './home/home.module';
import { PopularModule } from './popular/popular.module';
import { SearchModule } from './search/search.module';



@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SignInModule,
    SubscriptionsModule,
    LikedModule,
    HomeModule,
    SignInModule,
    PopularModule,
    SearchModule
  ],
  declarations: [ MainComponent ],
  exports: [ MainComponent ]
})
export class MainModule { }
