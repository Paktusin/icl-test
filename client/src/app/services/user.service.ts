import { Injectable } from '@angular/core';
import { Auth, User as AuthUser } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { User } from '../interfaces/User';
import { FireService } from './fire.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends FireService<User> {
  currentUser = UserService.authUserToUser(this.auth.currentUser);

  constructor(protected store: Firestore, private auth: Auth) {
    super('users', store);
  }

  static authUserToUser(authUser: AuthUser): User {
    return {
      id: authUser.uid,
      name: authUser.displayName,
      email: authUser.email,
      img: authUser.photoURL,
    };
  }
}
