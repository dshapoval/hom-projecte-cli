import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { debounce } from '../shared/decorators/debounce';
// import { debounce } from 'rxjs/operators';

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
  public mainMenuState: string;
  public isMainMenuShown: boolean = true;
  public isDesktop: boolean = true;


  constructor() { }

  ngOnInit() {
    this.getDeviceType();
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
