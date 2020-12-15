import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/IPost';
import { of } from 'rxjs';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;
  let mockSquareService;

  beforeEach(async () => {
    mockSquareService = jasmine.createSpyObj(['getPosts']);
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body', title: 'title' },
    ];
    mockSquareService.getPosts.and.returnValue(of(mockPost));

    await TestBed.configureTestingModule({
      declarations: [SquareComponent],
      providers: [{ provide: SquareService, useValue: mockSquareService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
