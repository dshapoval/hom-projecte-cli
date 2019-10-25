import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  providers: [ YoutubeApiService ]
})
export class HomeModule { }
