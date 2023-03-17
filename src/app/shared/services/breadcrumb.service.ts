import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBreadCrumb } from '../model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly _breadCrumb$: BehaviorSubject<IBreadCrumb | null> =
    new BehaviorSubject<IBreadCrumb | null>(null);

  readonly breadCrumb$ = this._breadCrumb$.asObservable();

  constructor() {}

  // getter
  get breadCrumb(): IBreadCrumb | null {
    return this._breadCrumb$.getValue();
  }

  set breadCrumb(value: IBreadCrumb | null) {
    this._breadCrumb$.next(value);
  }

  updateBreadCrumb(value: IBreadCrumb | null): void {
    this._breadCrumb$.next(value);
  }
}
