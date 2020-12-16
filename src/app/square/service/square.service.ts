import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../../interface/IPost';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  private readonly getPostEndpoint = 'posts';

  constructor(private httpClient: HttpClient) {}

  /**
   * get all post from the API
   * @returns as array of post as observable
   */
  public getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.getUrl(this.getPostEndpoint));
  }

  /**
   * @param endpoint; API's endpoint
   * @returns full url for calling API
   */
  private getUrl(endpoint: string): string {
    return `${environment.api}${endpoint}`;
  }
}
