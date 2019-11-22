import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { Router } from '@angular/router';

import GoogleUser = gapi.auth2.GoogleUser;
import { AppConstants } from '../../app.constants';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: GoogleUser;
  public isSignIn: boolean;
  public isAuth$ = new BehaviorSubject(this.isAuth());

  constructor(
    private googleAuth: GoogleAuthService,
    public router: Router,
    private ngZone: NgZone

  ) {
  }

  public getToken(): string {
    const token: string = localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
    const tokenExpire: number = +localStorage.getItem(AppConstants.EXPIRE_AT);
    const date = new Date();
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    if ( date.getTime() > tokenExpire ) {
        localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
        this.isAuth$.next(false);
        this.isUserSignedIn();
    }
    return localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
  }

  public signIn() {
     this.googleAuth.getAuth()
      .subscribe((auth) => {
        console.log(auth);
        auth.signIn().then(
          res => this.signInSuccessHandler(res),
          err => this.signInErrorHandler(err)
        );
      });
  }

  public signOut(): void {
      localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
      localStorage.removeItem(AppConstants.USER_NAME);
      this.isUserSignedIn();
      this.isAuth$.next(false);
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    localStorage.setItem(
      AppConstants.LOCAL_STORAGE_KEY, res.getAuthResponse().access_token
    );
    localStorage.setItem(
      AppConstants.EXPIRE_AT, res.getAuthResponse().expires_at.toString()
    );
    localStorage.setItem(
      AppConstants.USER_NAME, res.getBasicProfile().getName().toString()
    );
    this.isUserSignedIn();
    this.isAuth$.next(true);
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }

  public isUserSignedIn(): void {
    this.isSignIn = !!localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
    this.isSignIn ? this.navigateToHome() : this.navigateToLogin();
  }

  public navigateToHome(): void {
    this.ngZone.run(() => this.router.navigate(['/main/home'])).then();
  }

  public navigateToLogin(): void {
    this.ngZone.run(() =>  this.router.navigate(['sign-in'])).then();
  }

  public isAuth(): boolean {
    return this.isSignIn = !!localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
  }

  public isLogedIn(): Observable<boolean> {
    return this.isAuth$;
  }
}
