import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './home.component';
import { QuizzesModule } from './quizzes/quizzes.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SignInModule } from '../sign-in/sign-in.module'
import { ModalModule } from '../modal/modal.module';


@NgModule({
    imports: [
         QuizzesModule,
        CommonModule, 
        AppRoutingModule, 
        FormsModule, 
        SignInModule,
        ModalModule
    ],
    exports: [HomepageComponent],
    declarations: [HomepageComponent],
    providers: [],
})
export class HompageModule { }
