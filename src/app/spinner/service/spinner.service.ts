import { Injectable } from '@angular/core';
import * as fromRoot from '../../ngrx';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private store: Store<fromRoot.State>) {}

  get loading(): Observable<boolean> {
    return this.store.select(fromRoot.getLoading);
  }
}
