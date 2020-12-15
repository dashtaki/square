import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { SquareComponent } from './square.component';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/IPost';
import { of } from 'rxjs';
import { SpinnerService } from '../spinner/service/spinner.service';
import { By } from '@angular/platform-browser';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;
  let mockSquareService;
  let mockSpinnerService;

  beforeEach(async () => {
    mockSquareService = jasmine.createSpyObj(['getPosts']);
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    mockSquareService.getPosts.and.returnValue(of(mockPost));

    mockSpinnerService = jasmine.createSpyObj(['showSpinner', 'hideSpinner']);

    await TestBed.configureTestingModule({
      declarations: [SquareComponent],
      providers: [
        { provide: SquareService, useValue: mockSquareService },
        { provide: SpinnerService, useValue: mockSpinnerService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    flush();
    expect(component).toBeTruthy();
    expect(mockSpinnerService.showSpinner).toHaveBeenCalled();
    expect(mockSpinnerService.hideSpinner).toHaveBeenCalled();
  }));

  it('should show header as SQUARE TABLE', () => {
    const header = fixture.debugElement.query(By.css('header'));

    expect(header.nativeElement.textContent).toContain('SQUARE TABLE');
  });

  it('should all posts', () => {
    const tiles = fixture.debugElement.queryAll(By.css('app-tile'));

    expect(tiles.length).toBe(2);
  });
});
