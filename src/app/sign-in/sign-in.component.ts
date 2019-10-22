import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../shared/services/user.service';
import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private gapiService: GoogleApiService,
    private userService: UserService,
    private youtubeApiService: YoutubeApiService,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      channelId: ['',  Validators.required],
    });
  }

  public singIn(): void {
    this.userService.signIn();
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
}
