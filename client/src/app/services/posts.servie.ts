import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Post';
import { FireService } from './fire.service';
import {
  deleteObject,
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { map, switchMap, tap } from 'rxjs/operators';
import { deleteDoc, DocumentSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends FireService<Post> {
  constructor(protected fireStore: Firestore, private storage: Storage) {
    super('posts', fireStore);
  }

  uploadImage(path: string, base64: string) {
    const storageRef = ref(this.storage, path);
    return from(uploadString(storageRef, base64, 'data_url')).pipe(
      switchMap(() => from(getDownloadURL(storageRef)))
    );
  }

  getDocWithText(id: string): Observable<Post> {
    return super.get(id).pipe(
      switchMap((postDoc) =>
        from(
          getDocs(query(collection(this.fireStore, `${postDoc.ref.path}/text`)))
        ).pipe(
          map((texts) => ({
            ...postDoc.data(),
            text: texts.docs[0].data().text,
          }))
        )
      )
    );
  }

  save(value: Post) {
    const text = value.text;
    value.text = value.text.slice(0, 100);
    return super.save(value).pipe(
      switchMap((postRef) =>
        from(
          setDoc(doc(collection(this.fireStore, `${postRef.path}/text`)), {
            text,
          })
        ).pipe(map(() => postRef))
      )
    );
  }

  delete(post: DocumentSnapshot<Post>): Observable<void> {
    return from(this.deleteAdditional(post)).pipe(
      switchMap(() => super.delete(post))
    );
  }

  async deleteAdditional(post: DocumentSnapshot<Post>) {
    //this logic must be in function in firestore
    const texts = await getDocs(
      collection(this.fireStore, `/posts/${post.id}/text`)
    );
    for (const text of texts.docs) {
      await deleteDoc(text.ref);
    }
    try {
      const imageRef = ref(this.storage, post.data().img);
      await deleteObject(imageRef);
    } catch (err) {
      console.error(err);
    }
  }
}
