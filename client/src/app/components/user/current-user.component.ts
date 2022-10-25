import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-current-user',
  templateUrl: `./current-user.component.html`,
})
export class CurrentUserComponent extends UserComponent {
  constructor(private loginService: LoginService) {
    super();
    this.user = this.loginService.user;
  }

  logout(){
    this.loginService.logout();
  }
}
