import { Injectable, NgZone } from '@angular/core';
import { User } from './user'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'

@Injectable({
    providedIn: 'root'
})
export class AuthServices {
    userData: any;
    constructor (
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,  
        public ngZone: NgZone
    ) {
        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
                this.router.navigateByUrl('/homepage', { replaceUrl: true });
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })
    }

    //signIn with email & password
    signIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }

    //register user with email & password
    registerUser(email,password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
    }

    // Returns true when user is looged in
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    // Store user in localStorage
    setUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified
        }
        return userRef.set(userData, {
          merge: true
        })
    }

    // Sign-out 
    signOut() {
        return this.ngFireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/', { replaceUrl: true });
        })
    }
}