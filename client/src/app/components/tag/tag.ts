import {
  Component,
  Host,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-tag',
  styleUrls: ['./tag.scss'],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class TagComponent extends BaseComponent {
  @HostBinding('class.primary')
  @Input()
  primary = false;

  @HostBinding('class') class = 'icl-tag';
}
