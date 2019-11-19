import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { WatchLaterModule } from './watch-later/watch-later.module';
import { TrailersModule } from './trailers/trailers.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { LikedModule } from './liked/liked.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { TopModule } from './top/top.module';
import { HomeModule } from './home/home.module';



@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SignInModule,
    WatchLaterModule,
    TrailersModule,
    SubscriptionsModule,
    LikedModule,
    TopModule,
    RecommendationsModule,
    HomeModule,
    SignInModule
  ],
  declarations: [ MainComponent ],
  exports: [ MainComponent ]
})
export class MainModule { }
