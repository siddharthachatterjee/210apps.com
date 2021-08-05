import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISurvey, IData } from '../shared/shared-interfaces';
//import { getSurvey, SURVEYS, editSurvey, saveResults } from '../shared/firebaseConfig';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { database } from 'firebase';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: [
        '../shared/shared-styles.css',
        './survey.component.css'
    ]
})

export class SurveyComponent implements OnInit {
    survey: ISurvey
    selectedQuestion
    selectedQuestionIndex: number = 0
    results
    surveyId: string
    saveResults: (survey: ISurvey, results) => void

    constructor(private route: ActivatedRoute,
                private titleService: Title,
                public dataService: DataService) {
    }

    ngOnInit() { 
        window.scrollTo(0, 0)
        this.surveyId = this.route.snapshot.paramMap.get('survey')
        this.dataService.data.subscribe((data: IData):void => {
            const survey = data.surveys.find(survey => survey.key === this.surveyId)//data.surveys[data.surveyKeys.indexOf(this.surveyId)]
            this.survey = survey
        //clearInterval(timer)
            if (!this.results) {
                this.titleService.setTitle('Survey - ' + survey.name)
                this.selectedQuestion = survey.questions[ this.selectedQuestionIndex ]
                this.results =  survey.questions.map((question, i) => ({
                    type: question.type,
                    answer: '',
                    choicesPicked: question.choices.map((choice, i) => ({
                        choiceNumber: i,
                        picked: false
                    })) 
                }))
            }
            // if (!(this.selectedQuestionIndex in this.survey.questions)) {
            //     data.saveSurveyResults(this.surveyId, this.results)
            // }
            this.saveResults = data.saveSurveyResults
        })
       // const timer = setInterval(() => {
           // this.survey = getSurvey(this.surveyId)
            //this.survey && this.retrieveData(null)
        //}, 1)
    }

    retrieveData(timer) {
        
    }

    next() {
        this.selectedQuestionIndex++
        this.selectedQuestion = this.survey.questions[ this.selectedQuestionIndex ]
        if (!this.survey.questions[ this.selectedQuestionIndex ]) {
            console.log(this.surveyId)
            this.saveResults(this.survey, this.results)
           //database().ref(`surveys/${this.surveyId}/stats`).push(this.results)
        }
    }

    saveStats(choiceNumber: number) {
        if (this.selectedQuestion.type === 'choice') {
            this.results[ this.selectedQuestionIndex ]
                .choicesPicked[ choiceNumber ]
                .picked = 
            !this.results[ this.selectedQuestionIndex ]
                .choicesPicked[ choiceNumber ]
                .picked
        } 
        //console.log(this.results)
    }

    saveSingleAnswer(choiceNumber: number, event) {
        //event.target.checked = true//!event.target.checked
        this.results[ this.selectedQuestionIndex ].choicesPicked = 
        this.results[ this.selectedQuestionIndex ].choicesPicked.map((choice, i) => ({
            ...choice,
            picked: i === choiceNumber
        }))
    }   
}