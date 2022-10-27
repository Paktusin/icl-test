import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-current-user',
  templateUrl: `./current-user.component.html`,
})
export class CurrentUserComponent {
  constructor(
    private userService: UserService,
    private loginService: LoginService
  ) {}

  get user() {
    return this.userService.currentUser;
  }

  logout() {
    this.loginService.logout();
  }
}
