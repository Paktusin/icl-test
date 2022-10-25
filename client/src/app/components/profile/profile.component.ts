import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent extends BaseComponent {
  user: User;

  constructor(private activeRoute: ActivatedRoute) {
    super();
    this.activeRoute.data.subscribe((data) => {
      this.user = data.user;
    });
  }
}
