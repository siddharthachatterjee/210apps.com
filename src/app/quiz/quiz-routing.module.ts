import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { QuizComponent } from './quiz.component'
import { CommonModule } from '@angular/common'

const routes: Routes = [
    { path: 'quizzes/:quiz', component: QuizComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class QuizRoutingModule { }