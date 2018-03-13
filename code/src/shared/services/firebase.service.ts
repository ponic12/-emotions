import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
//import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { ITotals } from '../interfaces/totals';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
   emotRef: AngularFirestoreCollection<ITotals>;
   emot$: Observable<ITotals[]>;
   
   testRef: AngularFirestoreCollection<ITotals>;
   test$: Observable<any[]>;
   
   constructor(private afs:AngularFirestore){
   }
    
   getEmotionsSnapshots(sortName, sortDir):Observable<ITotals[]>{
      this.testRef = this.afs.collection('emotionsByDay', ref => ref.orderBy(sortName, sortDir));
      this.test$ = this.testRef.snapshotChanges();
      return this.test$;
   }
}
