import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { QuizzesComponent } from './quizzes.component'
import { QuizzesRoutingModule } from './quizzes-routing.module'
import { QuizCardComponent } from './quiz-card/quiz-card.component'
import { SortQuizzesComponent } from './sort-quizzes/sort-quizzes.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SurveyCardComponent } from './survey-card/survey-card.component'



@NgModule({
    imports: [ CommonModule, QuizzesRoutingModule, FormsModule ],
    declarations: [ 
        QuizzesComponent, 
        QuizCardComponent, 
        SurveyCardComponent,
        SortQuizzesComponent,
        NavbarComponent 
    ],
    exports: [ QuizzesComponent ]
})

export class QuizzesModule { }