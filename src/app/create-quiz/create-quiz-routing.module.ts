import { RouterModule, Routes } from '@angular/router';

import { CreateQuizComponent } from './create-quiz.component';

const routes: Routes = [
    { path: 'create', component: CreateQuizComponent },
    { path: 'edit/:quizKey', component: CreateQuizComponent }
];

export const CreateQuizRoutingModule = RouterModule.forRoot(routes);