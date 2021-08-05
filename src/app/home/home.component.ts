import { Component, OnInit } from '@angular/core';

//import { getQuizzes, getSurveys } from '../shared/firebaseConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { User, auth } from 'firebase';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { IData } from '../shared/shared-interfaces';
import { UserService } from '../services/user.service';

@Component({
    selector: `app-homepage`,
    templateUrl: `./home.component.html`,
    styleUrls: ['../app.component.css']
})

export class HomepageComponent implements OnInit {
    tab: string = 'your quizzes'
    closeMenu: boolean = false
    showQuizzes: [number, number] = [0, 5];

    private _displayName: string = ''

    displayNameEdited: boolean = false

    user: User
    usersQuizzes = []
    usersSurveys = []

    isSignedIn: boolean= false

    searchValue: string = ''

    showNew: boolean = false

    showMenu: boolean = false

    showFullSearch: boolean = false

    falseCondition: boolean = false

    // getQuizzes = getQuizzes
    // getSurveys = getSurveys
    constructor(public route: ActivatedRoute,
        private titleService: Title,
        private router: Router,
        public dataService: DataService,
        public userService: UserService) { }

    clear() {
        this.searchValue = '';
        this.showFullSearch = false
    }

    redirect() {
       // clearInterval(timer)
        this.router.navigate(['/account'])
       
    }

    set displayName(value: string) {
        this.displayNameEdited = true
        this._displayName = value
        this.user && this.user.updateProfile({
            displayName: value
        })
    }

    get displayName() {
        return this._displayName
    }
    onSignedIn() {
            //setTimeout(() =>, 500)
    }
    ngOnInit() {
        this.userService.user.subscribe((user: User): void => {
            this.user = user
            user && window.location.pathname == '/signin' && this.router.navigate(['account'])
            // if (this.user && !user.displayName) {
            //     this.displayName = user.email.split('@')[0]
            // }else {
            this.displayName = user && (user.displayName || user.email.split(`@`)[0])
            //}
            this.titleService.setTitle(`
                210apps.com - ${location.pathname == '/'? 
                    "Create and View Quizzes and Surveys for Free": 
                    location.pathname == "/account"? 
                        `My Profile` : 
                        'Sign In'
            }`)
            this.dataService.data.subscribe((data: IData):void => {
                if (this.user) {
                    this.usersQuizzes = data.quizzes.filter(quiz => quiz.authorEmail === this.user.email)
                    this.usersSurveys =  data.surveys.filter(survey => survey.authorEmail === this.user.email)
                }
            })
         });
         // setTimeout(() => {
             //     window.scrollTo(0, 5)
        // }, 100)
    }

    switchTab(tab: string) {
        this.tab = tab
    }
    signOut() {
        //if (confirm('Are you sure you want to sign out? ')) {
            auth().signOut().then(() => {
             this.router.navigate(['/'])
            }).catch(err => alert(err))
        //}
    }
}