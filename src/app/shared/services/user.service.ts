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
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return localStorage.getItem(AppConstants.LOCAL_STORAGE_KEY);
  }

  public signIn() {
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
      } catch (e) {
        console.error(e);
      }
      localStorage.removeItem(AppConstants.LOCAL_STORAGE_KEY);
      this.isUserSignedIn();
      this.isAuth$.next(false);
      console.log('{{this.userService.isAuth$ | async}}', this.isAuth$ );
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    localStorage.setItem(
      AppConstants.LOCAL_STORAGE_KEY, res.getAuthResponse().access_token
    );
    this.isUserSignedIn();
    this.isAuth$.next(true);
    console.log('isUserSignedIn', this.isAuth$ );

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
