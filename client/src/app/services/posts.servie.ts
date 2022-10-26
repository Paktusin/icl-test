import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  readonly postUrl = '/private/post';
  constructor(private http: HttpClient) {}

  list(params: any) {
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== '') {
        urlParams.set(key, params[key]);
      }
    });
    return this.http.get<Post[]>(this.postUrl + `?${urlParams}`);
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
