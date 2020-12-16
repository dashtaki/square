import * as squareActions from '../action/square-action';
import { IPost } from '../../../interface/IPost';

describe('SquareAction', () => {
  it('#PostsAction', () => {
    const postsAction = new squareActions.PostsAction();

    expect(postsAction.type).toEqual('[Square] Posts');
  });

  it('#PostsSuccessAction', () => {
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    const postsAction = new squareActions.PostsSuccessAction(mockPost);

    expect(postsAction.type).toEqual('[Square] Posts Success');
  });

  it('#PostsFailureAction', () => {
    const mockError = 'mock-error';
    const postsAction = new squareActions.PostsFailureAction(mockError);

    expect(postsAction.type).toEqual('[Square] Posts Failure');
  });
});
