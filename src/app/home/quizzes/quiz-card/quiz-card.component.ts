import { Component, Input } from '@angular/core'

import { IQuiz } from 'src/app/shared/shared-interfaces'

@Component({
    selector: 'app-quiz-card',
    templateUrl: './quiz-card.component.html',
    styleUrls: ['./quiz-card.component.css']
})

export class QuizCardComponent {
    showFullQuizTitle: boolean = false

    @Input() quiz: IQuiz

    @Input() key: string

}