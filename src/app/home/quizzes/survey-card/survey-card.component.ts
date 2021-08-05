import { Component, OnInit, Input } from '@angular/core';
import { ISurvey } from 'src/app/shared/shared-interfaces';

@Component({
    selector: 'app-survey-card',
    templateUrl: './survey-card.component.html'
})

export class SurveyCardComponent implements OnInit {
    @Input() survey: ISurvey

    responses: number = 0

    @Input() key: string

   
    constructor() { }

    ngOnInit() {
        this.responses = this.survey.stats? Object.values(this.survey.stats).length : 0
     }
}