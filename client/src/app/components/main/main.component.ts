import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent {
  constructor(private loginService: LoginService) {
    super();
  }

  get user() {
    return this.loginService.user;
  }
}
