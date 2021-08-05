import { Component, OnInit } from '@angular/core';

import { ISurvey, IData } from '../shared/shared-interfaces';
import { letters, AlphabetService } from '../services/alphabet.sevice'
//import { addSurvey, getSurveyKey, getSurvey, SURVEYS, editSurvey, SURVEYS_KEYS, getSurveys, getSurveyKeys } from '../shared/firebaseConfig';
import { Title } from '@angular/platform-browser';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
    selector: 'app-create-survey',
    templateUrl: './create-survey.component.html',
    styleUrls: [
        '../shared/shared-styles.css', 
        './create-survey.component.css'
    ],
   // providers: [DataService]
})


export class CreateSurveyComponent implements OnInit {
    public _false: boolean = false
    templateSurvey: ISurvey = {
        name: 'Untitled Survey',
        author: auth().currentUser.displayName,
        authorEmail: auth().currentUser.email,
        questions: [],
        id: this.dataService._surveys.length,//`${auth().currentUser.displayName}(${auth().currentUser.email})-survey-${Math.floor(Math.random() * 1000)}`,
        stats: [],
        private: false,
        subject: 'other',
        status: 'incomplete',
    } 
    newSurvey = this.templateSurvey

    letters: string[] = this.alphabetService.alphabet
    surveyCreated: boolean = false

    surveyKey: string

    resolved: boolean = false

    constructor(private titleService: Title,
        private router: Router,
        public alphabetService: AlphabetService,
        public dataService: DataService) { }

    ngOnInit() { 
        !auth().currentUser && this.router.navigate(['signin'])
        window.scrollTo(0, 0)
        this.titleService.setTitle('Survey Creator')
        this.dataService.add('surveys', this.templateSurvey)
        this.dataService.data.subscribe((data: IData) => {
           //console.log('aaa')
            this.surveyKey =  data.surveys[data.surveys.length - 1].key
           //console.log(data.surveys[data.surveys.length - 1])
        })
    }

    createSurvey() {
        this.dataService.edit(`surveys/${this.surveyKey}`, {
            ...this.newSurvey,
            status: 'complete',
            author: auth().currentUser.displayName,
            authorEmail: auth().currentUser.email
        })
        this.surveyCreated = true
    }

    addQuestion() {
        this.newSurvey.questions.push({
            question: 'Survey Question?',
            type: 'single-answer',
            choices: [
                { option: 'Option A' },
                { option: 'Option B' }
            ]
        })
    }

    set public(val: boolean | string) {
        this.newSurvey.private = val === true || val === 'true'
    }

    get public() {
        return this.newSurvey.private
    }
    deleteQuestion(questionNumber) {
        this.newSurvey.questions = this.newSurvey.questions.filter((question, i) => i != questionNumber)
    }

    addChoice(questionNumber) {
        this.newSurvey.questions[ questionNumber ].choices.push({
            option: `Option ${letters[ this.newSurvey.questions[ questionNumber].choices.length ].toUpperCase() }`
        })
    }
    deleteChoice(questionNumber, choiceNumber) {
        this.newSurvey.questions[ questionNumber ].choices = this.newSurvey.questions[ 
            questionNumber 
        ].choices.filter((choice, i) => i != choiceNumber)
    }
}