import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { SquareComponent } from './square.component';
import { SpinnerService } from '../spinner/service/spinner.service';
import { By } from '@angular/platform-browser';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TileComponent } from '../tile/tile.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../ngrx';
import { IPost } from '../interface/IPost';
import { of } from 'rxjs';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;
  let mockSpinnerService;
  let mockStore;

  beforeEach(async () => {
    mockSpinnerService = jasmine.createSpyObj(['showSpinner', 'hideSpinner']);
    mockStore = jasmine.createSpyObj(['select', 'dispatch']);
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    mockStore.select.and.returnValue(of(mockPost));

    await TestBed.configureTestingModule({
      declarations: [SquareComponent, SpinnerComponent, TileComponent],
      imports: [StoreModule.forRoot(reducers, { metaReducers })],
      providers: [
        { provide: SpinnerService, useValue: mockSpinnerService },
        { provide: Store, useValue: mockStore },
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

  it('should all posts', fakeAsync(() => {
    const tiles = fixture.debugElement.queryAll(By.css('app-tile'));
    flush();

    expect(tiles.length).toBe(2);
  }));
});
