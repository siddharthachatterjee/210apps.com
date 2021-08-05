import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';
import { IQuiz, ISurvey, IData } from '../shared/shared-interfaces';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.css']
})

export class ExploreComponent implements OnInit {
    quizzes
    surveys
    searchValue: string = ''
    tab 

    constructor(public dataService: DataService,
        public searchService: SearchService) { }

    switchTab(tab) {
        this.tab = tab
        document.cookie += `;tab:${tab}`
    }

    ngOnInit() {
        this.switchTab('quizzes') 
        window.scrollTo(0, 0)
        this.dataService.data.subscribe((data: IData) => {
            this.quizzes = data.quizzes
            this.surveys = data.surveys
            //console.log(data.quizzes)
        })
        this.searchService.search.subscribe(searchValue => {
            this.searchValue = searchValue
          //  console.log(this.searchValue)
        })
    }
}