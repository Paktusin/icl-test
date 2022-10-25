import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../interfaces/User';
import { LoginService } from './login.service';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(private loginService: LoginService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.loginService.get(route.paramMap.get('id'));
  }
}
