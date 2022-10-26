import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/login.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent extends BaseComponent implements OnInit {
  users: User[] = [];

  constructor(private loginService: LoginService) {
    super();
  }

  ngOnInit(): void {
    this.addSub(
      this.loginService.list().subscribe((users) => (this.users = users))
    );
  }
}
