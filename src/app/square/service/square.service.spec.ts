import { TestBed } from '@angular/core/testing';

import { SquareService } from './square.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('SquareService', () => {
  let service: SquareService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SquareService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPosts', () => {
    service.getPosts().subscribe();

    httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    httpMock.verify();
  });
});
