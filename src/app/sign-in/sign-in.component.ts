import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../shared/services/user.service';
// import 'https://apis.google.com/js/api.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public isSignIn: boolean;

  constructor(
    private gapiService: GoogleApiService,
    private userService: UserService,
    ) {
    gapiService.onLoad().subscribe(() => {
      // Here we can use gapi

    });
  }

  ngOnInit() {
  }

  public singIn(): void {
    this.userService.signIn();
    // this.isSignIn = this.userService.signIn();
  }
  public singOut(): void {
    this.userService.signOut();
  }
  public getPlaylist(): any {
    const myToken = this.userService.getToken();
    console.log(myToken);
  }
}
