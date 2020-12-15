import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return loading value - #loading', () => {
    service.showSpinner();

    expect(service.loading).toBeTrue();
  });

  it('should hide spinner', () => {
    service.hideSpinner();

    expect(service.loading).toBeFalse();
  });

  it('should show spinner', () => {
    service.showSpinner();

    expect(service.loading).toBeTrue();
  });
});
