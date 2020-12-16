import { Component } from '@angular/core';
import { IPost } from '../interface/IPost';
import { Store } from '@ngrx/store';
import * as fromRoot from '../ngrx/index';
import * as squareActions from './store/action/square-action';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  public posts: IPost[] = [];

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
}
