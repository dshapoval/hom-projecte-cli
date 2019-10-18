import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { WatchLaterModule } from './watch-later/watch-later.module';
import { TrailersModule } from './trailers/trailers.module';
import { RecentlyViewedModule } from './recently-viewed/recently-viewed.module';
import { NewItemsModule } from './new-items/new-items.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { TopModule } from './top/top.module';



@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SignInModule,
    WatchLaterModule,
    TrailersModule,
    RecentlyViewedModule,
    NewItemsModule,
    TopModule,
    RecommendationsModule,
    SignInModule],
  declarations: [ MainComponent ],
  exports: [ MainComponent ]
})
export class MainModule { }
