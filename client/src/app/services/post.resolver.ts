import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Post } from '../interfaces/Post';
import { PostsService } from './posts.servie';

@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.get(route.paramMap.get('id'));
  }
}
