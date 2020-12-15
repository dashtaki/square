import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';
import { SpinnerService } from './service/spinner.service';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let mockSpinnerService;

  beforeEach(async () => {
    mockSpinnerService = jasmine.createSpyObj(['loading']);
    (mockSpinnerService as any).loading = false;

    await TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [{ provide: SpinnerService, useValue: mockSpinnerService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show spinner in first initialization', () => {
    const spinner = fixture.debugElement.query(By.css('.spinner__wrapper'));

    expect(spinner).toBeNull();
  });

  it('should show spinner', () => {
    (mockSpinnerService as any).loading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.spinner__wrapper'));

    expect(spinner.nativeElement).toBeTruthy();
  });

  it('should show 4 cubes as child', () => {
    (mockSpinnerService as any).loading = true;
    fixture.detectChanges();
    const spinnerCubes = fixture.debugElement.queryAll(
      By.css('.spinner__cube')
    );

    expect(spinnerCubes.length).toBe(4);
  });
});
