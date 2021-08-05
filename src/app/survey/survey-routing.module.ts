import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { CommonModule } from '@angular/common'

import { SurveyComponent } from './survey.component'

const routes: Routes = [
    { path: 'surveys/:survey', component:  SurveyComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class SurveyRoutingModule { }