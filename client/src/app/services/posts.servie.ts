import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  readonly postUrl = '/private/post';
  constructor(private http: HttpClient) {}

  list(page = 0, pageSize = 10, userId?: string) {
    const params = new URLSearchParams();
    params.set('skip', (page * pageSize).toString());
    params.set('limit', pageSize.toString());
    if (userId) {
      params.set('userId', userId);
    }
    return this.http.get<Post[]>(this.postUrl + `?${params}`);
  }

  create(post: Post) {
    return this.http.post(this.postUrl, post);
  }

  delete(post: Post) {
    // eslint-disable-next-line no-underscore-dangle
    return this.http.delete(`${this.postUrl}/${post._id}`);
  }

  get(id: string) {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }
}
