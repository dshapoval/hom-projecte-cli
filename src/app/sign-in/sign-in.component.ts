import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../shared/services/user.service';
import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  // @ts-ignore
  // tslint:disable-next-line:no-bitwise
  public isSignIn: boolean = this.userService.isAuth$.next(this.userService.isAuth()) | async ;

  constructor(
    private gapiService: GoogleApiService,
    private userService: UserService,
    private youtubeApiService: YoutubeApiService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.initForm();
    this.userService.isUserSignedIn();
    this.isSignIn = this.userService.isSignIn;
    console.log(this.userService.isAuth$);
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      channelId: ['',  Validators.required],
    });
  }

  public singIn(): void {
     this.userService.signIn();
     this.isSignIn = this.userService.isSignIn;
  }

  public singOut(): void {
    this.userService.signOut();
    this.isSignIn = this.userService.isSignIn;
  }

  public getPlaylist(channelId?: string): any {
    this.youtubeApiService.getPlaylist(channelId)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
