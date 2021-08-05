import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { auth }  from 'firebase';

//import { usersRef, USERS } from '../shared/firebaseConfig'
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
    user

    new: boolean = false;

    email: string = '';

    username: string = ''

    error: boolean = false
    errorMessage: string

    password: string = ''

    loading: boolean = false

    styles(isNew: boolean) {
        return {
            margin: '10px',
            padding: '5px',
            cursor: 'pointer',
            'border-bottom': '1px solid',
            'color': isNew === this.new ? 'blue' : 'grey'
        }
    }
    constructor(private router: Router) { 
        
    }

    signUp(e) {
       this.loading = true
       this.error = false
        auth().createUserWithEmailAndPassword(this.username, this.password)
            .then(() => auth().currentUser.sendEmailVerification().catch(console.log))
            .catch(error => {
                //this.loading = false
                //console.log(error.toString().length)
                if (!error.toString().length) {
                    alert('aa')
                    //this.signedIn.emit()
                } else {
                    this.error = true
                    this.errorMessage = error
                }
            })
            
        if (!this.error ) {
            this.signedIn.emit()
            //this.loading = false
        }
        this.user = auth().currentUser
    //     e.preventDefault()
    //     console.log(this.users.filter(user => user.username === this.username))
    //     this.user = {
    //         username: this.username,
    //         password: this.password
    //     }
    // if (!this.users.some(user => user.username === this.username)) {
    //    usersRef.push(this.user)   
    //    this.signedIn.emit(this.user)
    //    this.error = false
    // } else {
    //     this.error = true
    //     this.errorMessage = `Username exists`
    // }
    }

    // actionCodeSettings = {
    //     // URL you want to redirect back to. The domain (www.example.com) for this
    //     // URL must be whitelisted in the Firebase Console.
    //     url: 'http://210apps.com/account',
    //     // This must be true.
    //     handleCodeInApp: true,
    //     iOS: {
    //       bundleId: 'com.example.ios'
    //     },
    //     android: {
    //       packageName: 'com.example.android',
    //       installApp: true,
    //       minimumVersion: '12'
    //     },
    //     dynamicLinkDomain: 'example.page.link'
    //   };

    signIn(e) {
        this.loading = true
        this.error = false
        auth().signInWithEmailAndPassword(this.username, this.password)
            .catch(error => {
                //this.loading = false
                if (!error.toString().length) {
                    this.signedIn.emit()
                } else {
                    this.error = true
                    this.errorMessage = error
                }
            }) 
        if (!this.error) {
            this.signedIn.emit()
        }
    //     e.preventDefault()
    //     this.user = this.users.find(user => user.username === this.username && user.password === this.password)
    //    if (this.user) {
    //         this.signedIn.emit(this.user)
    //         this.error = false
    //    } else {
    //        this.error = true
    //        this.errorMessage = 'Username or password is incorrect'
    //    }
    }

    ngOnInit() { 
        
    }

    @Output() signedIn: EventEmitter<any> = new EventEmitter()
}