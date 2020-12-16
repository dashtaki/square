import { Component, OnDestroy } from '@angular/core';
import { IPost } from '../interface/IPost';
import { Store } from '@ngrx/store';
import * as fromRoot from '../ngrx/index';
import { SubSink } from 'subsink';
import * as squareActions from './store/action/square-action';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnDestroy {
  public posts: IPost[] = [];
  private _subs = new SubSink();

  constructor(private store: Store<fromRoot.State>) {
    this.fetchAllPosts();
  }

  private fetchAllPosts(): void {
    this.store.dispatch(new squareActions.PostsAction());
    this.store.select(fromRoot.getSquare).subscribe((posts: IPost[]) => {
      if (posts) {
        this.posts = posts;
      }
    });
  }

  public trackByFn(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
