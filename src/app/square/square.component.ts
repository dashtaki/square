import { Component } from '@angular/core';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/IPost';
import { SpinnerService } from '../spinner/service/spinner.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  public posts: IPost[] = [];

  constructor(
    private squareService: SquareService,
    private spinnerService: SpinnerService
  ) {
    this.fetchAllPosts();
  }

  private fetchAllPosts(): void {
    this.spinnerService.showSpinner();
    this.squareService.getPosts().subscribe((posts: IPost[]) => {
      this.posts = posts;
      this.spinnerService.hideSpinner();
    });
  }

  public trackByFn(index: number): number {
    return index;
  }
}
