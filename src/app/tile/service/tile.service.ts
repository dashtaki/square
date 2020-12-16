import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  constructor() {}

  /**
   * figure out is this the proper element for wrap the line or not
   * @param postId;  id of the post
   */
  public isBreakable(postId: number): boolean {
    return postId % 10 === 1;
  }

  /**
   * toggle 'show__user-id' to swap data between post.id and post.userId
   * @param event; mouse event that contains clicked HTML element
   */
  public toggleIds(event: MouseEvent): void {
    (event.target as HTMLElement).parentElement.classList.toggle(
      'show__user-id'
    );
  }
}
