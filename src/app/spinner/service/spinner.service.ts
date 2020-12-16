import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private _loading = false;

  constructor() {}

  get loading(): boolean {
    return this._loading;
  }

  public hideSpinner(): void {
    this._loading = false;
  }

  public showSpinner(): void {
    this._loading = true;
  }
}
