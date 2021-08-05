import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-sort-quizzes',
    templateUrl: './sort-quizzes.component.html'
})

export class SortQuizzesComponent {
    private _sortValue: string = 'id'
    private _largestToSmallest: boolean | 'true' | 'false' = true
    set sortValue(val: string) { 
        this._sortValue = val
        this.changed.emit([ this.sortValue, this._largestToSmallest ]) 
    }

    get sortValue() { return this._sortValue }

    set largestToSmallest(val: boolean | 'true' | 'false') {
        this._largestToSmallest = val
        this.changed.emit([ this.sortValue, this.largestToSmallest ])
    }

    get largestToSmallest() { return this._largestToSmallest }

    @Output() changed = new EventEmitter<[ string, boolean | 'true' | 'false']>()
}