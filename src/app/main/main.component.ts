import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userName: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserName();
  }
  public getUserName(): void {
    this.userName = localStorage.getItem(AppConstants.USER_NAME);
    console.log('this.userName', this.userName);
  }
}
