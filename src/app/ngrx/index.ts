import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromSquare from '../square/store/square-reducer';
import { environment } from '../../environments/environment.prod';

export interface State {
  square: fromSquare.State;
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const reducers: ActionReducerMap<State> = {
  square: fromSquare.reducer,
};

/* Square state selectors */
export const getState = (state: State) => state.square;
export const getSquare = createSelector(getState, fromSquare.posts);
export const getError = createSelector(getState, fromSquare.error);
export const getLoading = createSelector(getState, fromSquare.loading);
