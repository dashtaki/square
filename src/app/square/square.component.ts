import { Component } from '@angular/core';
import { IPost } from '../interface/IPost';
import { Store } from '@ngrx/store';
import { SpinnerService } from '../spinner/service/spinner.service';
import * as fromRoot from '../ngrx/index';
import * as squareActions from './store/action/square-action';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  public posts: IPost[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private store: Store<fromRoot.State>
  ) {
    this.fetchAllPosts();
  }

  private fetchAllPosts(): void {
    this.spinnerService.showSpinner();
    this.store.dispatch(new squareActions.PostsAction());
    this.store.select(fromRoot.getSquare).subscribe((posts: IPost[]) => {
      if (posts) {
        this.posts = posts;
      }
      this.spinnerService.hideSpinner();
    });
  }

  public trackByFn(index: number): number {
    return index;
  }
}
