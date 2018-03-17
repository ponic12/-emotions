import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Emotion } from '../interfaces/emotion';
import { ITotals } from '../interfaces/totals';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {

    testRef: AngularFirestoreCollection<ITotals>;
    test$: Observable<any[]>;

    constructor(private afs: AngularFirestore) {
    }

    getEmotionsSnapshots(sortName, sortDir): Observable<ITotals[]> {
        this.testRef = this.afs.collection('emotionsByDay', ref => ref.orderBy(sortName, sortDir));
        this.test$ = this.testRef.snapshotChanges();
        return this.test$;
    }

    saveEmotion(pl): Promise<any> {
        const path = `emotions/${pl.user}_${pl.datetime}`;
        var p = this.afs.doc(path).set(Object.assign({}, pl));
        // var ref = this.afs.collection<Emotion>('emotions');
        // var p = ref.add({ ...pl });
        return p;
    }
}
