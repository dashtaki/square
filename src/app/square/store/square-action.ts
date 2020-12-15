import { Action } from '@ngrx/store';

export const POST = '[Square] Posts';
export const POST_SUCCESS = '[Square] Posts Success';
export const POST_FAILURE = '[Square] Posts Failure';

export class PostsAction implements Action {
  readonly type = POST;

  constructor() {}
}

export class PostsSuccessAction implements Action {
  readonly type = POST_SUCCESS;

  constructor(public payload: any) {}
}

export class PostsFailureAction {
  readonly type = POST_FAILURE;

  constructor(public payload: any) {}
}

export type Actions = PostsAction | PostsSuccessAction | PostsFailureAction;
