import * as squareActions from '../action/square-action';
import { TestBed } from '@angular/core/testing';
import { SquareService } from '../../service/square.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { SquareEffect } from './square-effect';
import { Observable } from 'rxjs';
import { IPost } from '../../../interface/IPost';
import { cold, hot } from 'jasmine-marbles';

describe('SquareReducer', () => {
  let mockSquareService;
  let actions: Observable<any>;
  let effects: SquareEffect;

  beforeEach(() => {
    mockSquareService = jasmine.createSpyObj(['getPosts']);

    TestBed.configureTestingModule({
      providers: [
        SquareEffect,
        provideMockActions(() => actions),
        { provide: SquareService, useValue: mockSquareService },
      ],
    });

    effects = TestBed.inject(SquareEffect);
  });

  it('should return the default state', () => {
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    const postsAction = new squareActions.PostsAction();
    const outcome = new squareActions.PostsSuccessAction(mockPost);

    actions = hot('-a', { a: postsAction });
    const response = cold('-a|', { a: mockPost });
    mockSquareService.getPosts.and.returnValue(response);

    const expected = cold('--b', { b: outcome });
    expect(effects.getAllPosts$).toBeObservable(expected);
  });
});
