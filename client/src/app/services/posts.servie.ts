import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Post } from 'src/app/interfaces/Post';
import { FireService } from './fire.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends FireService<Post> {
  constructor(protected fireStore: Firestore) {
    super('posts', fireStore);
  }
}
