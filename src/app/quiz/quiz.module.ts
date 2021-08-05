import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QuizRoutingModule } from './quiz-routing.module'
import { QuizComponent } from './quiz.component'

@NgModule({
    imports: [ QuizRoutingModule, CommonModule ],
    declarations: [ QuizComponent ],
    exports: [ QuizComponent ]
})

export class QuizModule { }