import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/login.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent {
  constructor(private loginService: LoginService, private router: Router) {
    super();
  }

  loginWithGoogle() {
    this.addSub(
      this.loginService.login().subscribe(() => {
        this.router.navigateByUrl('/');
      })
    );
  }
}
