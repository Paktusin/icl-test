import {
  doc,
  Firestore,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
  QueryConstraint,
  CollectionReference,
  deleteDoc,
} from 'firebase/firestore';
import { from, Observable, of } from 'rxjs';
import { Doc } from '../interfaces/Doc';
import { v4 } from 'uuid';
import { map, tap } from 'rxjs/operators';
import { startAfter, limit } from '@angular/fire/firestore';

export class FireService<T extends Doc> {
  private ref: CollectionReference<T>;
  private lastMap = {};
  private lastPage = 0;

  constructor(path, protected fireStore: Firestore) {
    if (!path) {
      throw new Error('path didn set');
    }
    this.ref = collection(this.fireStore, path) as CollectionReference<T>;
  }

  static newId(): string {
    return v4();
  }

  save(value: T): Observable<T> {
    const savedObject = { ...value, id: value.id || FireService.newId() } as T;
    return from(setDoc(doc(this.ref, savedObject.id), savedObject)).pipe(
      map(() => savedObject)
    );
  }

  get(id: string): Observable<T> {
    return from(getDoc(doc(this.ref, id))).pipe(
      map((s) => ({ ...s.data(), id: s.id }))
    );
  }

  delete(id: string): Observable<void> {
    return from(deleteDoc(doc(this.ref, id)));
  }

  list(...queryConstraints: QueryConstraint[]): Observable<T[]> {
    return from(getDocs(query<T>(this.ref, ...queryConstraints))).pipe(
      map((sArr) => sArr.docs.map((s) => ({ ...s.data(), id: s.id })))
    );
  }

  listPage(
    property,
    page = 0,
    limitCount = 10,
    ...queryConstraints: QueryConstraint[]
  ) {
    if (page > this.lastPage) {
      return of([]);
    }
    if (page && this.lastMap[page]) {
      queryConstraints.push(startAfter(property, this.lastMap[page]));
    }
    queryConstraints.push(limit(limitCount));
    return this.list(...queryConstraints).pipe(
      tap((res) => {
        if (!res.length) {
          this.lastPage = page;
        }
        const last = res.slice(-1)[0]?.createdAt;
        if (last) {
          this.lastMap[page + 1] = last;
        }
      })
    );
  }
}
