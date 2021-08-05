import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-feature',
    templateUrl: './new-feature.component.html',
    styleUrls: ['./new-feature.component.css']
})

export class NewFeatureComponent implements OnInit {
    slide: number = 1
    slidesLength: number = 11
    constructor() { }

    ngOnInit() { 
        setInterval(() => {
            this.slide++
            if(this.slide > this.slidesLength) {
                this.slide = this.slidesLength
                setTimeout(() => this.slide = 1, 1000)
            }
        }, 1000)
    }
}