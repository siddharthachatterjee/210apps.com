import { Component, OnInit } from '@angular/core';

//import { firebaseConfig } from './shared/firebaseConfig'
import { ActivatedRoute, Router } from '@angular/router';
import { User, auth } from 'firebase';
import { DataService } from './services/data.service';
import { IData, ISurvey, IQuiz } from './shared/shared-interfaces';
import { UserService } from './services/user.service';
import { initializeApp, analytics} from 'firebase'
//import { renderVue } from 'src/assets/vue/renderVue';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  getQuizzes 
  getSurveys 
  surveys
  quizzes
  trending: any[]

  user: User 
  usersQuizzes

  isSignedIn: boolean= false

  searchValue: string = ''

  showNew: boolean = false

  showMenu: boolean = false

  showFullSearch: boolean = false

  falseCondition: boolean = false

  closeNotification = document.cookie.includes("notificationClosed: true")

  route: Location

  constructor(
    public dataService: DataService,
    public userService: UserService,
    private router: Router) {

  }

    clear() {
        this.searchValue = '';
        this.showFullSearch = false
    }

  // constructor(public route: ActivatedRoute) {
  //   //console.log(this.route.snapshot.url)
  // }

  exitNotification() {
    this.closeNotification = true
    document.cookie = 'notificationClosed: true'
  }

  ngOnInit() {
    // document.cookie = ''
    // this.closeNotification = false
   // alert(document.cookie)
    //document.cookie = ''
    //this.router.navigate(['/to-do'])
    
    this.dataService.data.subscribe((data: IData) => {
      this.quizzes = data.quizzes;
      //console.log(data.quizzes)
      this.surveys = data.surveys;
     const sortByNew = (arr: any[]) => 
        arr.sort((a: IQuiz | ISurvey, b: IQuiz | ISurvey) => b.id - a.id)
          .filter((quiz: any) => quiz.status !== 'incomplete' && (!quiz.private || quiz.public))
          .slice(0, 5)
          .sort((a, b) => b.views - a.views)

     //console.log(sortByNew(data.quizzes))
      this.trending = sortByNew(data.quizzes)//.sort((a: any, b: any) => b.views - a.views)
      //console.log(this.quizzes)t
    })

    this.userService.user.subscribe((user: User): void => {
      this.user = user
      // if (user) {
      //   this.router.navigate(['/explore'])
      // }
     // user.
    })
    //console.log(location.pathname)
    
    window.onscroll = () => {
      if (window.scrollY > 75 && document.getElementsByTagName('nav')[0]) {
        document.getElementsByTagName('nav')[0].className = 'scrolled'
  
      } else {
        document.getElementsByTagName('nav')[0].className = 'regular'
      }
    }

    setInterval(() => {
      this.route = location;
      //(this.route && this.route.pathname != '/') && this.clear()
      //this.user = auth().currentUser
      //console.log(this.dataService.quizzes)
      //this.getQuizzes = getQuizzes//() => this.dataService.quizzes
      //this.getSurveys = getSurveys//() => this.dataService.surveys
    
    }, 1)
  }
}
