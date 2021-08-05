import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'firebase';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['./top-nav.component.css', '../app.component.css']
})

export class TopNavComponent implements OnInit {
    showFullSearch: boolean = false;

    _searchValue: string = ''

  //@Output() searchValueChange: EventEmitter<string> = new EventEmitter<string>()
    
    set searchValue(val: string) {
        this.searchService.searchValue = val
        this._searchValue = val
    }

    get searchValue() {
        return this._searchValue
    }

    search($event) {
        $event.preventDefault()
        this.router.navigate(['/explore'])
    }

    showNew: boolean = false;

    route: Location;

    user:User

    
    constructor(public userService: UserService,
        public searchService: SearchService,
        public router: Router,
        public titileService: Title) { }

    clear() {
        this.searchValue = '';
        this.showFullSearch = false
    }
    
    // showNew() {

    // }

    ngOnInit() { 
        this.titileService.setTitle('Exlore Hundreds of Quizzes and Surveys | 210apps.com')
        this.userService.user.subscribe((user: User) => {
            this.user = user
        })
        setInterval(() => {
            this.route = location;
            //(this.route && this.route.pathname != '/') && this.clear()
            //this.user = auth().currentUser
            //console.log(this.dataService.quizzes)
            //this.getQuizzes = getQuizzes//() => this.dataService.quizzes
            //this.getSurveys = getSurveys//() => this.dataService.surveys
          
        }, 1)
    }

    //@Output() 
}