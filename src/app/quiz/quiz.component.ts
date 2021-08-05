import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

//import { addView, getQuizzes, getQuiz } from '../shared/firebaseConfig'
import { IQuiz, IQuestion, IQuestionStatus, IData } from '../shared/shared-interfaces'
import { Title } from '@angular/platform-browser'
import { DataService } from '../services/data.service'

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css', '../shared/shared-styles.css']
})

export class QuizComponent implements OnInit {
    quiz: IQuiz

    quizStatus: IQuestionStatus[ ] = [ ]

    selectedQuestion: IQuestion
    selectedQuestionIndex: number = 0

    correctAnswers: number = 0
    incorrectAnswers: number = 0
    tries: number = 0

    showCorrectAlert: boolean = false
    showCorrectAfterTries: boolean = false

    viewAdded: boolean = false

    constructor(private route: ActivatedRoute,
                private titleService: Title,
                public dataService: DataService) { }

    setViewAdded(quiz) {
      //  addView(quiz)
        this.viewAdded = true
    }

    ngOnInit(): void {
       setTimeout(() => window.scrollTo(0, 0), 100)
        //setInterval(() => {
            const quizId: string = this.route.snapshot.paramMap.get('quiz')
            this.dataService.data.subscribe((data: IData) => {
                const quiz = data.quizzes.find(quiz => quiz.key === quizId)
                //console.log(quiz)
                this.quiz = quiz//data.quizzes[data.quizKeys.indexOf(quizId)];
                this.selectedQuestion = data.quizzes && this.quiz.questions[this.selectedQuestionIndex];
                if (data.quizzes.length && !this.viewAdded) {
                    this.viewAdded = true
                    this.titleService.setTitle('Quiz - ' + quiz.name);
                    data.addQuizView(quizId, quiz)
                }
            });//getQuiz(quizId)//.find((quiz: IQuiz) => quiz.id.toString() == quizId)
            // this.selectedQuestion = this.quiz && this.quiz.questions[this.selectedQuestionIndex];
        //}, 100)
    }

    
    checkAnswer(evt, index: number): void {
       // console.log(this.quiz)
        this.tries++
        if (this.quiz
                .questions[this.selectedQuestionIndex]
                .correctAnswers
                .some(correctIndex => correctIndex === index) ) {
            if (!this.quizStatus[this.selectedQuestionIndex]) {
                this.correctAnswers++
                this.showCorrectAlert = true
            } else {
                this.showCorrectAfterTries = true
            }

            this.quizStatus[this.selectedQuestionIndex] = {
                isCorrect: true,
                tries: this.tries,
                questionIndex: this.selectedQuestionIndex
            }
            evt.target.disabled = true
            evt.target.type = 'checkbox'
            setTimeout(() => {
                this.selectedQuestionIndex++
                this.selectedQuestion = this.quiz.questions[this.selectedQuestionIndex] || null
                this.showCorrectAlert = false
                this.tries = 0
                this.showCorrectAfterTries = false
            }, 1750)
        } else {
            this.markAsIncorrrect(evt.target, index)
        }
    }

    markAsIncorrrect(target, index: number): void {
        this.incorrectAnswers = this.quizStatus.filter(questionStatus => !questionStatus.isCorrect && questionStatus.questionIndex === this.selectedQuestionIndex).length ? this.incorrectAnswers : this.incorrectAnswers + 1
        target.disabled = true
        target.parentNode.style.textDecoration = 'line-through'

        if ( this.quiz.questions[this.selectedQuestionIndex].choices[index].explanation) {
            const explanation = document.createElement('strong') 
            explanation.innerHTML = this.quiz.questions[this.selectedQuestionIndex].choices[index].explanation
            target.parentNode.parentNode.appendChild(explanation)
        }

        this.quizStatus[this.selectedQuestionIndex] =  {
            isCorrect: false,
            questionIndex: this.selectedQuestionIndex,
            tries: this.tries
        }

    }
}

