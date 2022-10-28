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
  DocumentSnapshot,
} from 'firebase/firestore';
import { from, Observable, of } from 'rxjs';
import { Doc } from '../interfaces/Doc';
import { v4 } from 'uuid';
import { map } from 'rxjs/operators';

export class FireService<T extends Doc> {
  protected path = '';

  private ref: CollectionReference<T>;

  constructor(path, protected fireStore: Firestore) {
    if (!path) {
      throw new Error('path didn set');
    }
    this.path = path;
    this.ref = collection(this.fireStore, path) as CollectionReference<T>;
  }

  static newId(): string {
    return v4();
  }

  save(value: T) {
    const savedObject = { ...value, id: value.id || FireService.newId() } as T;
    const ref = doc(this.ref, savedObject.id);
    return from(setDoc<T>(ref, savedObject)).pipe(map(() => ref));
  }

  get(id: string) {
    return from(getDoc<T>(doc(this.ref, id)));
  }

  delete(value: DocumentSnapshot<T>): Observable<void> {
    return from(deleteDoc(value.ref));
  }

  list(...queryConstraints: QueryConstraint[]) {
    return from(getDocs<T>(query<T>(this.ref, ...queryConstraints)));
  }
}
