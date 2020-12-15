import { TestBed } from '@angular/core/testing';

import { SquareService } from './square.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SquareService', () => {
  let service: SquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
