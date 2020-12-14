import { Component } from '@angular/core';
import { SquareService } from './service/square.service';
import { IPost } from '../interface/IPost';

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

  public trackByFn(index: number): number {
    return index;
  }
}
