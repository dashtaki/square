import * as squareActions from './square-action';
import { IPost } from '../../interface/IPost';

export interface State {
  posts: IPost[];
  error: any;
  loading: boolean;
}

const initialState: State = {
  posts: [],
  error: null,
  loading: false,
};

export function reducer(
  state = initialState,
  action: squareActions.Actions
): State {
  switch (action.type) {
    case squareActions.POST: {
      return {
        ...state,
        loading: true,
      };
    }

    case squareActions.POST_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    }

    case squareActions.POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const posts = (state: State) => state.posts;
export const error = (state: State) => state.error;
export const loading = (state: State) => state.loading;
