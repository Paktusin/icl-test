import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {
  constructor(private loginService: LoginService, private router: Router) {
    super();
  }

  loginWithGoogle() {
    this.addSub(
      this.loginService.googleSignIn().subscribe(() => {
        this.router.navigateByUrl('/');
      })
    );
  }
}
