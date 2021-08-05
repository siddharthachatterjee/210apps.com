import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule,  } from 'angularfire2' 
import { AngularFireDatabaseModule } from 'angularfire2/database'

//import { firebaseConfig } from './shared/firebaseConfig'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizzesModule } from './home/quizzes/quizzes.module';
import { NavbarComponent } from './home/quizzes/navbar/navbar.component';
import { CreateQuizModule } from './create-quiz/create-quiz.module';
import { QuizModule } from './quiz/quiz.module';
import { CreateSurveyModule } from './create-survey/create-survey.module';
import { SurveyModule } from './survey/survey.module';
import { SurveyStatsModule } from './survey-stats/survey-stats.module';
import { HompageModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { LearnModule } from './learn/learn.module'
import { ModalModule } from './modal/modal.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { ExplainCardsModule } from './explain-cards/explain-cards.module';
import { NewFeatureModule } from './new-feature/new-feature.module';
import { ExploreModule } from './explore/explore.module';

@NgModule({
  declarations: [
    AppComponent,
   // NavbarComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    QuizzesModule,
    LearnModule,
    //QuizzesModule,
    CreateQuizModule,
    CreateSurveyModule,
    QuizModule,
    SurveyModule,
    SurveyStatsModule,
    HompageModule,
    ModalModule,
    TopNavModule,
    ExplainCardsModule,
    NewFeatureModule,
    ExploreModule

   // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
   
  ],

  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
