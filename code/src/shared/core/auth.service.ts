import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/switchMap';
// import 'rxjs/add/observable/throw';

import { User } from './user';


@Injectable()
export class AuthService {
    user: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore) {
        console.log('AuthService constructor');

        this.user = this.afAuth.authState
            .switchMap(user => {
                if (user)
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                else
                    return Observable.of(null);
            });
    }

    verifyLoggedIn() {
        return this.afAuth.authState;
    }

    loginGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    signOutUser() {
        this.afAuth.auth.signOut();
        


        //     mAuth.signOut();

        //     // Google sign out
        //     Auth.GoogleSignInApi.signOut(mGoogleApiClient).setResultCallback(
        //         new ResultCallback<Status>() {
        //             @Override
        //     public void onResult(@NonNull Status status) {
        //         updateUI(null);
        //     }
        // });
    }

    async signInUser(email, pass) {
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass);
            console.log(res);
        }
        catch (err) {
            console.error(err);
        }
    }

    async registerUser(email, pass) {
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
            console.log(res);
        }
        catch (err) {
            console.error(err);
        }
    }

    private oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((cred) =>
                this.updateUserData(cred.user)
            )
    }


    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            username: user.uid
        }

        return userRef.set(data);
    }

}