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

    getTotals(username):Observable<any>{
        var un = this.getUserKey(username);
        var d = new Date();
        var yyyy = d.getFullYear();
        var sm = (d.getMonth() + 1); 
        var mm = ("0" + sm).slice(-2);
        var sd = d.getDate();
        var dd = ("0" + sd).slice(-2);
        var dstr = yyyy + mm + dd;
        var key = un + '_' + dstr;
        var totRef = this.afs.doc('totalsByDate/'+key);
        var res = totRef.valueChanges();
        return res;
    }

    saveEmotion(pl): Promise<any> {
        const path = `emotions/${pl.user}_${pl.datetime}`;
        var p = this.afs.doc(path).set(Object.assign({}, pl));
        // var ref = this.afs.collection<Emotion>('emotions');
        // var p = ref.add({ ...pl });
        return p;
    }
    getUserKey(username):string{
        var str = username.replace(/\s/g,'');
        str = str.toUpperCase();
        return str;
    }
}
