import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { IQuiz, IData } from '../shared/shared-interfaces'
//import { addQuiz, QUIZES, editQuiz, getKeys, getQuiz } from '../shared/firebaseConfig'
import { letters, AlphabetService } from '../services/alphabet.sevice'
import { Title } from '@angular/platform-browser'
import { ThrowStmt } from '@angular/compiler'
import { auth } from 'firebase'
import { DataService } from '../services/data.service'

@Component({
    selector: 'app-create-quiz',
    templateUrl: './create-quiz.component.html',
    styleUrls: ['./create-quiz.component.css', '../shared/shared-styles.css']
})

export class CreateQuizComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                public alphabetService: AlphabetService,
                private titleService: Title,
                public router: Router,
                public dataService: DataService) {
            
    }



    // untitledQuizzes: number = QUIZES.filter(quiz => quiz.name.includes('Untitled Quiz')).length + 1
    
    quizCreated: boolean = false
    quizSaved: boolean = false

    showAddOns: boolean = false

    loadTime: number = 0

    inEditMode: boolean = this.route.snapshot.url[0].path === 'edit'

    templateQuiz: IQuiz = {
        name: `Untitled Quiz`,
        id: this.dataService._quizzes.length,
       // id: QUIZES.length,
        author: auth().currentUser.displayName,
        questions: [ ],
        tags: [ ],
        views: 0,
        status: 'incomplete',
        private: false,
        authorEmail: auth().currentUser.email
    }

    newQuiz: IQuiz =  !this.inEditMode &&  this.templateQuiz 

    quizKey: string 

    letters: string[ ] = this.alphabetService.alphabet

    createQuiz()  {
        this.dataService.edit(`quizzes/${this.quizKey}`, {
            ...this.newQuiz,
            status: 'complete',
            author: auth().currentUser.displayName,
            authorEmail: auth().currentUser.email
        })
        this.quizCreated = true
    }

    saveQuiz() {
        this.dataService.edit(`quizzes/${this.quizKey}`, this.newQuiz)
        //this.quizSaved = true
    }

   
    

    set quizName(value: string) { this.newQuiz.name = value } 
    get quizName() { return this.newQuiz.name }

    set author(value: string) { this.newQuiz.author = value }
    get author() { return this.newQuiz.author }


    addQuestion() {
        //console.log(this.route)
        this.newQuiz.questions.push({
            question: 'question?',
            choices: [
                { option: 'Option A' },
                { option: 'Option B' }
            ],
            correctAnswers: [ 0 ]
        })
    }



    deleteQuestion(questionNumber: number) {
        this.newQuiz.questions = this.newQuiz.questions.filter((question, i) => i !== questionNumber)
    }

    addChoice(questionNumber: number) {
        this.newQuiz.questions[questionNumber].choices.push({
            option: `Option ${this.letters[this.newQuiz.questions[questionNumber].choices.length].toUpperCase()}`
        })
    }

    deleteChoice(questionNumber: number, choiceNumber: number) {
        this.newQuiz.questions[questionNumber].choices = this.newQuiz.questions[questionNumber].choices.filter((choice, i) => i !== choiceNumber)
    }

    setCorrectAnswer(questionNumber: number, choiceNumber: number) {
        this.newQuiz.questions[questionNumber].correctAnswers = [ +choiceNumber ]
    }

    logLoadTime(quizKeyTimer) {
        clearInterval(quizKeyTimer)
        console.log('Key retrieved in: ', this.loadTime, 'ms')

    }



    set privacy(value: string | boolean) { this.newQuiz.private = value === 'true' || value === true  }
    get privacy() { return this.newQuiz.private }
    
    setImage(target) {
        console.log(target.value)
        const reader = new FileReader()
        reader.onload = event => this.newQuiz.img = event.target.result
        reader.readAsDataURL(target.files[0])
    }

   

    deleteTag(tagNumber: number) {
        this.newQuiz.tags = this.newQuiz.tags.filter((tag, i) => i !== tagNumber)
    }

    ngOnInit() {
        !auth().currentUser && this.router.navigate(['signin'])
        window.scrollTo(0, 0)
      !this.inEditMode && this.dataService.add('quizzes', this.templateQuiz)
        //const quizKeyTimer = setInterval(() => {
            // this.loadTime++
            // this.quizKey =  !this.inEditMode && getKeys()[getKeys().length - 1];
            // (getKeys().length) && this.logLoadTime(null)
       // }, 1)

       if (!this.newQuiz) {
            this.quizKey = this.route.snapshot.params.quizKey
            this.newQuiz = this.dataService._quizzes.find(quiz => quiz.key === this.quizKey)
        } else {
            this.dataService.data.subscribe((data: IData) => {
                this.quizKey = data.quizzes[data.quizzes.length - 1].key
            })
        }
        this.titleService.setTitle(this.inEditMode ? 'Edit Quiz - ' + this.newQuiz.name :  'Quiz Creator')
        setInterval(() => {
            this.saveQuiz()
        }, 1000)
    }
}