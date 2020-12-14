import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../../interface/post';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  private readonly getPostEndpoint = 'posts';

  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.getUrl(this.getPostEndpoint));
  }

  private getUrl(endpoint: string): string {
    return `${environment.api}${endpoint}`;
  }
}
