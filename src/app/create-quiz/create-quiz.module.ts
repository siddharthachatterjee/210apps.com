import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CreateQuizComponent } from './create-quiz.component';
import { CreateQuizRoutingModule } from './create-quiz-routing.module';
import { AdditionalFeaturesComponent } from './additional-features/additional-features.component';

@NgModule({
    imports: [ CommonModule, CreateQuizRoutingModule, FormsModule ],
    declarations: [ CreateQuizComponent, AdditionalFeaturesComponent ],
    exports: [ CreateQuizComponent ]
})

export class CreateQuizModule { }