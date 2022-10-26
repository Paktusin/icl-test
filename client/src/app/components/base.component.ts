import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({ template: '' })
export class BaseComponent implements OnDestroy {
  static defaultSubName = 'default';
  subs = new Map<string, Subscription[]>();
  loading = false;

  imgUrl(url) {
    return environment.apiUrl + url;
  }

  ngOnDestroy(): void {
    this.clearAllSubs();
  }

  protected clearSub(name: string = BaseComponent.defaultSubName) {
    if (this.subs.has(name)) {
      this.subs.get(name).forEach((s) => s.unsubscribe());
      this.subs.delete(name);
    }
  }

  protected clearAllSubs(): void {
    this.subs.forEach((_, name) => {
      this.clearSub(name);
    });
  }

  protected addSub(
    name?: string | Subscription,
    ...subs: Subscription[]
  ): void {
    if (!name) {
      return;
    }
    const widthDefaultName: boolean = name instanceof Subscription;
    const key = widthDefaultName
      ? BaseComponent.defaultSubName
      : (name as string);
    if (!this.subs.has(key)) {
      this.subs.set(key, []);
    }
    if (widthDefaultName) {
      this.subs.get(key).push(name as Subscription);
    }
    this.subs.get(key).push(...subs);
  }
}
