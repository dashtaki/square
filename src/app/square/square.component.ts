import { Component } from '@angular/core';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/post';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  public posts: IPost[] = [];

  constructor(private squareService: SquareService) {
    this.squareService
      .getPosts()
      .subscribe((posts: IPost[]) => (this.posts = posts));
  }

  public isBreakable(index: number): boolean {
    return index % 10 === 0 && index !== 0;
  }

  public trackByFn(index: number): number {
    return index;
  }

  public toggleIds(e): void {
    e.target.parentElement.classList.toggle('show__user-id');
  }
}
