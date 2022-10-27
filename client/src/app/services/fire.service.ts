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
import { from, Observable } from 'rxjs';
import { Doc } from '../interfaces/Doc';
import { v4 } from 'uuid';
import { map } from 'rxjs/operators';

export class FireService<T extends Doc> {
  private ref: CollectionReference<T>;

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
}
