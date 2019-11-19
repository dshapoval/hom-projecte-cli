import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { Router } from '@angular/router';

import GoogleUser = gapi.auth2.GoogleUser;
import { AppConstants } from '../../app.constants';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: GoogleUser;
  public isSignIn: boolean;
  public isAuth$ = new BehaviorSubject(this.isAuth());

  constructor(
    private googleAuth: GoogleAuthService,
    public router: Router,
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
      this.isUserSignedIn();
      this.isAuth$.next(false);
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    console.log(this.user);
    localStorage.setItem(
      AppConstants.LOCAL_STORAGE_KEY, res.getAuthResponse().access_token
    );
    localStorage.setItem(
      AppConstants.EXPIRE_AT, res.getAuthResponse().expires_at.toString()
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
    this.router.navigate(['/main/home'], {});
  }

  public navigateToLogin(): void {
    this.router.navigate(['sign-in']);
  }

  public isAuth(): boolean {
    return this.isSignIn = !!localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
  }

  public isLogedIn(): Observable<boolean> {
    return this.isAuth$;
  }
}
