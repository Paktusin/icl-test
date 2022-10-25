import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-user',
  templateUrl: `./user.component.html`,
})
export class UserComponent extends BaseComponent {
  @Input() link?: boolean;
  @Input() user?: User;
  @Input() prefix = '';
  @Input() hideName;
}
