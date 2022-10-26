import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BaseComponent } from '../../base.component';

export interface BreadCrumb {
  url?: string;
  name: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbsComponent extends BaseComponent {
  @HostBinding('class') class = 'icl-breadcrumbs';

  @Input() items: BreadCrumb[] = [];
}
