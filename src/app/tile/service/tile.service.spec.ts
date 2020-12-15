import { TestBed } from '@angular/core/testing';
import { TileService } from './tile.service';

describe('TileService', () => {
  let service: TileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return FALSE when id is not breakable', () => {
    const isBreakable = service.isBreakable(7);

    expect(isBreakable).toBeFalse();
  });

  it('should return TRUE when id is breakable', () => {
    const isBreakable = service.isBreakable(11);

    expect(isBreakable).toBeTrue();
  });
});
