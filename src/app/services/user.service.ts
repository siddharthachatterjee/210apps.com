import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User, auth } from 'firebase';

@Injectable({
    providedIn: `root`
})

export class UserService {
    constructor() {

    }

    user: Observable<User> = new Observable<User>(subscriber => {
        auth().onAuthStateChanged(() => {
            subscriber.next(auth().currentUser)
        });
    })
}