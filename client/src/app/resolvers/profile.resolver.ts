import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService
      .get(route.paramMap.get('id'))
      .pipe(map((doc) => doc.data()));
  }
}
