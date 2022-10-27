import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Resources } from 'src/app/interfaces/Resources';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss'],
})
export class FilterComponent extends BaseComponent {
  regions = Resources.regions;
  types = Resources.types;

  constructor(private activeRoute: ActivatedRoute) {
    super();
  }

  isActive$(str, param) {
    return this.activeRoute.queryParamMap.pipe(
      map(
        (paramMap) =>
          paramMap.get(param) === str || (!paramMap.has(param) && !str)
      )
    );
  }
}
