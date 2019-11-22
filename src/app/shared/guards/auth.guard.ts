import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): | boolean | UrlTree {
    if (this.userService.isAuth()) {
      return true;
    }
    return this.router.createUrlTree(['/sign-in']);
  }

  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isAuth()) {
      return true;
    }
    this.router.navigate(['/sign-in']);
    return false;
  }
}
