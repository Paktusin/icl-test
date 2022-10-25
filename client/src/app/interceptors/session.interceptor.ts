import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/login.service';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {
  constructor(private router: Router, private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.loginService.getToken().pipe(
      switchMap((token) => {
        const newRequestToApi = req.clone({
          url: environment.apiUrl + req.url,
        });
        if (token) {
          newRequestToApi.headers.append('Authorization', `Bearer ${token}`);
        }
        return next.handle(newRequestToApi).pipe(
          tap({
            next: (resp) => {},
            error: (event: HttpEvent<any>) => {
              if (event instanceof HttpErrorResponse && event.status === 401) {
                this.router.navigate(['login']);
                return;
              }
            },
          })
        );
      })
    );
  }
}
