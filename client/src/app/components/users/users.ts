import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent extends BaseComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.addSub(
      this.userService
        .list()
        .subscribe((users) => (this.users = users.docs.map((d) => d.data())))
    );
  }
}
