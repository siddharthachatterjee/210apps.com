import { NgModule } from '@angular/core';

import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { QuizzesModule } from '../home/quizzes/quizzes.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ExploreRoutingModule, QuizzesModule, CommonModule],
    exports: [ExploreComponent],
    declarations: [ExploreComponent],
    providers: [],
})
export class ExploreModule { }
