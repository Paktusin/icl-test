import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { from, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { User } from './app/interfaces/user';
import {
  GoogleAuth,
  User as GoogleUser,
} from '@codetrix-studio/capacitor-google-auth';
import { Preferences } from '@capacitor/preferences';
import { HttpClient } from '@angular/common/http';

const STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {
  user?: User;
  token?: string;

  constructor(private router: Router, private http: HttpClient) {
    GoogleAuth.initialize({
      clientId:
        '564169523192-ral083ni5ft6rfmahepe4oenn5990hsa.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
  }

  setToken(token: string) {
    return from(Preferences.set({ key: STORAGE_KEY, value: token })).pipe(
      tap(() => {
        this.token = token;
      })
    );
  }

  getToken() {
    if (this.token) {
      return of(this.token);
    }
    return from(Preferences.get({ key: STORAGE_KEY })).pipe(
      map((tokenStorage) => tokenStorage.value)
    );
  }

  canActivate() {
    return this.getToken().pipe(
      switchMap((token) => {
        if (this.user) {
          return of(this.user);
        } else {
          return this.http.get<User>('/private/user');
        }
      }),
      tap((user) => {
        this.user = user;
      }),
      map((user) => !!user)
    );
  }

  googleSignIn() {
    return from(GoogleAuth.signIn()).pipe(
      switchMap((user) => {
        console.log(user);
        return this.attemplGoogleAndLogin(user);
      }),
      tap((user) => {
        this.setToken(user.token);
        this.user = user;
      })
    );
  }

  attemplGoogleAndLogin(user: GoogleUser) {
    return this.http.post<User>(`/login/google`, {
      token: user.authentication.idToken,
    });
  }
}
