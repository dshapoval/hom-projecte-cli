import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public userService: UserService
  ) {
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    let authReq = req.clone();
    const token = this.userService.getToken();
    if (token) {
      req.headers.delete('Authorization');
      authReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return authReq;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req))
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
