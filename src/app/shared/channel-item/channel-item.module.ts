import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelItemComponent } from './channel-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ ChannelItemComponent ],
  exports: [ ChannelItemComponent ]
})
export class ChannelItemModule { }
