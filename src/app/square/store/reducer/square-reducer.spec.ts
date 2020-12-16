import * as fromReducer from './square-reducer';
import * as squareActions from '../action/square-action';
import { IPost } from '../../../interface/IPost';

describe('SquareReducer', () => {
  it('should return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsAction()
    );

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should return posts on success', () => {
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsSuccessAction(mockPost)
    );

    expect(state.posts.length).toBe(2);
    expect(state.loading).toBeFalse();
    expect(state.error).toBeNull();
  });

  it('should return error on failure', () => {
    const mockError = {
      status: 0,
      message: 'mock-error-message',
    };
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsFailureAction(mockError)
    );

    expect(state.error).toEqual(mockError);
    expect(state.loading).toBeFalse();
    expect(state.posts).toEqual([]);
  });

  it('should return posts', () => {
    const mockPost: IPost[] = [
      { id: 0, userId: 1, body: 'body-1', title: 'title-1' },
      { id: 1, userId: 2, body: 'body-2', title: 'title-2' },
    ];
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsSuccessAction(mockPost)
    );
    const expectedPosts = fromReducer.posts(state);

    expect(expectedPosts).toEqual(mockPost);
  });

  it('should return error', () => {
    const mockError = {
      status: 0,
      message: 'mock-error-message',
    };
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsFailureAction(mockError)
    );
    const expectedError = fromReducer.error(state);

    expect(expectedError).toEqual(mockError);
  });

  it('should return loading', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(
      initialState,
      new squareActions.PostsAction()
    );
    const expectedLoading = fromReducer.loading(state);

    expect(expectedLoading).toBeTrue();
  });
});
