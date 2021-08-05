import { RouterModule, Routes } from '@angular/router';

import { CreateSurveyComponent } from './create-survey.component';


const routes: Routes = [
    { path: 'new-survey', component: CreateSurveyComponent },
    { path: 'edit-survey/:surveyKey', component: CreateSurveyComponent }
];

export const CreateSurveyRoutingModule = RouterModule.forRoot(routes);