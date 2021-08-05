import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CreateSurveyComponent } from './create-survey.component';
import { CreateSurveyRoutingModule } from './create-survey-routing.module';


@NgModule({
    imports: [ CommonModule, FormsModule, CreateSurveyRoutingModule ],
    exports: [],
    declarations: [ CreateSurveyComponent ],
    providers: [],
})
export class CreateSurveyModule { }
