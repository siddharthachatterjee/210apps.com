import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-explain-card',
    templateUrl: './explain-card.component.html',
    styleUrls: ['./explain-card.component.css']
})

export class ExplainCardComponent implements OnInit {
    @Input() iconStyle: string

    @Input() callToAction?: string
    constructor() { }

    ngOnInit() { }
}