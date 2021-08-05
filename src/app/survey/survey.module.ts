import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module'



@NgModule({
    imports: [ SurveyRoutingModule, CommonModule, FormsModule ],
    exports: [],
    declarations: [ SurveyComponent ],
    providers: [],
})
export class SurveyModule { }
