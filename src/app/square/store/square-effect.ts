import { Injectable } from '@angular/core';
import { SquareService } from '../service/square.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { IPost } from '../../interface/IPost';
import * as squareActions from './action/square-action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class SquareEffect {
  constructor(
    private actions$: Actions,
    private squareService: SquareService
  ) {}

  @Effect()
  getAllPosts$: Observable<Action> = this.actions$.pipe(
    ofType(squareActions.POST),
    switchMap(() => {
      return this.squareService.getPosts().pipe(
        map((posts: IPost[]) => new squareActions.PostsSuccessAction(posts)),
        catchError((error: any) =>
          of(new squareActions.PostsFailureAction(error))
        )
      );
    })
  );
}
