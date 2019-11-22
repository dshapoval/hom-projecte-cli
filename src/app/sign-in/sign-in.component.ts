import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../shared/services/user.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // @ts-ignore
  // tslint:disable-next-line:no-bitwise
  public isSignIn: boolean = this.userService.isAuth$.next(this.userService.isAuth()) | async ;

  constructor(
    private gapiService: GoogleApiService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.isUserSignedIn();
    this.isSignIn = this.userService.isSignIn;
  }

  public singIn(): void {
    this.userService.signIn();
    this.isSignIn = this.userService.isSignIn;
  }
  public singOut(): void {
    this.userService.signOut();
    this.isSignIn = this.userService.isSignIn;
  }

}
