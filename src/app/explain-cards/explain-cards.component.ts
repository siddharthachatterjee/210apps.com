import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'firebase';

@Component({
    selector: 'app-explain-cards',
    templateUrl: './explain-cards.component.html'
})

export class ExplainCardsComponent implements OnInit {
    user: User
    constructor(public userService: UserService) { }

    ngOnInit() { 
        this.userService.user.subscribe(user => {
            this.user = user
        })
    }
}