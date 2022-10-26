import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResourceService } from 'src/app/services/resource.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss'],
})
export class FilterComponent extends BaseComponent {
  $regions: Observable<string[]>;
  $types: Observable<string[]>;

  constructor(
    private resourceService: ResourceService,
    private activeRoute: ActivatedRoute
  ) {
    super();

    this.$regions = this.resourceService.getRegions();
    this.$types = this.resourceService.getTypes();
  }


  isActive$(str, param) {
    return this.activeRoute.queryParamMap.pipe(
        map((paramMap) => paramMap.get(param) === str || !paramMap.has(param) && !str)
      );
  }
}
