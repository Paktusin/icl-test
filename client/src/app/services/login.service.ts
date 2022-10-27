import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: Auth, private router: Router) {}

  login() {
    signInWithRedirect(this.auth, new GoogleAuthProvider()).then((res) => {});
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
