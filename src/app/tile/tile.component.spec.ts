import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import { IPost } from '../interface/IPost';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const mockPost: IPost = {
      userId: 1,
      id: 0,
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
});
