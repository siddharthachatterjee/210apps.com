import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyStatsComponent } from './survey-stats.component';
import { SurveyStatsRoutingModule } from './survey-stats-routing.module';



@NgModule({
    imports: [ CommonModule, SurveyStatsRoutingModule ],
    exports: [],
    declarations: [ SurveyStatsComponent ],
    providers: [],
})
export class SurveyStatsModule { }
