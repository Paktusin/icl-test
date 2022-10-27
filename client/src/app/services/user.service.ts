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

  constructor(protected fireStore: Firestore, private auth: Auth) {
    super('users', fireStore);
  }

  static authUserToUser(authUser: AuthUser): User {
    return (
      authUser && {
        id: authUser.uid,
        name: authUser.displayName,
        email: authUser.email,
        img: authUser.photoURL,
      }
    );
  }
}
