import { DocumentData } from 'firebase/firestore';

export interface Doc extends DocumentData {
  id: string;
}
