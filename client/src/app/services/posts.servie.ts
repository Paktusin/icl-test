import { Injectable } from '@angular/core';
import { Firestore, QueryConstraint } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Post';
import { FireService } from './fire.service';
import { startAt, where, orderBy, limit } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends FireService<Post> {
  constructor(protected fireStore: Firestore) {
    super('posts', fireStore);
  }

  list(params: any): Observable<Post[]> {
    const cond = [
      orderBy('createdAt', 'desc'),
      limit(10),
      startAt(params.page * 10),
    ];
    if (params.type) {
      cond.push(where('type', '==', params.type));
    }
    if (params.region) {
      cond.push(where('region', '==', params.region));
    }
    if (params.userId) {
      cond.push(where('user.id', '==', params.userId));
    }
    return super.list(...cond);
  }
}
