import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  list(page = 0, pageSize = 10) {
    return this.http.get<Post[]>(
      `/private/post?skip=${page * pageSize}&limit=${pageSize}`
    );
  }

  create(post: Post) {
    return this.http.post('/private/post', post);
  }
}
