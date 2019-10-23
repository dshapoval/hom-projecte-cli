import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import { AppConstants } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: GoogleUser;

  constructor(
    private googleAuth: GoogleAuthService
  ) {
  }

  public getToken(): string {
    const token: string = localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn().then(
          res => this.signInSuccessHandler(res),
          err => this.signInErrorHandler(err)
        );
      });
  }

  public signOut(): void {
    this.googleAuth.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
        // auth.disconnect();
      } catch (e) {
        console.error(e);
      }
      localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    console.log(this.user);
    localStorage.setItem(
      AppConstants.LOCAL_STORAGE_KEY, res.getAuthResponse().access_token
    );
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }
  public isUserSignedIn(): boolean {
    return localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY) ? true : false;
  }
}
