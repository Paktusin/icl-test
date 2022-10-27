import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, getRedirectResult } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
import { BaseComponent } from '../base.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  userService: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private auth: Auth
  ) {
    super();
  }

  ngOnInit() {
    getRedirectResult(this.auth).then(async (res) => {
      if (res) {
        this.userService
          .save(UserService.authUserToUser(res.user))
          .subscribe(() => {
            this.router.navigateByUrl('/');
          });
      }
    });
  }

  loginWithGoogle() {
    this.loginService.login();
  }
}
