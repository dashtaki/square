import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileComponent } from './tile.component';
import { IPost } from '../interface/IPost';
import { By } from '@angular/platform-browser';
import { TileService } from './service/tile.service';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let mockTileService;

  beforeEach(async () => {
    mockTileService = jasmine.createSpyObj(['toggleIds', 'isBreakable']);

    await TestBed.configureTestingModule({
      declarations: [TileComponent],
      providers: [{ provide: TileService, useValue: mockTileService }],
    }).compileComponents();
  });

  beforeEach(() => {
    const mockPost: IPost = {
      id: 0,
      userId: 1,
      title: 'mock-post-title',
      body: 'mock-post-body,',
    };
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add break css class', () => {
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.css('.break'));

    expect(tile).toBeNull();
  });

  it('should add break css class', () => {
    mockTileService.isBreakable.and.returnValue(true);
    component.post = {
      id: 11,
      userId: 1,
      title: 'mock-post-title',
      body: 'mock-post-body,',
    };
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.css('.break'));

    expect(tile).toBeTruthy();
  });

  it('should show id as default value in tile', () => {
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.css('span'));

    expect(tile.nativeElement.textContent).toContain('0');
  });

  it('should show user id when tile clicked', () => {
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.css('span'));
    tile.triggerEventHandler('click', null);

    expect(mockTileService.toggleIds).toHaveBeenCalled();
  });
});
