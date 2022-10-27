import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent {
  constructor(private auth: Auth) {
    super();
  }

  get user() {
    return this.auth.currentUser;
  }
}
