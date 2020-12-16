import { Component, OnDestroy } from '@angular/core';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/IPost';
import { SpinnerService } from '../spinner/service/spinner.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnDestroy {
  public posts: IPost[] = [];
  private _subs = new SubSink();

  constructor(
    private squareService: SquareService,
    private spinnerService: SpinnerService
  ) {
    this.fetchAllPosts();
  }

  private fetchAllPosts(): void {
    this.spinnerService.showSpinner();
    this._subs.sink = this.squareService
      .getPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
        this.spinnerService.hideSpinner();
      });
  }

  public trackByFn(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
