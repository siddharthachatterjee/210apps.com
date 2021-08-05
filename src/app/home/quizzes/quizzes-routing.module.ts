import { NgModule } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'

import { QuizzesComponent } from './quizzes.component'

const routes: Routes = [
    {path: 'quizzes',  pathMatch: 'full', redirectTo: '' }//, component: QuizzesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class QuizzesRoutingModule { }