import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../shared/services/user.service';
import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  public isSignIn: boolean;

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
    this.getUserStatus();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      channelId: ['',  Validators.required],
    });
  }

  public singIn(): void {
     this.userService.signIn();
      console.log(this.isSignIn);
     this.getUserStatus();
     console.log(this.isSignIn);
  }

  public singOut(): void {
    this.userService.signOut();
  }

  public getPlaylist(channelId?: string): any {
    this.youtubeApiService.getMinePlaylist(channelId)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
  public getUserStatus(): void {
    this.isSignIn = this.userService.isUserSignedIn();
    this.navigateToHome();
  }
  public navigateToHome(): void {
    this.isSignIn ? this.router.navigate(['/main/home']) : console.log(this.isSignIn);
  }
}
