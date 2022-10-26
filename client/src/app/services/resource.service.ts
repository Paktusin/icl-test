import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ResourceService {
  types: string[];
  regions: string[];

  constructor(private http: HttpClient) {}

  getTypes() {
    if (this.regions) {
      return of(this.types);
    }
    return this.http.get<string[]>('/private/types').pipe(
      tap((res) => {
        this.types = res;
      })
    );
  }

  getRegions() {
    if (this.regions) {
      return of(this.regions);
    }
    return this.http.get<string[]>('/private/regions').pipe(
      tap((res) => {
        this.regions = res;
      })
    );
  }
}
