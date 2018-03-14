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

    saveEmotion(emo): Promise<any> {
        var reg = new Emotion();
        reg.name = emo.name;
        reg.intensity = emo.intensity;
        reg.datetime = new Date().getTime();
        var ref = this.afs.collection<Emotion>('emotions');
        var p = ref.add({ ...reg });
        return p;
    }
}
