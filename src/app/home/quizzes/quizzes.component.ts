import { Component, OnInit, Input, OnChanges } from '@angular/core'

//import { getQuizzes, getKey, QUIZES, SURVEYS, get, getSurveyKey, getSurveys } from '../../shared/firebaseConfig'
import { IQuiz, ISurvey, IData } from '../../shared/shared-interfaces'
import { sort } from '../../services/sort.service'
import { Title } from '@angular/platform-browser'
import { auth } from 'firebase'
import { DataService } from 'src/app/services/data.service'

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})

export class QuizzesComponent implements OnInit, OnChanges { 
    @Input() data
    @Input() dataValues: any[]

    @Input() showAll: boolean = false
    @Input() show?: [number, number] 

    Object = Object

    @Input() showSurveysInstead: boolean = false


    @Input() onlyUsers: boolean 

    filteredQuizzes: any[ ] 
    sortedQuizzes: any[ ]

    loadTime: number = 0

    @Input() searchValue: string 

    


    getKey 

    quizzes: IQuiz[]
    quizKeys: string[]

    getSurveyKey

    constructor(private titleService: Title,
        public dataService: DataService) {}
    sortQuizzes(sortValue: [ string, boolean | 'true' | 'false']) {
        this.sortedQuizzes = Object.values(this.dataValues)
            .filter(quiz => this.onlyUsers || quiz.status !== 'incomplete')
            .sort((a, b) => 
                sortValue[1] === true || sortValue[1] === 'true'?  
                b[sortValue[0]] - a[sortValue[0]] : 
                a[sortValue[0]] - b[sortValue[0]]
            )
            // .map((quiz, i, arr) => ({
            //     ...quiz,
            //     key: Object.keys(this.dataValues)[Object.values(this.dataValues).indexOf(quiz)]//.find((q, index) => JSON.stringify(q) == JSON.stringify(quiz))
            // }))

        
       // this.sortedQuizzes.shift()
     this.filteredQuizzes = this.sortedQuizzes
     . filter(quiz => {
        return (
            quiz.author.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            quiz.tags && quiz.tags.some(tag => tag.toLowerCase().includes(this.searchValue.toLowerCase())) ||
            quiz.name.toLowerCase().includes(this.searchValue.toLowerCase())
        )
    })
    }

    ngOnChanges() {
        //this.sortQuizzes()
        if (Object.values(this.dataValues).length && this.sortedQuizzes) {
            this.filteredQuizzes = this.sortedQuizzes.filter(quiz => {
                return (
                    quiz.author.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                    quiz.tags && quiz.tags.some(tag => tag.toLowerCase().includes(this.searchValue.toLowerCase())) ||
                    quiz.name.toLowerCase().includes(this.searchValue.toLowerCase())
                )
            })

            // : 
            //    getSurveys().filter(quiz => quiz.status !== 'incomplete')
            //     // .filter(quiz => {
            //     // return (
            //     //     quiz.author.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            //     //     quiz.tags && quiz.tags.some(tag => tag.toLowerCase().includes(this.searchValue.toLowerCase())) ||
            //     //     quiz.name.toLowerCase().includes(this.searchValue.toLowerCase())
            //     // )
            // //})
            
        }
    }

    retrieveData(retrieveDataTimer) {
        //this.dataValues.length && console.log(`${this.data} data retrieved succesfully`)
        this.sortQuizzes([ 'id', true ])
        //console.log(this.filteredQuizzes)
        clearInterval(retrieveDataTimer)
    }

    styles() {
        return this.show[1] !== this.filteredQuizzes.length && {
            //    'width': '80%',
            //    'height': 'max-content',
            //    'margin': 'auto',
            // 'grid': true
            'width': this.onlyUsers? '60%' : '75%' ,
            'overflow-x': 'auto',
           ' width': 'max-content',
           'text-align': 'center',
           'margin': 'auto'
            //'display': 'grid',
           // 'grid-template-columns': `repeat(${this.show[1]},auto)`,
        }
    }

    shiftForward() {
        this.show[0]++
        this.show[1]++
    }
    ngOnInit() {
        this.retrieveData(null)
    }
}

