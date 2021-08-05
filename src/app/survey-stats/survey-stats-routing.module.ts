import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { SurveyStatsComponent } from './survey-stats.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'stats/:key', component: SurveyStatsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule ],
    exports: [ RouterModule ]
})

export class SurveyStatsRoutingModule { }