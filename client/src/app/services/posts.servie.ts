import { Injectable } from '@angular/core';
import {
  Firestore,
  QueryConstraint,
  startAfter,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Post';
import { FireService } from './fire.service';
import { startAt, where, orderBy, limit } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  UploadResult,
  uploadString,
} from '@angular/fire/storage';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends FireService<Post> {
  constructor(protected fireStore: Firestore, private storage: Storage) {
    super('posts', fireStore);
  }

  listParams(params: any): Observable<Post[]> {
    const page = params.page || 0;
    const cond = [orderBy('createdAt', 'desc'), limit(10)];
    if (params.type) {
      cond.push(where('type', '==', params.type));
    }
    if (params.region) {
      cond.push(where('region', '==', params.region));
    }
    if (params.userId) {
      cond.push(where('from.id', '==', params.userId));
    }
    return super.listPage('createdAt', page, 10, ...cond);
  }

  uploadImage(path: string, base64: string) {
    const storageRef = ref(this.storage, path);
    return from(uploadString(storageRef, base64, 'data_url')).pipe(
      switchMap(() => from(getDownloadURL(storageRef)))
    );
  }
}
