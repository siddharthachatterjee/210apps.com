import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISurvey, IData } from '../shared/shared-interfaces';
//import { getSurvey } from '../shared/firebaseConfig';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-survey-stats',
    templateUrl: './survey-stats.component.html',
    styleUrls: ['../create-survey/create-survey.component.css','../shared/shared-styles.css']
})

export class SurveyStatsComponent implements OnInit {
    survey: ISurvey
    surveyKey: string
    responses: number
    results
    stats
    colors = [
        'red', 'blue', 'yellow', 'green', 'orange'
    ]
    constructor(private route: ActivatedRoute,
                private titleService: Title,
                public dataService: DataService) { }

    ngOnInit() { 
        window.scrollTo(0, 0)
        //const timer = setInterval(() => {
            this.surveyKey = this.route.snapshot.paramMap.get('key')
            this.dataService.data.subscribe((data: IData): void => {
                this.survey = data.surveys.find(survey => survey.key === this.surveyKey)//data.surveys[data.surveyKeys.indexOf(this.surveyKey)]
                if (!this.results) {
                    this.stopTimer(null)
                }
            })
           // this.survey && this.stopTimer(null)
        //}, 1)
    }

    stopTimer(timer) {
        clearInterval(timer)
        this.titleService.setTitle('Survey Stats - ' + this.survey.name)
        this.responses = Object.values(this.survey.stats).length
        this.results = 
            this.survey.questions
                    .map((val, i) => 
                        Object.values(this.survey.stats)
                            .map((value, index) => value[i]       
                    ))
        this.stats = this.survey.questions.map((q, i) => q.choices.map((c, choiceMumber) => this.getStats(i, choiceMumber)))
    }

    getStats(questionNumber: number, choiceNumber) {
        if (this.survey && this.results[ questionNumber ]) {
            const number =  
                this.results[ questionNumber ]
                    .filter(result => result.choicesPicked
                        .some(c => c.choiceNumber === choiceNumber && c.picked
                    ))
                    .length 
            return {
                number,
                percentage: Math.round(100 * number / this.results[ questionNumber ].length)
            }
        }//.filter(c => c.option == choice.option)
    }

    nonePicked(questionNumber: number) {
        var output: number = 0
        for (let choiceNumber:number = 0; choiceNumber < this.survey.questions[questionNumber].choices.length; choiceNumber++) {
          output += this.getStats(questionNumber, choiceNumber).number
        }
        //console.log(output)
        return this.responses - output
        //return this.results[questionNumber].filter(result => result.choicesPicked.filter(c => c.picked).length !== 0).length == 0
    }
}

