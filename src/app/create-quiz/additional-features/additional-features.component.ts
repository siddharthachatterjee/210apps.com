import { Component, Input, OnInit } from '@angular/core'

import { IQuiz } from 'src/app/shared/shared-interfaces'

@Component({
    selector: 'app-create-quiz-additional-features',
    templateUrl: './additional-features.component.html',
    styleUrls: ['./additional-features.component.css', '../create-quiz.component.css']
})

export class AdditionalFeaturesComponent implements OnInit { 
    @Input() newQuiz: IQuiz

    showAddOns: boolean = false

    private _newTag: string = '' 

    ngOnInit() {
       // document.getElementById('new-page').addEventListener('click', () => this.showAddOns = false)
    }

    set newTag(value: string) { this._newTag = value }
    get newTag() { return this._newTag }

    set privacy(value: string | boolean) { this.newQuiz.private = value === 'true' || value === true ? true : false }
    get privacy() { return this.newQuiz.private }
    
    setImage(target) {
        console.log(target.value)
        const reader = new FileReader()
        reader.onload = event => this.newQuiz.img = event.target.result
        reader.readAsDataURL(target.files[0])
    }

    addTag() {
        this.newQuiz.tags.push(this.newTag)
        this.newTag = ''
    }

    deleteTag(tagNumber: number) {
        this.newQuiz.tags = this.newQuiz.tags.filter((tag, i) => i !== tagNumber)
    }
    
}