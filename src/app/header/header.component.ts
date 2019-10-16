import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { debounce } from '../shared/decorators/debounce';
import { Links } from './links';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showMainMenu', [
      state('open', style({height: '*', 'max-height': '*'})),
      state('close', style({height: '0', overflow:'hidden'})),
      transition('* => *', [animate('.275s ease-out') ])
    ]),
    trigger('showActiveCategory', [
      state('true', style({height: '*', 'max-height': '*'})),
      state('false', style({height: '0', overflow:'hidden'})),
      transition('* => *', [animate('.3s ease-out') ])
    ])
  ]

})
export class HeaderComponent implements OnInit {
  public links: Array<Links>;

  public mainMenuState: string;
  public isMainMenuShown: boolean = true;
  public isDesktop: boolean = true;


  constructor() {
    this.links = this.getLinks();
  }

  ngOnInit() {
    this.getDeviceType();
  }
  public getLinks(): Array<Links> {
    return [
      {path: 'main/recently-viewed', label: 'Просмотренные', index: 0},
      {path: 'main/new-items', label: 'Новинки', index: 1},
      {path: 'main/trailers', label: 'Трейлеры', index: 2},
      {path: 'main/recommendations', label: 'Рекомендации', index: 3},
      {path: 'main/watch-later', label: 'Смотреть позже', index: 4},
      {path: 'main/top', label: 'ТОП', index: 5},
    ];
  }
  public setMainMenuState(): void {
    this.mainMenuState = !this.isDesktop && this.isMainMenuShown ? 'close' : 'open';
  }
  public showHideMainMenu(): void {
    this.isMainMenuShown = !this.isMainMenuShown;
    this.setMainMenuState();
  }

  public getDeviceType(): void {
      this.isDesktop = window.innerWidth > 800;
    this.setMainMenuState();
  }

  @HostListener('window:resize')
  @debounce(100)
  onResize() {
    this.getDeviceType();
  }
}
