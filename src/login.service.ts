import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { from, of } from 'rxjs';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { User } from './interfaces/user';
import {
  Authentication,
  GoogleAuth,
} from '@codetrix-studio/capacitor-google-auth';
import { environment } from './environments/environment';
import { Preferences } from '@capacitor/preferences';

const STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {
  user?: User;

  constructor(private router: Router) {
    GoogleAuth.initialize({
      clientId: environment.webkey,
      scopes: ['profile', 'email'],
    });
  }

  setUser(user: User) {
    Preferences.set({ key: STORAGE_KEY, value: JSON.stringify(user) });
    this.user = user;
  }

  canActivate() {
    if (this.user) {
      return of(true);
    } else {
      return from(Preferences.get({ key: STORAGE_KEY })).pipe(
        map((strValue) => JSON.parse(strValue.value)),
        catchError((err) => {
          console.error(err);
          return of(null);
        }),
        tap((user) => {
          if (user) {
            this.setUser(user);
          } else {
            this.router.navigate(['/']);
          }
        })
      );
    }
  }

  login() {
    return from(GoogleAuth.signIn()).pipe(
      tap((user) => {
        this.setUser(user);
      })
    );
  }
}
