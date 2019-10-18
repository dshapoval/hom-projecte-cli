import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
// import 'https://apis.google.com/js/api.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
// Options
  googleApi = 'https://apis.google.com/js/api.js';
  public CLIENT_ID = '781957298776-3cuabf7f0albtoragc3j66m4pvqq202n.apps.googleusercontent.com';
  public DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest' ];
  public SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
  public gapiScript: any;

  constructor(
    public scriptService: GoogleApiService,
  )
  { }

  ngOnInit() {
    this.scriptService.load('gapi').then(data => {
      console.log('script loaded ', data);
      this.gapiScript = data;
    }).catch(error => console.log(error));
  }
  public handleClientLoad(): void {
    this.gapiScript.load('client:auth2', this.initClient());
  }
  public initClient() {
    this.gapiScript.client.init({
      discoveryDocs: this.DISCOVERY_DOCS,
      clientId: this.CLIENT_ID,
      scope: this.SCOPES
    }).then(() => {
      // listen
      this.gapiScript.auth2.getAuthInstance().isSignIn.listen(this.updateSigninStatus);
      // Handle
      this.updateSigninStatus(this.gapiScript.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  public updateSigninStatus(isSignedIn) {
    if(isSignedIn) {
      console.log(true);
      return;
    }
    console.log(false);
  }
  public singIn(): void {
    this.gapiScript.auth2.getAuthInstance().signIn();
  }
}
