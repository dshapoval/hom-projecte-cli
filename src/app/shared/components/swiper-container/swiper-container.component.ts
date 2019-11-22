import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper-container',
  templateUrl: './swiper-container.component.html',
  styleUrls: ['./swiper-container.component.scss']
})
export class SwiperContainerComponent implements OnInit {
  public config: SwiperConfigInterface;
  constructor() {
    this.config = {
      keyboard: true,
      slidesPerView: 'auto',
      setWrapperSize: true,
      watchOverflow: false,
      grabCursor: false,
      observer: true,
      observeParents: true,
      slidesPerColumnFill: 'row',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // scrollbar: {
      //   draggable: true,
      //   lockClass: 'swiper-scrollbar-lock',
      //   dragClass: 'swiper-scrollbar-drag',
      // }
    };
  }

  ngOnInit() {
  }

}
